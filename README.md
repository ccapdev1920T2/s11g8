# BIDS TO PICK application by Group 8 (S11)
submission by: BROSOTO, MICO, TEOPE <br>

This is Bids to Pick. An application where users can buy and sell different products. The users may sell by posting a product, setting a starting bidding price for it, and setting a due date (end of bidding). Once the product has been posted, other users may buy the product by placing their bids. By the end of the due date, the user with the highest bid will be the one eligible to avail the product. 

## Prerequisites
NodeJS and MongoDB must be installed in the PC. Git is optional.

## Contents
* [controllers](https://github.com/ccapdev1920T2/s11g8/tree/master/controllers) - This folder contains files which defines callback functions for client requests.
* [models](https://github.com/ccapdev1920T2/s11g8/tree/master/models) - This folder contains files for database modeling and access.
* [public](https://github.com/ccapdev1920T2/s11g8/tree/master/public) - This folder contains static assets such as css and image files.
* [routes](https://github.com/ccapdev1920T2/s11g8/tree/master/routes) - This folder contains files which describes the response of the server for each HTTP method request to a specific path in the server.
* [views](https://github.com/ccapdev1920T2/s11g8/tree/master/views) - This folder contains all hbs files to be rendered when requested from the server.
* [index.js](https://github.com/ccapdev1920T2/s11g8/blob/master/index.js) - The main entry point of the web application.

## Installing
1. Download zip or create clone of the repository.
2. Open command prompt.
3. Navigate to project folder.
4. Run the following command:
```
npm install
```
5. After running installation, run the following command:
```
node index.js
```
6. If ran successfully, the following message would be displayed indicating that the application has started properly:
```
app listening at port 3000
Connected to: mongodb://localhost:27017/ccapdev-group8
```
7. Open a web browser and type the link:
```
localhost:3000
```
## Bids To Pick in Heroku
* The app could also be accessed in Heroku thru this link:

## Running Tests
* Upon accessing the application, the user will be sent to the Log-In page. The user may then opt to Log-In or Sign-Up. 
* When signing up for a new account, the user must simply fill up the details asked in the form.
* When logging in, the user may use the following premade accounts:

|              Email              |   Password    |
| ------------------------------- | ------------- |
|   paolo_mico@dlsu.edu.ph        |     yeet      |
|   lanz_ling@dlsu.edu.ph         |     reet      |
|   ma_carol_teope@dlsu.edu.ph    |     reet      |
|   mig_franz_brosoto@dlsu.edu.ph |     reet      |

* Users who have logged in can view posts, create posts, view other profiles thru posts, rate other users, view profile, edit profile, bid on post/item, and search post/item.
* By the end of the bidding deadline, the highest bidder will be eligible to avail the item. The highest bidder is shown in the post. The transaction of the product between the highest bidder and the seller will be done outside the application by any means favorable to both (email address and contact number of users may be viewed in the app which may be used for seller and buyer communication). 

## Versioning
* The members used a shared Google Drive and Github for making changes in the application. 

## Dependencies
* bcrypt
* express
* express-hbs
* express-validator
* handlebars
* jquery
* MongoDB
* Mongoose

## Authors
* BROSOTO, MIG FRANZ
* MICO, PAOLO TIMOTHY
* TEOPE, MA CAROL BEATRICE

## Acknowledgements
* Sir Arren Antioquia, for the knowlege he gave us prior to completing the Application.     
