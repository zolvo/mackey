"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Steps",
      [
        {
          stepNumber: 1,
          projectId: 1,
          title: "Step 1",
          description: "Prepare all your ingredients",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 2,
          projectId: 1,
          title: "Step 2",
          description:
            "A little bit of this, a little bit of that, mix it together, and make it like rock star",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 3,
          projectId: 1,
          title: "Step 3",
          description: "Put a smile on your face, you are set to go!",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 1,
          projectId: 2,
          title: "First",
          description: "Close your eyes, try to concentrate",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 2,
          projectId: 2,
          title: "Second",
          description: "Need some luck, it won't hurt to start a little pray",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 3,
          projectId: 2,
          title: "Third",
          description: "And then you realize you forgot to buy some eggs",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 4,
          projectId: 2,
          title: "Fourth",
          description: "Go to groceries to buy some eggs and repeat step one",
          photo: null,
          video: null,
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
    await queryInterface.bulkDelete("Steps", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
