
const express = require('express');

const signupController = require('../controllers/signupController.js');

const loginController = require('../controllers/loginController.js');

const profileController = require('../controllers/profileController.js');

const homeController = require('../controllers/homeController.js');

const postController = require('../controllers/postController.js');

const profile_viewController = require('../controllers/profile_viewController.js');

const app = express();

app.get('/', loginController.getLogin);

app.post('/', loginController.postLogin);

app.get('/signup', signupController.getSignUp);

app.post('/signup', signupController.postSignUp);

app.get('/login', loginController.getLogin);

app.post('/login', loginController.postLogin);

app.get('/profile/:email', profileController.getProfile);

app.get('/profile_view/:email/:email', profile_viewController.getviewProfile);

app.get('/home/:email', homeController.getHome);

app.post('/home/:email', homeController.postHome);

app.get('/view/:email/:_id', postController.getPost);

app.post('/view/:email/:_id', postController.postPost);

//app.post('/home/:email', homeController.postPost);

// exports the object `app` (defined above)
// when another script exports from this file
module.exports = app;
