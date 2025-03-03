let express=require("express");
let app=express();
app.use(express.json());
let Store=require('./schema')

let port=5000;
let connect=require('./connection')


app.listen(port,async()=>{
    console.log("Server is running on port 5000")
})
app.post('/restarent',async(req,res)=>{
   try {
    
   } catch (error) {
    console.log({error:"something went wrong"})
   }
})
app.get('/restarent/:id',async(req,res)=>{
   try {
    
   } catch (error) {
    console.log({error:"something went wrong"})
   }
})
app.delete('/restarent',async(req,res)=>{
    try {
        let id=req.params.id;
        let restarent=Store.findByIdAndDelete(id)
        res.json(restarent);
        
    } catch (error) {
        console.log({"error":"something went wrong"})
    }
})


