var express = require('express');
let Recipe = require('../model/Recipe').Recipe;
var router = express.Router();

/* GET ajout recipe page. */
router.get('/recettes/ajout', (req, res) => res.render('recipe-create'));
router.post('/recettes/ajout', ajoutBDD);

function ajoutBDD (req, res, next) {
        let datas = req.body;
        let recipe = new Recipe(req.body);
        console.log(datas);
        recipe.save((e, recipe) => {
            if (e){
                console.log('Pb lors de l\'insertion en bdd :' + e);
            } else {
                console.log('Recette ajoutée en BDD');
            }
        });
        res.render('recipe-create');
}


module.exports = router;
