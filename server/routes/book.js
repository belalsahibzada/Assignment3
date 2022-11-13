let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

// need to connect with book model
let Book = require('../models/book')
let bookController = require('../controller/book')

/*CRUD Operation */
// Read operation 
// Get route for the book list 
router.get('/',bookController.displayBookList)

/*Perform add operation  */
/*Get route for displaying the ADD-Page -- Create Operation */
router.get('/add',bookController.displayAddPage)

/*Post route for processing the ADD-Page -- Create Operation */
router.post('/add',bookController.processAddPage)

/*Perform edit operation  */
/*Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id',bookController.displayEditPage)
/*Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id',bookController.processEditPage)

/*Perform delete operation  */
/*Get to perform Delete Operation -- Deletion */
router.get('/delete/:id',bookController.performDeletePage)

module.exports = router;