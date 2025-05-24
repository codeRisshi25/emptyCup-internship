import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import { createRequire } from 'module';
import Listing from './model/Listing.js';

const require = createRequire(import.meta.url);
const dummyData = require('./model/data.json');

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://emptycup-rouge.vercel.app',
  'https://emptycup-risshis-projects.vercel.app',
  'https://emptycup-coderisshi25-risshis-projects.vercel.app',
  'https://emptycup-4w4ewzpq0-risshis-projects.vercel.app',
  'https://emptycup-rouge.vercel.app/',
  'https://emptycup-risshis-projects.vercel.app/',
  'https://emptycup-coderisshi25-risshis-projects.vercel.app/',
  'https://emptycup-4w4ewzpq0-risshis-projects.vercel.app/'
];
app.use(cors({
  origin: function(origin, callback) {
    console.log('Request from origin:', origin);
    console.log('Allowed origins:', allowedOrigins);
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      const originWithoutSlash = origin.endsWith('/') ? origin.slice(0, -1) : origin;
      if (allowedOrigins.includes(originWithoutSlash)) {
        callback(null, true);
        return;
      }
      
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
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