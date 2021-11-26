const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entries', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ユーザーID"
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ルームID"
    },
    enterdate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "最後に部屋に入った日時"
    },
    latest_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "最後に閲覧したメッセージID"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'entries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
