'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('articulocuidados_etiqueta', [
     {
       "ArticuloCuidados_idArticuloCiudadano": 1,
      "Etiqueta_idEtiqueta": 1,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('articulocuidados_etiqueta', null, {});

   


  },

};
