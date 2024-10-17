const express = require('express');

const app = express();

const port = 4000;

app.listen(port, ()=>console.log(`this port runs fine from ${port}`));
app.get('/', (req,res)=>{
    res.send('hello world, shit works!');
});

app.post('/post', (req,res)=>{
    res.send('hello world, post works!');
});

app.patch('/update', (req,res)=>{
    res.send('hello world, update works!');
});

app.delete('/delete', (req,res)=>{
    res.send('hello world, delete works!');
});