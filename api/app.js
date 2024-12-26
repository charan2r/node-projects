/*const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("hello world!");

})

app.listen(3000);*/


const fs = require("fs");
const file = "target.txt";

const data = fs.readFileSync(file);
console.log(data.toString());

/*fs.readFile(file, (error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
})*/































/*const {sum} = require("./helper");
const http = require("http");

const server = http.createServer((req,res) => {
    res.end("Hello World");
});
server.listen(3000);

const total = sum(10,20);
console.log(total);*/

