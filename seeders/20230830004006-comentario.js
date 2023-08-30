'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('comentario', [
     {
       "idComentario": 1,
      "Contenido": 'String',
      "Autor": 'March 7',
      "Fecha": 'String',
      "Producto_idProducto" : 1,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('comentario', null, {});

   


  },
};
