let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

let Recipe = require('../models/recipe')

module.exports.displayRecipeList = (req,res,next) => {
    Recipe.find((err,recipelist) => {
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            res.render('recipe/list',{
                title : 'Recipe List', 
                Recipelist : recipelist
            })
        }
    });
};

module.exports.displayAddPage = (req,res,next) =>  {
    res.render('recipe/add',{title:'Add Recipe'})

};

module.exports.processAddPage = (req,res,next) =>  {
    let newRecipe = Recipe ({
        "name" : req.body.name,
        "difficulty" :req.body.difficulty,
        "ingredients" : req.body.ingredients,
        "time" : req.body.time,
        "price":req.body.price
    });
    Recipe.create(newRecipe,(err,Recipe) => {
        if(err) { 
            console.log(err);
            res.end()
        }
        else 
        {
            res.redirect('/recipes');
        }

    })
};

module.exports.displayEditPage = (req,res,next) =>  {
    let id = req.params.id;
    Recipe.findById(id,(err,recipeToEdit)=> {
        if(err) { 
            console.log(err);
            res.end()
        }
        else 
        {
            res.render('recipe/edit',{title:'Edit Recipe',recipe:recipeToEdit});
        }
    })
};

module.exports.processEditPage = (req,res,next) =>  {
    let id = req.params.id;
    let updateRecipe = Recipe({
        "_id":id,
        "name" : req.body.name,
        "difficulty" :req.body.difficulty,
        "ingredients" : req.body.ingredients,
        "time" : req.body.time,
        "price":req.body.price
    });
    Recipe.updateOne({_id:id},updateRecipe,(err)=> {
        if(err) { 
            console.log(err);
            res.end()
        }
        else 
        {
            res.redirect('/recipes');
        }
    })
};

module.exports.performDeletePage = (req,res,next) =>  {
    let id = req.params.id;
    Recipe.deleteOne({_id:id},(err) => {
        if(err) { 
            console.log(err);
            res.end()
        }
        else 
        {
            res.redirect('/recipes')
        }
    })
};
