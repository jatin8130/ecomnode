const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const jwt = require('jsonwebtoken');
const jwtkey = 'ecom';

const PORT = process.env.URL || 5000;

app.get('/', async (req, res) => {
    jwt.sign({}, jwtkey, {expiresIn: '2h'}, (err, token)=>{
        if(err) throw res.send({status: false});
        res.send({auth: token, status: true});
    })
})

app.use('/', verifytoken, require('./handller/handle'));

function verifytoken (req, res, next){
    const token = req.headers['authorization'];
    if(token){
        jwt.verify(token, jwtkey, (err, valid)=>{
            if(err) throw err;
            next();
        })
    } else {
        res.send('pls provide valid token');
    }
}

app.listen(PORT, ()=>{
    console.log(`Server listing port ${PORT}`);
})