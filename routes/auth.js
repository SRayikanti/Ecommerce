const router = require("express").Router()
const { models } = require("mongoose")
const  User = require("../models/User")
const CryptoJS = require("crypto-js")

//Register
router.post("/register", (req,res)=>{
    const newuser  = new User({
        username = req.body.username,
        email = req.body.email,
        password = CryptoJS.AES.encrypt(req.body.password, "Secret Passphrase")
    })

    try {
        const savedUser = await newuser.save()
        res.status(200).json(savedUser)
        } catch (err) {
            res.status(500).json(err)
        }
})

module.exports = router;