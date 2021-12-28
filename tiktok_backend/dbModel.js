import mongoose from "mongoose";
import { stringify } from "nodemon/lib/utils";

const tiktokSchema =mongoose.Schema({
   url:String,
   channel:String,
   song:String,
   likes:String,
   mesaages:String,
   description:String,
   shares:String,
});