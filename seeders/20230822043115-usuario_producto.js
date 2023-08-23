'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('usuario_producto', [
     {
       "ID_usuario": INTEGER,
       "ID_producto": INTEGER,
      
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuario_producto', null, {});

   


  },


};

