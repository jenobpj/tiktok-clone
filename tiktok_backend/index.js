import express from "express" ;
import mongoose from "mongoose";
 import Videos from './dbModel.js'

//app config
const app = express();
const port = 9000;
//middleware
app.use(express.json());

const connection_url =
  "mongodb+srv://admin:6h6g6z23SGyDjDF@cluster0.8mog6.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post('/v2/posts',(req,res)=>{
  const dbVideos=req.body;

  Videos.create(dbVideos,(err,data)=>{
    if(err){
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
})

app.listen(port, () => {
  console.log(`listening on localhose ${port}`);
});
