import { MongoClient } from 'mongodb'

let db;
let client;

export default async function createMongo({ uri, dbName }){
    
    if (db) return db

    client = new MongoClient(uri)
    await client.connect()
    db = client.db(dbName)
    console.log('connected');
    return db
}