const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const userRoute = require("./routes/auth")


const bcrypt = require('bcrypt')
dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("db connection successful"))
.catch((err)=>{console.log("error")})




app.set('view-engine' , 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

    } catch {

    }
    req.body.name
})

app.get("/api/test", () => {
    console.log("test is successful")
})

app.use("/api/user", authRoute)
app.use("/api/auth", userRoute)

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running")
})
