"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
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
      projectTitle: {
        allowNull: false,
        type: DataTypes.STRING(200),
        unique: true,
      },
      projectDescription: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
      photo: {
        type: DataTypes.STRING,
        unique: true,
      },
      video: {
        type: DataTypes.STRING,
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
  Project.associate = function (models) {
    // associations can be defined here
    Project.hasMany(models.Step, {
      foreignKey: "projectId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Project.hasMany(models.Comment, {
      foreignKey: "projectId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Project.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Project;
};
