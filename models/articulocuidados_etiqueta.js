const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulocuidados_etiqueta', {
    ArticuloCuidados_idArticuloCiudadano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'articulocuidados',
        key: 'idArticuloCiudadano'
      }
    },
    Etiqueta_idEtiqueta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'etiqueta',
        key: 'idEtiqueta'
      }
    }
  }, {
    sequelize,
    tableName: 'articulocuidados_etiqueta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ArticuloCuidados_idArticuloCiudadano" },
          { name: "Etiqueta_idEtiqueta" },
        ]
      },
      {
        name: "fk_ArticuloCuidados_has_Etiqueta_Etiqueta1_idx",
        using: "BTREE",
        fields: [
          { name: "Etiqueta_idEtiqueta" },
        ]
      },
      {
        name: "fk_ArticuloCuidados_has_Etiqueta_ArticuloCuidados1_idx",
        using: "BTREE",
        fields: [
          { name: "ArticuloCuidados_idArticuloCiudadano" },
        ]
      },
    ]
  });
};
