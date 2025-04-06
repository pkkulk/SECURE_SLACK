import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
fullName : {type: String ,required :true},
email :{type: String ,required:true},
password :{type: String,required:true},
});
export default mongoose.model("User",userScehma, "User");