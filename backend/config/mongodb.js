import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongo_uri = process.env.MONGO_URI
console.log("mongo uri: ", process.env.MONGO_URI);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect( mongo_uri );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch (error) {
        console.log('Error connectiong to db: ', error);
        process.exit(1);
    }
}
export default connectDB;