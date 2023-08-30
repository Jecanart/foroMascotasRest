'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('categoria', [
     {
      "idCategoria": 1,
      "Nombre": 'String',
      "Descripcion": 'String',
      "ArticuloCuidados_idArticuloCiudadano" : 1,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categoria', null, {});

   


  },
};
