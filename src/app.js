const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const sequelize = require('./config/database');


const apiRoutes = require('./routes/admin');
const clientRoutes = require('./routes/client');

app.use(bodyParser.urlencoded({extended: false}));

app.use(apiRoutes);
app.use(clientRoutes);

sequelize.sync({ alter: true }).then(result => {
    console.log('Database synchronized');
}).catch(err => {
    console.log(err);
});


app.listen(3000)