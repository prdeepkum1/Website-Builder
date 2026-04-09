import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    avatar:String,
    credits:{type:Number, default:100, min:0},
    // enum ka use condition ke liye kiya jata hai
    plan:{type:String, enum:["free", "pro", "enterprise"], default:"free"}
}, {timestamps:true})

const User = mongoose.model("User", userSchema);
export default User;