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


app.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let data = db.ref("locker").orderByChild("id").equalTo(id)
    data.once("child_added", (snapshot) => {
        res.send(snapshot.val())
    })
})

app.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id) - 1
    db.ref("locker/" + id).update(req.body)
    res.send({ msg: "บันทึกข้อมูลสำเร็จ" })
})

exports.lockBox = functions.https.onRequest(app);
