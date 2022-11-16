let mongoose = require('mongoose');
//create a recipes model
let recipeModel = mongoose.Schema({
    name : String,
    difficulty : String,
    ingredients : String,
    time : Number,
    price : Number,
    },
    {
        collections : "recipes"
    }
)

//make recipeModel public
module.exports = mongoose.model('Recipe',recipeModel);