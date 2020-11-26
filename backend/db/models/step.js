"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Step.belongsTo(models.Project, {
        foreignKey: "projectId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Step.init(
    {
      stepNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stepTitle: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
      },
      stepDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    },
    {
      sequelize,
      modelName: "Step",
    }
  );
  return Step;
};
