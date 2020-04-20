
const express = require('express');

const signupController = require('../controllers/signupController.js');

const loginController = require('../controllers/loginController.js');

const profileController = require('../controllers/profileController.js');

const homeController = require('../controllers/homeController.js');

const postController = require('../controllers/postController.js');

const profile_viewController = require('../controllers/profile_viewController.js');

const searchController = require('../controllers/searchController.js');

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

app.get('/view_own/:email/:_id', postController.getPost);

app.post('/view_own/:email/:_id', postController.postPost);

app.get('/view_only/:email/:_id', postController.getPost);

app.get('/edit_profile/:email', profileController.getEditProfile);

app.post('/edit_profile/:email', profileController.editProfile);

app.get('/rate/:email', profile_viewController.getRate);

app.post('/rate/:email', profile_viewController.postRate);

app.get('/edit_post/:_id', postController.getEditPost);

app.post('/edit_post/:_id', postController.editPost);

app.get('/search/:email', searchController.getSearch);

app.post('/search/:email', searchController.postSearch);

module.exports = app;
