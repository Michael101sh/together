// Simple REST API Handler (With MongoDB and Socket.io)
// Author: Yaron Biton misterBIT.co.il and Michael Shachar

"use strict";
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongodb = require('mongodb')

const clientSessions = require("client-sessions");
const upload = require('./uploads');
const app = express();

const serverRoot = 'http://localhost:3003/';
const baseUrl = serverRoot + 'data';

//CORS middleware
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(express.static('uploads'));
app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use(clientSessions({
    cookieName: 'session',
    secret: 'C0d1ng 1s fun 1f y0u kn0w h0w', // set this to a long random string!
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

const http = require('http').Server(app);
const io = require('socket.io')(http);


function dbConnect() {
    return new Promise((resolve, reject) => {
        // Connection URL
        var url = 'mongodb://localhost:27017/seed';
        // Use connect method to connect to the Server
        mongodb.MongoClient.connect(url, function (err, db) {
            if (err) {
                cl('Cannot connect to DB', err)
                reject(err);
            }
            else {
                //cl("Connected to DB");
                resolve(db);
            }
        });
    });
}

// GETs a list
app.get('/data/:objType', function (req, res) {
    const objType = req.params.objType;
    dbConnect().then((db) => {
        const collection = db.collection(objType);
        let query = {};
        if (req.query.query !== undefined) {
            query = JSON.parse(req.query.query);
        }
        console.log(query);
        collection.find(query).toArray((err, objs) => {
            if (err) {
                cl('Cannot get you a list of ', err)
                res.json(404, { error: 'not found' })
            } else {
                cl("Returning list of " + objs.length + " " + objType + "s");
                res.json(objs);
            }
            db.close();
        });
    });
});

// GETs a single
app.get('/data/:objType/:id', function (req, res) {
    const objType = req.params.objType;
    const objId = req.params.id;
    cl(`Getting you an ${objType} with id: ${objId}`);
    dbConnect()
        .then((db) => {
            const collection = db.collection(objType);
            let _id;
            try {
                _id = new mongodb.ObjectID(objId);
            }
            catch (e) {
                return Promise.reject(e);
            }
            return collection.findOne({ _id: _id })
                .then((obj) => {
                    cl("Returning a single" + objType);
                    res.json(obj);
                })
                .catch(err => {
                    cl('Cannot get you that ', err);
                    res.json(404, { error: 'not found' })
                })
        });
});

function sendEmailAboutUser(user) {
    'use strict';
    let emailAddress = user.email;
    let phone = user.cellphone;
    let childName = user.childName;
    let age = user.age;
    let gender = user.gender;
    let nickname = user.nickname;
    let pass = user.psw;
    const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'togetherpsyapp@gmail.com',
            pass: 'avivitandsarit101'
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"Together App" <michael101sh@gmail.com>', // sender address
        to: 'togetherpsyapp@gmail.com', // list of receivers
        subject: 'משתמש חדש לאפליקציית "ביחד"', // Subject line
        // text: 'התראה מאפליקציית "ביחד"' + contactInfo, // plain text body
        html:'<p dir="rtl"> שלום, תלמיד/ה חדש/ה מעוניינ/ת להירשם לאפליקציית "ביחד".'
        + '<br>' + '<br>' +
        'להלן הפרטים שהתלמיד/ה מילא/ה בטופס ההרשמה:' + '<br>' +
        'אימייל: ' + emailAddress + '<br>' +
        'פלאפון: ' + phone + '<br>' +
        'שם: ' + childName + '<br>' +
        'גיל: ' + age + '<br>' +
        'מגדר: ' + gender + '<br>' +
        'כינוי: ' + nickname + '<br>' +
        'סיסמא: ' + pass + '<br>' +
        '</p>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

function sendEmailAboutMessage(message, subject) {
    'use strict';
    const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'togetherpsyapp@gmail.com',
            pass: 'avivitandsarit101'
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"Together App" <togetherpsyapp@gmail.com>', // sender address
        to: 'togetherpsyapp@gmail.com', // list of receivers
        subject: subject, // Subject line
        text: message + "." , // plain text body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}


function sendEmailWithPass(email, pass) {
    'use strict';
    const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'togetherpsyapp@gmail.com',
            pass: 'avivitandsarit101'
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"Together App" <togetherpsyapp@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'סיסמא לאפליקציית "ביחד"', // Subject line
        text: 'שלום, הסיסמא למשתמש שלך היא ' + pass + ". " , // plain text body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}


function callbackOnInsert(res, obj, objType) {
    return function (err, result) {
        if (err) {
            cl(`Couldnt insert a new ${objType}`, err);
            res.json(500, { error: 'Failed to add' })
        } else {
            cl(objType + " added");
            res.json(obj);
        }
    }
}

app.post('/api/registerUser', upload.single('file'), function registerUser(req, res) {
    const objType = 'user';
    cl("POST for " + objType);
    const user = req.body;
    insert(objType, user, res, function(err, result) {
        (callbackOnInsert(res, user, objType))(err, result);
        if (!err) {
            sendEmailAboutUser(user);
        }
    });
});

app.post('/api/isExist', function (req, res) {
    dbConnect().then((db) => {
        (db.collection('user')).findOne({nickname: req.body.nickname}, function (err, user) {
            if (user) {
                cl('Nickname is taken');
                // res.json(403, { error: 'Nickname is taken' })
                res.json('Taken');
            } else {
                cl('Nickname is available');
                res.json('Ok');
            }
        });
    })
});

app.post('/api/sendMessage', upload.single('file'), function sendMessage(req, res) {
    const objType = 'chat';
    cl("POST for " + objType);
    const message = req.body;
    insert(objType, message, res, function(err, result) {
        (callbackOnInsert(res, message, objType))(err, result);
        if (!err) {
            let subject = 'פנייה חדשה ממשתמש/ת - אפליקציית "ביחד"';
            let title = 'שלום, התקבלה באפליקציית "ביחד" ' + message.title;
            if(!message.isLocked) {
                sendEmailAboutMessage(title, subject);
            }
        }
    });
});

function insert(objType, obj, res, callback) {
    delete obj._id;
    // If there is a file upload, add the url to the obj
    // if (req.file) {
    //     obj.imgUrl = serverRoot + req.file.filename;
    // }

    dbConnect().then((db) => {
        const collection = db.collection(objType);

        collection.insert(obj, (err, result) => {
            callback(err, result);
            if (!err) {
                db.close();
            }
        });
    }, function() {
        res.json(500, { error: 'Failed to add' })
    });
}


// Basic Login/Logout/Protected assets
app.post('/api/login', function (req, res) {
    dbConnect().then((db) => {
        db.collection('user').findOne({nickname: req.body.nickname,
            psw: req.body.psw }, function (err, user) {
            if (user) {
                cl('Login Successful');
                delete user.psw;
                req.session.user = user;  //refresh the session value
                res.json(user);
            } else {
                cl('Login NOT Succesful');
                req.session.user = null;
                res.json({ error: 'Login failed' })
            }
        });
    });
});

// POST - adds
app.post('/data/:objType', upload.single('file'), function (req, res) {
    const objType = req.params.objType;
    cl("POST for " + objType);
    const obj = req.body;
    console.log(obj);
    insert(objType, obj, res, function (err, result) {
        if (err) {
            cl(`Couldnt insert a new ${objType}`, err);
            res.json(500, { error: 'Failed to add' })
        } else {
            cl(objType + " added");
            res.json(obj);
        }
    } );
});


// POST
app.post('/api/sendPass', upload.single('file'), function (req, res) {
    const nickname = req.body.nickname;
    const email = req.body.email;
    dbConnect().then((db) => {
        (db.collection('user')).findOne({nickname: nickname}, function (err, user) {
            if (user) {
                sendEmailWithPass(email, user.psw);
                res.json('Ok');
            } else {
                res.json("don't exist");
            }
        });
    });
});


// PUT - updates
app.put('/data/:objType/:id', function (req, res) {
    const objType = req.params.objType;
    const objId = req.params.id;
    const newObj = req.body;
    if (newObj._id && typeof newObj._id === 'string') newObj._id = new mongodb.ObjectID(newObj._id);

    cl(`Requested to UPDATE the ${objType} with id: ${objId}`);
    dbConnect().then((db) => {
        const collection = db.collection(objType);
        collection.updateOne({ _id: new mongodb.ObjectID(objId) }, newObj,
            (err, result) => {
                if (err) {
                    cl('Cannot Update', err)
                    res.json(500, { error: 'Update failed' })
                } else {
                    res.json(newObj);
                }
                db.close();
            });
    });
});

// PATCH - updates
app.patch('/api/setConfirmation/:id/', function (req, res) {
    const objType = 'user';
    const isVerified = req.body.isVerified;
    console.log(req.body);
    const objId = req.params.id;
    dbConnect().then((db) => {
        const collection = db.collection(objType);
        collection.updateOne({_id: new mongodb.ObjectId(objId)},
            {$set:  {isVerified: isVerified}},
                (err, result) => {
                    if (err) {
                        cl('Cannot Update', err);
                        res.json(500, {error: 'Update failed'})
                    } else {
                        res.json({status: 'Update success'});
                    }
                    db.close();
                });
    });
});

// PATCH - updates
app.patch('/api/setPsyc/:id/', function (req, res) {
    const objType = 'user';
    const isPsychologist = req.body.isPsychologist;
    console.log(req.body);
    const objId = req.params.id;
    dbConnect().then((db) => {
        const collection = db.collection(objType);
        collection.updateOne({_id: new mongodb.ObjectId(objId)},
            {$set:  {isPsychologist: isPsychologist}},
            (err, result) => {
                if (err) {
                    cl('Cannot Update', err);
                    res.json(500, {error: 'Update failed'})
                } else {
                    cl('Update success');
                    res.json({status: 'Update success'});
                }
                db.close();
            });
    });
});

// PATCH - updates
app.patch('/api/setTreatStatus/:id/', function (req, res) {
    const objType = 'chat';
    const wasTreated = req.body.wasTreated;
    console.log(req.body);
    const objId = req.params.id;
    dbConnect().then((db) => {
        const collection = db.collection(objType);
        collection.updateOne({_id: new mongodb.ObjectId(objId)},
            {$set:  {wasTreated: wasTreated}},
            (err, result) => {
                if (err) {
                    cl('Cannot Update', err);
                    res.json(500, {error: 'Update failed'})
                } else {
                    res.json({status: 'Update success'});
                }
                db.close();
            });
    });
});

// PATCH - updates
app.patch('/api/addMessage/:id/', function (req, res) {
    const objType = 'chat';
    const message = req.body.message;
    const objId = req.params.id;
    // cl(message);
    dbConnect().then((db) => {
        const collection = db.collection(objType);
        collection.updateOne({_id: new mongodb.ObjectId(objId)},
            {$push:  {content: message}},
            (err, result) => {
                if (err) {
                    cl('Cannot Update', err);
                    res.json(500, {error: 'Update failed'})
                } else {
                    let message = req.body.message;
                    if(message.userNickname.indexOf('הפסיכולוג') <= -1) {
                        let messageToSend = 'שלום, התקבלה באפליקציית ' +
                            '"ביחד" תגובה חדשה לפנייה, ע"י המשתמש/ת ' + message.userNickname;
                        let subject =  'תגובה חדשה לפנייה - אפליקציית "ביחד"';
                        sendEmailAboutMessage(messageToSend, subject);
                    }
                    res.json({status: 'Update success'});
                }
                db.close();
            });
    });
});


// DELETE
app.delete('/data/:objType/:id', function (req, res) {
    const objType = req.params.objType;
    const objId = req.params.id;
    cl(`Requested to DELETE the ${objType} with id: ${objId}`);
    dbConnect().then((db) => {
        const collection = db.collection(objType);
        collection.deleteOne({ _id: new mongodb.ObjectID(objId) }, (err, result) => {
            if (err) {
                cl('Cannot Delete', err);
                res.json(500, { error: 'Delete failed' })
            } else {
                cl("Deleted", result);
                res.json({});
            }
            db.close();
        });
    });
});

// Basic Login/Logout/Protected assets
app.post('/api/login', function (req, res) {
    dbConnect().then((db) => {
        db.collection('user').findOne({nickname: req.body.nickname,
            psw: req.body.psw }, function (err, user) {
            if (user) {
                cl('Login Successful');
                delete user.psw;
                req.session.user = user;  //refresh the session value
                res.json(user);
            } else {
                cl('Login NOT Succesful');
                req.session.user = null;
                res.json(403, { error: 'Login failed' })
            }
        });
    });
});

app.get('/api/logout', function (req, res) {
    req.session.reset();
    res.end('Loggedout');
    res.json({status: 'Update success'});
});

function requireLogin(req, res, next) {
    if (!req.session.user) {
        cl('Login Required');
        res.json(403, { error: 'Please Login' })
    } else {
        next();
    }
}

app.get('/protected', requireLogin, function (req, res) {
    res.end('User is loggedin, return some data');
});


// Kickup our server 
// Note: app.listen will not work with cors and the socket
// app.listen(3003, function () {
http.listen(3003, function () {
	console.log(`Together server is ready at ${baseUrl}`);
    console.log(`GET (list): \t\t ${baseUrl}/{entity}`);
    console.log(`GET (single): \t\t ${baseUrl}/{entity}/{id}`);
    console.log(`PUT (update): \t\t ${baseUrl}/{entity}/{id}`);
    console.log(`POST (add): \t\t ${baseUrl}/{entity}`);

});


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('chat message', function (msg) {
        // console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

cl('WebSocket is Ready');

// Some small time utility functions
function cl(...params) {
    console.log.apply(console, params);
}