import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg"
import cors from "cors";


const port = 3000;
const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());



const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "weatherWardrobe",
  password: "Erto2024",
  port: 5432,
});
db.connect();

async function getItems () {
  const result = await db.query("SELECT * FROM wardrobe");
  items = result.rows
  console.log("found")
}

app.get("/", async (req,res) => {
  
  try{
    getItems()
    console.log(items)
  } catch(err) {
    console.log(err);
  }
});

app.get("/setData", async (req,res) =>{
  try{
    console.log("Got request")
    getItems()
    res.json(items)
  }catch(e){
    console.log(e)
  }
})


app.listen(port,() => {
  console.log(`The app is running on  http://localhost:${port}/`)
});


