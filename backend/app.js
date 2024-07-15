
 //is file me ham server create kar rahe h expresss ki help se

const express = require('express');

// Create an Express application
const app = express();

//connecting server to mongoose database

require("./conn/conn");
// Define a route
// YAHA / ka use home page pata karne ke liye h 
app.get('/', (req, res) => {
  res.send('Hello World!');
  
});

// Define the port the server will listen on
const port = 3000;

// Start listening on the specified port
app.listen(port, () => {
  console.log("server started");
});

// server start karne ke liye( node app.js) use karna h 