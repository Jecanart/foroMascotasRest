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

router.get('/findByIdU/:Usuario_idUsuario/json',function(req, res,next){
  
  let idU = req.params.Usuario_idUsuario;

  usuario.findByPk(id)
  .then(instancia => {if(instancia){
    res.status(200).json(instancia);
  }else{
    res.status(404).json({error:"No existe registro con el id:"+idU})
  }
})
.catch(error => res.status(400).send(error))
});


module.exports = router;