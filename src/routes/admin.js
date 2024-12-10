const express = require('express');

const Router = express.Router();

const UserController = require('../controllers/admin/users');
const ClientController = require('../controllers/admin/clients');
const ReleaseController = require('../controllers/admin/releases');

Router.get('/', (req, res) => {
    console.log('Server Is Running on port');
});
Router.get('/users', UserController.indexUsers);
Router.post('/users', UserController.saveUser);
Router.get('/users/:id', UserController.editUser);
Router.patch('/users/:id', UserController.updateUser);
Router.delete('/users/:id', UserController.deleteUser);

Router.get('/clients', ClientController.indexClients);
Router.post('/clients', ClientController.saveClient);
Router.get('/clients/:id', ClientController.editClient);
Router.patch('/clients/:id', ClientController.updateClient);
Router.delete('/clients/:id', ClientController.deleteClient);


Router.get('/releases', ReleaseController.IndexReleases);


module.exports = Router;