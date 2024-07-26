import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg"
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import env from "dotenv";



const port = 3000;
const app = express();

let items = [];
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
env.config();


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
}

app.get("/", async (req,res) => {
  
  try{
    getItems()
    console.log(items)
    console.log(__dirname)
  } catch(err) {
    console.log(err);
  }
});

app.get("/setData", async (req,res) =>{
  try{
    getItems()
    res.json(items)
  }catch(e){
    console.log(e)
  }
})


app.listen(port,() => {
  console.log(`The app is running on  http://localhost:${port}/`)
});


