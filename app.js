import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { test } from "./backend/controllers/jugadores.model.js";

dotenv.config();

mongoose.connect(process.env.url)
.then(
    ()=>{
        console.log("BD conectada")
    }
)
.catch(
    (error)=>{
        console.log("BD no se conecto la chingadera")
    }
)

const app = express();
app.use(cors());

app.listen(4003, ()=>{
    console.log('El servidor se escucha en hd UWU')
})

test()