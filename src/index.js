const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);

mongoose.connect('mongodb://<user>:<password>@ds127015.mlab.com:27015/blog', 
    {
         useNewUrlParser: true 
    }
);

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});