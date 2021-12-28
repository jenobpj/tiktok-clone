import Mongoose  from "mongoose";

const tiktokSchema = Mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  mesaages: String,
  description: String,
  shares: String,
});
export default Mongoose.model("tiktokVideos", tiktokSchema);
