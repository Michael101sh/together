/* 
  if there is an error thrown in the DB, asyncMiddleware
  will pass it to next() and express will handle the error */
const raw = require("../../middleware/route.async.wrapper");
const express = require("express");
const marker = require("@ajar/marker");
const { sendEmailAboutUser, sendEmailWithPass } = require("./user.actions");
const router = express.Router();

router.use(express.json());

const userModel = require("./user.model");

// CREATE USER
router.post(
  "/",
  raw(async (req, res, next) => {
    const user = req.body;
    marker.obj(user, "create a user");
    await userModel.create(user, function(err) {
      if (err) {
        marker.err(err, "Failed to create user");
        res.json(500, { error: "Failed to add" });
      } else {
        sendEmailAboutUser(user);
        res.json(user);
      }
    });
  })
);

// GET ALL USERS
router.get(
  "/",
  raw(async (req, res) => {
    const users = await userModel.find({});
    res.status(200).json(users);
  })
);

// GETS A SINGLE USER
router.get(
  "/:id",
  raw(async (req, res) => {
    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(404).json({ status: "No user found." });
    res.status(200).json(user);
  })
);

// DELETES A USER
router.delete(
  "/:id",
  raw(async (req, res) => {
    const user = await userModel.findByIdAndRemove(req.params.id);
    res.status(200).json(user);
  })
);

// UPDATES A SINGLE USER
router.put(
  "/:id",
  raw(async (req, res) => {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      upsert: true
    });
    res.status(200).json(user);
  })
);

// USER LOGIN
router.post(
  "/login",
  raw(async (req, res, next) => {
    const userData = req.body;
    marker.obj(userData, "user login");
    await userModel.findOne(
      { nickname: userData.nickname, psw: userData.psw },
      function(err, user) {
        if (user) {
          marker.green("Login Successful");
          delete user.psw;
          res.status(200).json(user);
        } else {
          marker.red("Login NOT Succesful");
          res.json({ error: "Login failed" });
        }
      }
    );
  })
);

// IS USER EXISTS
router.post(
  "/isExists",
  raw(async (req, res, next) => {
    const user = req.body;
    marker.obj(user, "check whether the user exists");
    await userModel.findOne({ nickname: user.nickname }, function(err, user) {
      if (user) {
        marker.red("Nickname is taken");
        res.json("Taken");
      } else {
        marker.green("Nickname is available");
        res.json("Ok");
      }
    });
  })
);

// SEND USER'S PASSWORD
router.post(
  "/sendPass",
  raw(async (req, res, next) => {
    const nickname = req.body.nickname;
    const email = req.body.email;
    await userModel.findOne({ nickname: nickname }, function(err, user) {
      if (user) {
        sendEmailWithPass(email, user.psw);
        res.json("Ok");
      } else {
        res.json("don't exist");
      }
    });
  })
);

// UPDATES USER CONFIRMATION
router.patch(
  "/setConfirmation/:id",
  raw(async (req, res) => {
    console.log("bla");
    await userModel.findByIdAndUpdate(
      req.params.id,
      { isVerified: req.body.isVerified },
      function(err) {
        if (err) {
          marker.err(err, "Cannot Update");
          res.json(500, { error: "Update failed" });
        } else {
          marker.green("Update success");
          res.json({ status: "Update success" });
        }
      }
    );
  })
);

// SET USER IS_PSYCHOLOGIST
router.patch(
  "/setPsyc/:id",
  raw(async (req, res) => {
    await userModel.findByIdAndUpdate(
      req.params.id,
      { isPsychologist: req.body.isPsychologist },
      function(err) {
        if (err) {
          marker.err(err, "Cannot Update");
          res.json(500, { error: "Update failed" });
        } else {
          marker.green("Update success");
          res.json({ status: "Update success" });
        }
      }
    );
  })
);

module.exports = router;
