let express=require("express");
let app=express();
app.use(express.json());
let Store=require('./schema')

let port=5000;
let connect=require('./connection')


app.listen(port,async()=>{
    try {

        await connect;
       console.log("Server is running on port 5000")
        
    } catch (error) {
        console.log({error:"something went wrong"}) 
    }
})



app.post('/restarent',async(req,res)=>{
   try {
         let restarent=req.body;
         let data=await Store.create(restarent);
         res.json(data);
    
   } catch (error) {
    console.log(error)
    res.status(500).json({error:"something went wrong"})
   }
})
app.get('/restarent',async(req,res)=>{
   try {
        let id=req.params.id;
        let restarent=await Store.find();
        res.status(200).json(restarent);
    
   } catch (error) {
    console.log(error)
    res.status(500).json({error:"something went wrong"})   }
})

app.get('/restarent/:id',async(req,res)=>{
    try {
         let id=req.params.id;
         let restarent=await Store.findById(id);
         res.status(200).json(restarent);
     
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"something went wrong"})    }
 })
app.put('/restarent/:id',async(req,res)=>{
    try {
        let id=req.params.id;
        let restarent=req.body;
        let data=await Store.findByIdAndUpdate(id,restarent,{new:true});    
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"something went wrong"})    }})

app.delete('/restarent/:id',async(req,res)=>{
    try {
        let id=req.params.id;
        let restarent=await Store.findByIdAndDelete(id)
        if(!restarent){
            return res.status(404).json({error:"restarent not found"})
        }
        res.status(200).json("deleted");
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"something went wrong"})    }
})


