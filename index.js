import { MongoClient } from "mongodb"; //getting function from library
import { mongoURI } from "./secrets.js"; // getting our secret connection strings

const connection = new MongoClient(mongoURI); // connection to our database using our secret connection

await connection.connect(); //Opening connection to our cluster

const db = connection.db('Cluster0'); //Connecting to the specific database

await db.collection('students').insertOne({ name: 'John Therlonge', age: 26 }); //add student

const results = await db.collection('students').findOne({name: 'John Therlonge'}); //get student

console.log(results);

connection.close(); //Disconnect