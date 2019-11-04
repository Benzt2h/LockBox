const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require("express")
const cors = require('cors')
admin.initializeApp(functions.config().firebase)

let db = admin.database()

const app = express()

app.use(cors({ origin: true }))

app.get('/', (req, res, next) => {
    let data = db.ref("locker")
    data.once("value", (snapshot) => {
        res.send(snapshot.val())
    })
})


app.get('/test', (req, res, next) => {
    let data = db.ref("locker").orderByChild("id").equalTo(1);
    data.on("value", (snapshot) => {
        res.send(snapshot.val())
    })
})

exports.lockBox = functions.https.onRequest(app);
