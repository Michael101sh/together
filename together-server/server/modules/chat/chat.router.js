/* 
  if there is an error thrown in the DB, asyncMiddleware
  will pass it to next() and express will handle the error */
const raw = require("../../middleware/route.async.wrapper");
const express = require("express");
const marker = require("@ajar/marker");
const { sendEmailAboutMessage } = require("./chat.actions");

const router = express.Router();

router.use(express.json());

const ChatModel = require("./chat.model");

// CREATE CHAT
router.post(
  "/",
  raw(async (req, res, next) => {
    const chat = req.body;
    marker.obj(chat, "create a chat");
    await ChatModel.create(chat, function(err) {
      if (!err) {
        let subject = 'פנייה חדשה ממשתמש/ת - אפליקציית "ביחד"';
        let title = 'שלום, התקבלה באפליקציית "ביחד" ' + chat.title;
        if (!chat.isLocked) {
          sendEmailAboutMessage(title, subject);
        }
        marker.green("Message addded");
        res.json({ status: "Message addded" });
      } else {
        marker.err("Message add failed");
        res.json(500, { error: "Message add failed" });
      }
    });
  })
);

// GET ALL CHATS
router.get(
  "/",
  raw(async (req, res) => {
    let query = {};
    if (req.query.query !== undefined) {
      query = JSON.parse(req.query.query);
    }
    await ChatModel.find(query, (err, chats) => {
      if (err) {
        marker.err(err, "Cannot give you a list of chats");
        res.json(404, { error: "not found" });
      } else {
        marker.green("Returning list of chats");
        res.status(200).json(chats);
      }
    });
  })
);

// GETS A SINGLE CHAT
router.get(
  "/:id",
  raw(async (req, res) => {
    const chat = await ChatModel.findById(req.params.id);
    if (!chat) return res.status(404).json({ status: "No chat found." });
    marker.green("Returning specific chat");
    res.status(200).json(chat);
  })
);

// DELETES A CHAT
router.delete(
  "/:id",
  raw(async (req, res) => {
    const chat = await ChatModel.findByIdAndRemove(req.params.id);
    if (!chat) return res.status(404).json({ status: "No chat found." });
    res.status(200).json(chat);
  })
);

// UPDATES A SINGLE CHAT
router.patch(
  "/:id",
  raw(async (req, res) => {
    const message = req.body;
    ChatModel.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { content: message.content } },
      { upsert: true, new: true },
      function(err) {
        if (err) {
          marker.err(err, "Reply add failed");
          res.json(500, { error: "Update failed" });
        } else {
          if (message.userNickname.indexOf("הפסיכולוג") <= -1) {
            let messageToSend =
              "שלום, התקבלה באפליקציית " +
              '"ביחד" תגובה חדשה לפנייה, ע"י המשתמש/ת ' +
              message.userNickname;
            let subject = 'תגובה חדשה לפנייה - אפליקציית "ביחד"';
            sendEmailAboutMessage(messageToSend, subject);
          }
          marker.green("Reply addded");
          res.json({ status: "Update success" });
        }
      }
    );
  })
);

// SET CHAT TREAT_STATUS
router.put(
  "setTreatStatus/:id",
  raw(async (req, res) => {
    await userModel.findByIdAndUpdate(
      req.params.id,
      { wasTreated: req.body.wasTreated },
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
