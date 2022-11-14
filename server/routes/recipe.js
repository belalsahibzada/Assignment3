let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

// need to connect with book model
let Recipe = require('../models/recipe')
let recipeController = require('../controller/recipe')

/*CRUD Operation */
// Read operation 
// Get route for the book list 
router.get('/',recipeController.displayRecipeList)

/*Perform add operation  */
/*Get route for displaying the ADD-Page -- Create Operation */
router.get('/add',recipeController.displayAddPage)

/*Post route for processing the ADD-Page -- Create Operation */
router.post('/add',recipeController.processAddPage)

/*Perform edit operation  */
/*Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id',recipeController.displayEditPage)
/*Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id',recipeController.processEditPage)

/*Perform delete operation  */
/*Get to perform Delete Operation -- Deletion */
router.get('/delete/:id',recipeController.performDeletePage)

module.exports = router;