import express from "express"
import { errorHandler } from "./middleware/errorHandler.js"



const app=express()
app.use(express.json())


app.use(errorHandler)
app.get("/" ,(req,res)=>{
    res.status(200).json({"message":"welcom to paypulse backend challenge"})
})


export default app