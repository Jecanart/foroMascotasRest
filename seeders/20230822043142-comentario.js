'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('comentario', [
     {
       "ID": INTEGER,
      "Contenido": String,
      "Autor": String,
      "Fecha": String,
      "ID_producto" : String,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('comentario', null, {});

   


  },


};
