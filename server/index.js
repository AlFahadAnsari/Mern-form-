let express =require('express')
let mongoose =require('mongoose')
let cors = require('cors')
let worker =require('../server/employe')
require('dotenv').config({path:'./file.env'})

let app =express()

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.CONNECT_SERVER)

app.post('/login',(req,res)=>{
    let {email,password} =req.body
    worker.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json('login successful')
            }else{
                res.json('password is incorrect')
            }
        }else{
            res.json('email not found')
        }
    })
})


app.post('/signup',(req,res)=>{
    worker.create(req.body)
    .then(em=>res.json(em))
    .catch(err=>res.json(err))
})


app.listen(3000,()=>{
    console.log('server run port number is 3000');
})