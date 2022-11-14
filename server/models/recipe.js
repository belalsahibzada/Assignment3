let mongoose = require('mongoose');
//create a book model
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
module.exports = mongoose.model('Recipe',recipeModel);