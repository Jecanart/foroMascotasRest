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
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuario', null, {});

   


  },
};
