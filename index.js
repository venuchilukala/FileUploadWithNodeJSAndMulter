const express = require('express')
const path = require('path')

const app = express()
const PORT = 8002 

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

app.use(express.json())

app.get('/', (req, res) => {
    return res.render("home")
})

app.listen(PORT, ()=>{
    console.log(`Server Started at : http://localhost:8002`)
})