let mongoose=require("mongoose");

let menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    price:{
        type:Number,
        required:true
    },
      
      
})

let Restaurentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
     cuisine:{
        type:String,
        required:true
    },
    rating:{
        type:String,
    },
    menu:[menuSchema]
    
});
let Store=mongoose.model("store",Restaurentschema);
module.exports=Store;