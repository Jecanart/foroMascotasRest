'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('articulocuidados', [
     {
       "ID": INTEGER,
      "Titulo": String,
      "ID_categoria": INTEGER,
      "Fecha": String,
      "Autor" : String,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('articulocuidados', null, {});

   


  },


};
