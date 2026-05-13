import express from 'express';
import dotenv from 'dotenv';
import {printear} from './print.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8069;
const IP = process.env.IP || "0.0.0.0";

app.use(express.raw());

app.get('/', async (request,res)=>{
    res.send(await printear());
});

app.get('/mini', async (request,res)=>{
    res.send(await printear(true));
});

app.listen(PORT, IP, ()=>{
    console.log(`SERVER ON: http://${IP == "0.0.0.0"? "localhost" : IP}:${PORT}`)
})