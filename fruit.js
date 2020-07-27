const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitdb",{useNewUrlParser: true});
 const aSchema = new mongoose.Schema({
 	name : String,
 	price : Number
 });
 const Fruit = mongoose.model("mine",aSchema);
 const a = new Fruit({
 	name : "Banana",
 	price : 12
 }) ;
 a.save();
 const sSchema = new mongoose.Schema({
 	name : String,
 	age : Number
 });
 const person = mongoose.model("human",sSchema);
 const p = new person({
 	name : "Ayush",
 	age : 22
 });
 p.save();
 console.log("saved");