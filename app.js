const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'))

app.get('/',(rep,res)=>res.sendFile(path.join(__dirname,'views','home.html')))

app.get('/about.html',(rep,res)=>res.sendFile(path.join(__dirname,'views','about.html')))

app.get('/musica.html',(rep,res)=>res.sendFile(path.join(__dirname,'views','musica.html')))

app.get('/conctact.html',(rep,res)=>res.sendFile(path.join(__dirname,'views','conctact.html')))
app.listen(port,()=> console.log('serveidor funcionando en el puerto' + port))