const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('macota', {
    idMacota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Edad: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Raza: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Genero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'macota',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMacota" },
        ]
      },
      {
        name: "idMacota_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMacota" },
        ]
      },
      {
        name: "fk_Macota_Usuario_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
};
