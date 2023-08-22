const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    idComentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Contenido: {
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
    },
    Producto_idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'idProducto'
      }
    }
  }, {
    sequelize,
    tableName: 'comentario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idComentario" },
        ]
      },
      {
        name: "fk_Comentario_Producto1_idx",
        using: "BTREE",
        fields: [
          { name: "Producto_idProducto" },
        ]
      },
    ]
  });
};
