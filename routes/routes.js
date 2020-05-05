
const express = require('express');

const signupController = require('../controllers/signupController.js');

const loginController = require('../controllers/loginController.js');

const profileController = require('../controllers/profileController.js');

const homeController = require('../controllers/homeController.js');

const postController = require('../controllers/postController.js');

const profile_viewController = require('../controllers/profile_viewController.js');

const searchController = require('../controllers/searchController.js');

const logoutController = require('../controllers/logoutController.js');

const app = express();

app.get('/', loginController.getLogin);

app.post('/', loginController.postLogin);

app.get('/signup', signupController.getSignUp);

app.post('/signup', signupController.postSignUp);

app.get('/getCheckEmail', signupController.getCheckEmail);

app.get('/login', loginController.getLogin);

app.post('/login', loginController.postLogin);

app.get('/getCheckAccount', loginController.getCheckAccount);

app.get('/profile/:email', profileController.getProfile);

app.get('/profile_view/:emailUser/viewing/:email', profile_viewController.getviewProfile);

app.get('/home/:email', homeController.getHome);

app.post('/home/:email', homeController.postHome);

app.get('/view/:email/:_id', postController.getPost);

app.post('/view/:email/:_id', postController.postPost);

app.get('/view_own/:email/:_id', postController.getPost);

app.post('/view_own/:email/:_id', postController.postPost);

app.get('/view_only/:email/:_id', postController.getPost);

app.get('/edit_fullname/:email', profileController.getEditFullname);

app.post('/edit_fullname/:email', profileController.editFullname);

app.get('/edit_pnumber/:email', profileController.getEditPnumber);

app.post('/edit_pnumber/:email', profileController.editPnumber);

app.get('/edit_img/:email', profileController.getEditImage);

app.post('/edit_img/:email', profileController.editImage);

app.get('/rate/:emailUser/rating/:email', profile_viewController.getRate);

app.post('/rate/:emailUser/rating/:email', profile_viewController.postRate);

app.get('/edit_post/:_id', postController.getEditPost);

app.post('/edit_post/:_id', postController.editPost);

app.get('/search/:email', searchController.getSearch);

app.post('/search/:email', searchController.postSearch);

app.get('/logout/:email', logoutController.getLogout);

module.exports = app;
