//Require packages
const express = require('express');
const mongoose = require('mongoose');
const { db } = require('./models/user');

const app = express();
const port = 3000;

// Middleware
app.use (express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

//Mongo DB connection using mongoose
const mongoURI = 'mongodb://localhost:27017/SOCIAL-NETWORK-API';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
app.listen(port, () => {
console.log(`Server started on port ${port}`);

}).on('error', function(err) {
    console.log(err);
 }); 

//Import route files
const apiRoutes = require('./routes');

//Define routes
app.use('/api', apiRoutes);












