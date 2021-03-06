"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 3,
          projectId: 1,
          commentText: "This is a good idea",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          projectId: 1,
          commentText: "I have now idea what are you talking about",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          projectId: 2,
          commentText: "I start to believe in Him",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          projectId: 2,
          commentText: "you guys are good?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          projectId: 3,
          commentText: "I think you are still dreaming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
