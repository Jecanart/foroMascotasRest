const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_producto', {
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    },
    Producto_idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producto',
        key: 'idProducto'
      }
    }
  }, {
    sequelize,
    tableName: 'usuario_producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
          { name: "Producto_idProducto" },
        ]
      },
      {
        name: "fk_Usuario_has_Producto_Producto1_idx",
        using: "BTREE",
        fields: [
          { name: "Producto_idProducto" },
        ]
      },
      {
        name: "fk_Usuario_has_Producto_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
};
