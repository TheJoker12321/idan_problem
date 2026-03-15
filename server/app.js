import createMongo from "./mongoDB/connectMonge.js";
import 'dotenv/config'

console.log(process.env.URI);


const connect = await createMongo({uri: process.env.URI, dbName: 'db' }) 

const res = await connect.collection('users').insertOne({name: 'idan', age: 21})
console.log(res);
