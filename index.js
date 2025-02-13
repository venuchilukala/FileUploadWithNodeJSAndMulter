const express = require('express')
const path = require('path')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
const PORT = 8002 

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/', (req, res) => {
    return res.render("home")
})

app.post('/upload', upload.single("profileImage") ,(req, res)=>{
    console.log(req.file)
    console.log(req.body)
    return res.redirect('/')
})

/* 
re.file :->>>>>>>>>>
    {
    fieldname: 'profileImage',
    originalname: 'profile-pic.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'ff01eb1f7cedbc9d0537221863fb82cc',
    path: 'uploads\\ff01eb1f7cedbc9d0537221863fb82cc',
    size: 381977
    }
*/

app.listen(PORT, ()=>{
    console.log(`Server Started at : http://localhost:8002`)
})