'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('etiqueta', [
     {
       "ID": INTEGER,
      "NOMBRE": String,
      "Descripcion": String,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('etiqueta', null, {});

   


  },


};
