const mongoose =require("mongoose");

const userschema =new mongoose.Schema ({

    email: {
        type:String,
        reqired:true,
    },

    username: {
        type:String,
    },
    
    password: {
        type:String,
        reqired:true,
    },
    list: [ 
        {   
            type:mongoose.Types.ObjectId,
            ref:"List",
        },
    
    ],

});

module.exports=mongoose.model("user",userschema);