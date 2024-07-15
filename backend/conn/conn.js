const { response } = require("express");
const mongoose =require("mongoose");

 const conn= async(req,res) => {

try {
    
        await mongoose.connect("mongodb+srv://vivek:vivek123@cluster0.qvobtey.mongodb.net/")
        
        .then(() =>{
            console.log(" mongoose connected");
    
        });
    }
 
 catch (error) {
 response.status(400).json({
     message: "not connected"
 }

 );
 
}
};

  
conn();