const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database);

//On Database Connection
mongoose.createConnection(config.database, () => {
	console.log('Connected to the database at ' + config.database);
});

//Error On Database Connection
mongoose.connection.on('error', (err) => {
	console.log('Not connected to the database: ' + err);
});

const app = express();

const users = require('./routes/users');

//Heroku Port Linkage
const port = process.env.PORT || 8080;

//Allows access to any domain unless authentication disables routes
app.use(cors());

//Set static directory for frontend framework  
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

//Send Unknown Routes to Index
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, () => {
	console.log('Server started on port ' + port +'.');
});