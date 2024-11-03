const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())

const Port = process.env.PORT || 8080;

app.listen(Port, () => {
    console.log(`Server running at PORT ${Port}`);
})

app.use('/', require('./handler/handle'))