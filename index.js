const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://localhost:5173", // vite
            "https://ecom-com.vercel.app"
        ],
        methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
        credentials: true
    }
));

const Port = process.env.PORT || 8080;

app.listen(Port, () => {
    console.log(`Server running at PORT ${Port}`);
})

app.use('/', require('./handler/handle'))

