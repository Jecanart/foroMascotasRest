'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('articulocuidados', [
     {
       "idArticuloCiudadano": 1,
      "Titulo": 'String',
      "Categoria": 1,
      "Autor" : 'Ganyu',
      "Fecha": 'String',
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('articulocuidados', null, {});

   


  },
};
