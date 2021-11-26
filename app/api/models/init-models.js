var DataTypes = require("sequelize").DataTypes;
var _entries = require("./entries");
var _messages = require("./messages");
var _rooms = require("./rooms");
var _tokens = require("./tokens");
var _users = require("./users");

function initModels(sequelize) {
  var entries = _entries(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var rooms = _rooms(sequelize, DataTypes);
  var tokens = _tokens(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    entries,
    messages,
    rooms,
    tokens,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
