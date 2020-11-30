"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Steps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stepNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      projectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Projects" },
      },
      stepTitle: {
        allowNull: false,
        type: Sequelize.STRING(200),
        unique: true,
      },
      stepDescription: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      photo: {
        type: Sequelize.STRING,
        unique: true,
      },
      video: {
        type: Sequelize.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Steps");
  },
};
