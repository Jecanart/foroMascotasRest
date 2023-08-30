'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('etiqueta', [
     {
       "idEtiqueta": 1,
      "Nombre": 'etqTest',
      "Decripcion": 'Prueba',
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('etiqueta', null, {});

   


  },
};
