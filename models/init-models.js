var DataTypes = require("sequelize").DataTypes;
var _articulocuidados = require("./articulocuidados");
var _articulocuidados_etiqueta = require("./articulocuidados_etiqueta");
var _categoria = require("./categoria");
var _comentario = require("./comentario");
var _etiqueta = require("./etiqueta");
var _macota = require("./macota");
var _producto = require("./producto");
var _usuario = require("./usuario");
var _usuario_producto = require("./usuario_producto");

function initModels(sequelize) {
  var articulocuidados = _articulocuidados(sequelize, DataTypes);
  var articulocuidados_etiqueta = _articulocuidados_etiqueta(sequelize, DataTypes);
  var categoria = _categoria(sequelize, DataTypes);
  var comentario = _comentario(sequelize, DataTypes);
  var etiqueta = _etiqueta(sequelize, DataTypes);
  var macota = _macota(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var usuario_producto = _usuario_producto(sequelize, DataTypes);

  articulocuidados.belongsToMany(etiqueta, { as: 'Etiqueta_idEtiqueta_etiqueta', through: articulocuidados_etiqueta, foreignKey: "ArticuloCuidados_idArticuloCiudadano", otherKey: "Etiqueta_idEtiqueta" });
  etiqueta.belongsToMany(articulocuidados, { as: 'ArticuloCuidados_idArticuloCiudadano_articulocuidados', through: articulocuidados_etiqueta, foreignKey: "Etiqueta_idEtiqueta", otherKey: "ArticuloCuidados_idArticuloCiudadano" });
  producto.belongsToMany(usuario, { as: 'Usuario_idUsuario_usuarios', through: usuario_producto, foreignKey: "Producto_idProducto", otherKey: "Usuario_idUsuario" });
  usuario.belongsToMany(producto, { as: 'Producto_idProducto_productos', through: usuario_producto, foreignKey: "Usuario_idUsuario", otherKey: "Producto_idProducto" });
  articulocuidados_etiqueta.belongsTo(articulocuidados, { as: "ArticuloCuidados_idArticuloCiudadano_articulocuidado", foreignKey: "ArticuloCuidados_idArticuloCiudadano"});
  articulocuidados.hasMany(articulocuidados_etiqueta, { as: "articulocuidados_etiqueta", foreignKey: "ArticuloCuidados_idArticuloCiudadano"});
  categoria.belongsTo(articulocuidados, { as: "ArticuloCuidados_idArticuloCiudadano_articulocuidado", foreignKey: "ArticuloCuidados_idArticuloCiudadano"});
  articulocuidados.hasMany(categoria, { as: "categoria", foreignKey: "ArticuloCuidados_idArticuloCiudadano"});
  articulocuidados_etiqueta.belongsTo(etiqueta, { as: "Etiqueta_idEtiqueta_etiquetum", foreignKey: "Etiqueta_idEtiqueta"});
  etiqueta.hasMany(articulocuidados_etiqueta, { as: "articulocuidados_etiqueta", foreignKey: "Etiqueta_idEtiqueta"});
  comentario.belongsTo(producto, { as: "Producto_idProducto_producto", foreignKey: "Producto_idProducto"});
  producto.hasMany(comentario, { as: "comentarios", foreignKey: "Producto_idProducto"});
  usuario_producto.belongsTo(producto, { as: "Producto_idProducto_producto", foreignKey: "Producto_idProducto"});
  producto.hasMany(usuario_producto, { as: "usuario_productos", foreignKey: "Producto_idProducto"});
  macota.belongsTo(usuario, { as: "Usuario_idUsuario_usuario", foreignKey: "Usuario_idUsuario"});
  usuario.hasMany(macota, { as: "macota", foreignKey: "Usuario_idUsuario"});
  usuario_producto.belongsTo(usuario, { as: "Usuario_idUsuario_usuario", foreignKey: "Usuario_idUsuario"});
  usuario.hasMany(usuario_producto, { as: "usuario_productos", foreignKey: "Usuario_idUsuario"});

  return {
    articulocuidados,
    articulocuidados_etiqueta,
    categoria,
    comentario,
    etiqueta,
    macota,
    producto,
    usuario,
    usuario_producto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
