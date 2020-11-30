"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      projectId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      commentText: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Comment.belongsTo(models.Project, {
      foreignKey: "projectId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Comment;
};
