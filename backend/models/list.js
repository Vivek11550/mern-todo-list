const mongoose =require("mongoose");

const listschema =new mongoose.Schema ({

    title: {
        type:String,
        reqired:true,
    },

    body: {
        type:String,
        reqired:true,
    },
    user: [ 
        {
            type:mongoose.Types.ObjectId,
            ref:"user",
        },
    
    ],
});

module.exports=mongoose.model("List",listschema);