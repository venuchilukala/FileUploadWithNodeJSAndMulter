const express = require('express')
const path = require('path')
const multer  = require('multer')


const app = express()
const PORT = 8002 

const storage = multer.diskStorage({
    destination : function (req, file, cb){
        return cb(null, './uploads')
    },
    filename : function (req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }

})
const upload = multer({storage})
// const upload = multer({ dest: 'uploads/' })

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

// upload.fields([{name : "profileImage" , name : "coverImage"}])  :----> For multiple images upload


app.listen(PORT, ()=>{
    console.log(`Server Started at : http://localhost:8002`)
})