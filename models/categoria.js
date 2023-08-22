const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria', {
    idCategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ArticuloCuidados_idArticuloCiudadano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articulocuidados',
        key: 'idArticuloCiudadano'
      }
    }
  }, {
    sequelize,
    tableName: 'categoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCategoria" },
        ]
      },
      {
        name: "fk_Categoria_ArticuloCuidados1_idx",
        using: "BTREE",
        fields: [
          { name: "ArticuloCuidados_idArticuloCiudadano" },
        ]
      },
    ]
  });
};
