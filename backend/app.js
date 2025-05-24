import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import { createRequire } from 'module';
import Listing from './model/Listing.js';

const require = createRequire(import.meta.url);
const dummyData = require('./model/data.json');

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:5173', 'https://emptycup-rouge.vercel.app/'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

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



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});