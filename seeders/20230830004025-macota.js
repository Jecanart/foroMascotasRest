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
     {
      "idMacota": 4,
      "Nombre": 'Fungi',
      "Edad": 2,
      "Raza": 'Elemental Fungus',
      "Genero" : 'N/A',
      "Usuario_idUsuario" : 3,
     },
     {
      "idMacota": 1,
      "Nombre": 'Blop',
      "Edad": 50,
      "Raza": 'Shark',
      "Genero" : 'Macho',
      "Usuario_idUsuario" : 1,
     },
     {
      "idMacota": 2,
      "Nombre": 'Lucie',
      "Edad": 1000,
      "Raza": 'Gato',
      "Genero" : 'N/A',
      "Usuario_idUsuario" : 2,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('macota', null, {});

   


  },
};
