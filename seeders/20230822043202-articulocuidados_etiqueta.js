'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('articulocuidados_etiqueta', [
     {
       "ID_articulo": INTEGER,
      "ID_etiqueta": INTEGER,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('articulocuidados_etiqueta', null, {});

   


  },


};
