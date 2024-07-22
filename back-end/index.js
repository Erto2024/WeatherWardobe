import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg"


const port = 3000;
const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended: ture}));
app.use(bodyParser.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "weatherWardrobe",
  password: "Erto2024",
  port: 5432,
});
db.connect();

app.get("/", async (req,res) => {
  
  try{
    const result = await db.query("SELECT * FROM wardrobe");
    items = result.rows;
    console.log(items)


  } catch(err) {
    console.log(err);
  }
});


app.listen(port,() => {
  console.log(`The app is running on port ${port}`)
});


