'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('usuario', [
     {
       "ID": INTEGER,
      "NOMBRE": String,
      "Correo": String,
      "Telefono": String,
      "Contraseña": String,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuario', null, {});

   


  },


};

