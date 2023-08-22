const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulocuidados', {
    idArticuloCiudadano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Titulo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Categoria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Autor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Fecha: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulocuidados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idArticuloCiudadano" },
        ]
      },
    ]
  });
};
