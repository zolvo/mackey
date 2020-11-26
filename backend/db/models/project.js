"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    }
  }
  Project.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      projectTitle: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      projectDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
      },
      video: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
