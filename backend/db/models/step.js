"use strict";
module.exports = (sequelize, DataTypes) => {
  const Step = sequelize.define(
    "Step",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      stepNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      projectId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      stepTitle: {
        allowNull: false,
        type: DataTypes.STRING(200),
        unique: true,
      },
      stepDescription: {
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
    },
    {}
  );
  Step.associate = function (models) {
    // associations can be defined here
    Step.belongsTo(models.Project, {
      foreignKey: "projectId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Step;
};
