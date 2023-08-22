var express = require('express');
var router = express.Router();

const usuario = require('../models').usuario;
router.get('/findAll/json', function(req,res,next){

usuario.findAll({
  attributes: { exclude: ["updateAt", "createdAt"]},

})
.then(resultado =>{
    res.json(resultado);
})
.catch(error => res.status(400).send(error))

});

module.exports = router;
