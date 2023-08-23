'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('macota', [
     {
       "ID": INTEGER,
      "NOMBRE": String,
      "Edad": INTEGER,
      "Raza": String,
      "Genero" : String,
      "ID_usuario" : String,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('macota', null, {});

   


  },


};
