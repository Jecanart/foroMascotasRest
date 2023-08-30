'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up (queryInterface, Sequelize) {
	    
    await queryInterface.bulkInsert('usuario', [
     {
      "idUsuario": 3,
      "Nombre": 'Ganyu',
      "Correo": 'gy@mail.com',
      "Telefono": '0912399999',
      "Contraseña": 'crAdeptus',
     },
     {
      "idUsuario": 1,
      "Nombre": 'Gura',
      "Correo": 'shark@hololive.com',
      "Telefono": '0912311199',
      "Contraseña": 'a',
     },
     {
      "idUsuario": 2,
      "Nombre": 'Millie',
      "Correo": 'robe@nijisanji.com',
      "Telefono": '0912322329',
      "Contraseña": 'pingPong',
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuario', null, {});

   


  },
};
