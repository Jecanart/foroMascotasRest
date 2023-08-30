'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('producto', [
     {
       "idProducto": 1,
      "Nombre": 'cocomilk',
      "Descripcion": 'COCOMILK',
      "Precio": 10,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('producto', null, {});

   


  },
};
