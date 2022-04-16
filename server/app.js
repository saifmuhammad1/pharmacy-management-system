const express = require ('express')
const dotenv = require('dotenv')
const Connectdb = require('./dataBase/db')
const registerRoutes = require('./routes/registerRoutes.js')
const productRouter =require("./routes/productRouter.js")
const cookieParser = require("cookie-parser");
const cors = require('cors')

const app = express()
const port =  '6000'

Connectdb()



app.use(cors())
dotenv.config({path: 'server/.env'})
app.use(cookieParser());

app.use(express.json())
app.use('/v1', registerRoutes)
app.use('/v1', productRouter)


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})