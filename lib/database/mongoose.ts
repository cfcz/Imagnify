import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Next.js无状态，每次都要重新连接，利用缓存优化
// global是node.js的全局环境
let cached:MongooseConnection = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = {
        conn:null, promise:null
    }
}

//create a new connection
export const connectToDatabase = async() => {
    if(cached.conn) return cached.conn;
    if(!MONGODB_URL) throw new Error('MONGODB_URL is not defined')

    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URL, {dbName:'imagnify', bufferCommands: false}
    )

    cached.conn = await cached.promise

    return cached.conn;
}