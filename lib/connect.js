const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.URL
const client = new MongoClient(url);

const connection = async (prop) => {
    let connect = await client.connect();
    connect = connect.db('project');
    return connect.collection(prop)
}

module.exports = connection;