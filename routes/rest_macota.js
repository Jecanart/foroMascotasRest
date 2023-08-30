var express = require('express');
var router = express.Router();

const macota = require('../models').macota;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/findAll/json', function(req, res, next) {  

    /* MÉTODO ESTÁTICO findAll  */

  macota.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});


module.exports = router;