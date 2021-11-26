const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
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
    content: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メッセージ内容"
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "送信ファイル"
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
    tableName: 'messages',
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
