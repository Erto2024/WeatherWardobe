import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg"


const port = 3000;
const app = express();

const db = new pg.Client({
  
})
db.connect();


