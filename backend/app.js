import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import Listing from './model/Listing.js';

const app = express();

app.use(cors());
const instance = db();

const getDbData = async() => {
    let listings = [];
    listings = await Listing.find();
    console.log(listings);
}


getDbData();

// app.get('/data', (req,res)=>{

// })


app.listen(8080, () => {
    console.log("server listening on port localhost://8080")
})