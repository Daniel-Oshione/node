const http = require('http');

//first we creatE var for the server (http) then we create another var to handle server request or respond
const server = http.createServer((req, res)=>{
    //REDIRECTING TO EITHER DEfault page or about page
if(req.url == '/'){
    res.write('Welcome to site.');
}
else if(req.url == '/about'){
    res.write('This is about page.');
}
else{
    res.write('Wrong url entered!');
}
res.end();
});

const port = 3000;

server.listen(port,()=>{
    console.log(`server listening on ${port}`);
})