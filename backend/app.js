import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import { createRequire } from 'module';
import Listing from './model/Listing.js';

const require = createRequire(import.meta.url);
const dummyData = require('./model/data.json');

const app = express();

app.use(cors());
const instance = db();

const getDbData = async() => {
    const data = await Listing.find();
    return data;
}
const populateDb = async () => {
    const hasData = await Listing.find();
    if (hasData.length === 0) {
        await Listing.insertMany(dummyData);
    } 
}
populateDb()

app.get('/data', async (req,res)=>{
    try {
        const listings = await getDbData();
        res.status(200).json({
            success: true,
            listings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
})


app.listen(8080, () => {
    console.log("server listening on port http://localhost:8080")
})