import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 8069;

app.use(express.raw());

app.get('/', (request,res)=>{
    
    fs.readFile('ascii-art.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Se rompio to:\n', err);
        return res.status(500).send('Error reading file.');
      }
        res.set('Content-Type', 'text/plain');
        res.send(data);
    });
});

app.get('/mini', (request,res)=>{
    
    fs.readFile('ascii-art mini.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Se rompio to:\n', err);
        return res.status(500).send('Error reading file.');
      }
        res.set('Content-Type', 'text/plain');
        res.send(data);
    });
});


app.listen(PORT, ()=>{
    console.log(`SERVER ON: http://localhost:${PORT}`)
})