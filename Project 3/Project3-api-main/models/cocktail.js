const mongoose = require('mongoose')

const cocktailModel = mongoose.Schema({
    strDrink: {type: String, required: true},
    strDrinkAlternate: {type: String, default: null},
    strTags: {type: String, default: null},
    strCategory: {type: String, default: null},
    strAlcoholic: {type: String, required: true},
    strGlass: {type: String, default: null},
    strInstructions: {type: String, required: true},
    strDrinkThumb: {type: String, default: "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg"},
    strIngredient1: {type: String, default: null},
    strIngredient2: {type: String, default: null},
    strIngredient3: {type: String, default: null},
    strIngredient4: {type: String, default: null},
    strIngredient5: {type: String, default: null},
    strIngredient6: {type: String, default: null},
    strIngredient7: {type: String, default: null},
    strIngredient8: {type: String, default: null},
    strIngredient9: {type: String, default: null},
    strIngredient10: {type: String, default: null},
    strIngredient11: {type: String, default: null},
    strIngredient12: {type: String, default: null},
    strIngredient13: {type: String, default: null},
    strIngredient14: {type: String, default: null},
    strIngredient15: {type: String, default: null},
    strMeasure1: {type: String, default: null},
    strMeasure2: {type: String, default: null},
    strMeasure3: {type: String, default: null},
    strMeasure4: {type: String, default: null},
    strMeasure5: {type: String, default: null},
    strMeasure6: {type: String, default: null},
    strMeasure7: {type: String, default: null},
    strMeasure8: {type: String, default: null},
    strMeasure9: {type: String, default: null},
    strMeasure10: {type: String, default: null},
    strMeasure11: {type: String, default: null},
    strMeasure12: {type: String, default: null},
    strMeasure13: {type: String, default: null},
    strMeasure14: {type: String, default: null},
    strMeasure15: {type: String, default: null},
}, {timestamps: true})

module.exports = mongoose.model('Cocktail', cocktailModel)