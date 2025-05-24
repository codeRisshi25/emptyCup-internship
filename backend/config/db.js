import mongoose from "mongoose";

const db = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/emptycup";
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
        return conn;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default db;