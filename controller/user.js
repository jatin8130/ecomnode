const express = require('express');
const { MongoClient } = require('mongodb');
const mongodb = require('mongodb');
let url = 'mongodb+srv://jatin06:mehrajatin@cluster0.z5koddf.mongodb.net/project?retryWrites=true&w=majority';
const client = new MongoClient(url);

const app = express();

const connection = async () => {
    let result = await client.connect();
    result = result.db('project');
    return result.collection('users');
}

const mongo = connection();

const Data = async (req, res) => {
    let data = await mongo;
    data = await data.find().toArray();
    if (data) {
        res.send(data);
    } else {
        res.send({ status: false });
    }
}

const Adddata = async (req, res) => {
    let data = await mongo;
    data = await data.insertOne(req.body);
    if (data) {
        res.send({data, status: true });
    } else {
        res.send({ status: false });
    }
}

const Onedata = async (req, res) => {
    let data = await mongo;
    data = await data.findOne({ _id:new mongodb.ObjectId(req.params.id)});
    if (data) {
        res.send({data, status: true});
    } else {
        res.send({ status: false });
    }
}

const Updatedata = async (req, res) => {
    let data = await mongo;
    data = await data.findOne(req.body);
    if(data){
        res.send({data, status: true});
    } else {
        res.send({status: false});
    }
}

const Deletedata = async (req, res) => {
    let data = await mongo;
    data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    if (data.deletedCount !== 0) {
        res.send({ status: true });
    } else {
        res.send({status: false})
    }
}

module.exports = { Data, Adddata, Onedata, Updatedata, Deletedata }