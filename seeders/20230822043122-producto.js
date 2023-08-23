'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('producto', [
     {
       "ID": INTEGER,
      "NOMBRE": String,
      "Descripcion": String,
      "Precio": FLOAT,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('producto', null, {});

   


  },


};
