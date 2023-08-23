'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('categoria', [
     {
       "ID": INTEGER,
      "NOMBRE": String,
      "Descripcion": String,
      "ID_articulo" : INTEGER,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categoria', null, {});

   


  },


};
