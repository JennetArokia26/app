const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const personSchema = require ('./models/schema');

const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://jennetarokia:app@app.tpzp8fs.mongodb.net/')

app.get('/',(req,res)=>{
 res.send('hello');
});

app.get('/api',async (req,res)=>{
    try{
      const data = await personSchema.find();
      res.json(data);
    }catch (error) {
    res.status(500).json({message:error.message});
    }
   });
   app.post('/api',async(req,res)=>{
    const data =new personSchema({
      person:req.body.person,
      weight:req.body.weight,
    });
    try{
      const savedData = await data.save();
      res.status(201).json(savedData);
    } catch(error){
     res.status(400).json({message:error.message});
   }});

app.listen(3000);