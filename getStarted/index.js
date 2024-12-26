/*const http = require('http');

http.createServer((req,res) => {
    res.write('server is running');
    res.end;
}).listen(3000);*/

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
    res.send("Server is running");
});

const postRoutes = require('./routes/posts');
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to DB"))
    .catch((error) => console.error("Error connecting to DB:", error.message));
