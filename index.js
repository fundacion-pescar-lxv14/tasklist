import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConn from './config/db.js';
import authRouter from "./routes/auth.js";
import taskRouter from './routes/tasks.js';

dotenv.config()
const [app,{DATABASE,PORT,URI}]=[express(), process.env]
dbConn(URI, DATABASE)

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use("/", authRouter)
app.use("/tasks", taskRouter)

app.use("/", express.static("public"));
app.listen(PORT, console.log(`Aplicacion ejecutandose en puerto ${PORT}`))