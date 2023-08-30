'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('usuario_producto', [
     {
       "Usuario_idUsuario": 3,
       "Producto_idProducto": 1,
      
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuario_producto', null, {});

   


  },
};
