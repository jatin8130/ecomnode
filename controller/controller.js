const mongodb = require('mongodb')
const connection = require('../lib/connect')

const Get = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);
        data = await data.find().toArray();
        if (data) {
            res.status(200).send(data);
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const getUser = async (req, res) => {    
    try {        
        const path = req.path.split('/')[1];
        let data = await connection(path);        
        data = await data.find({ userid: req.params.id }).toArray();
        if (data) {
            res.status(200).send(data);            
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const userAdmin = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);
        data = await data.find({ role: req.query.role }).toArray();
        if (data) {
            res.status(200).send(data);
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const Post = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);
        data = await data.insertOne(req.body)
        if (data) {
            res.send({ status: true, data });
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const emailPost = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);
        data = await data.findOne(req.body)
        if (!data) {
            data = await data.insertOne(req.body)
            if (data) {
                res.send({ status: true, data });
            } else {
                res.send({ status: false });
            }
        } else {
            res.send({ status: false })
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const getOne = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);
        data = await data.findOne({ _id: new mongodb.ObjectId(req.params.id) });
        if (data) {
            res.status(200).send(data);
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const emailOne = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);
        data = await data.findOne(req.body);
        if (data) {
            res.status(200).send({ status: true, data });
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }

}

const Put = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);
        data = await data.updateOne(
            { _id: new mongodb.ObjectId(req.params.id) },
            { $set: req.body }
        );
        if (data.modifiedCount == 1) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const Patch = async (req, res) => {
    try {        
        const path = req.path.split('/')[1];
        let data = await connection(path);

        const user = await data.updateOne(
            { _id: new mongodb.ObjectId(req.params.id) },
            { $set: req.body }
        );        
        
        if(user.modifiedCount === 1 ){
            return res.send({ status: true });
        }

        if(user.modifiedCount === 0 ){
            return res.send({ status: false });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

const Delete = async (req, res) => {
    try {
        const path = req.path.split('/')[1];
        let data = await connection(path);        
        data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
        
        if (data.deletedCount == 1) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }

    } catch (error) {
        res.status(500).json({ error: 'An internal server error occurred' });
    }
}

module.exports = { Get, Post, getOne, emailOne, Put, Delete, userAdmin, emailPost, Patch, getUser }