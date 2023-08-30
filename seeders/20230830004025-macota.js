'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('macota', [
     {
       "idMacota": 3,
      "Nombre": 'Hielito',
      "Edad": 100,
      "Raza": 'Slime',
      "Genero" : 'N/A',
      "Usuario_idUsuario" : 3,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('macota', null, {});

   


  },
};
