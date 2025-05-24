import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import Listing from './model/Listing.js';

const app = express();

app.use(cors());
const instance = db();

const getDbData = async() => {
    const data = await Listing.find();
    return data;
}

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