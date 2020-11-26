"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Steps",
      [
        {
          stepNumber: 1,
          projectId: 1,
          stepTitle: "Step 1",
          stepDescription: "Prepare all your ingredients",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 2,
          projectId: 1,
          stepTitle: "Step 2",
          stepDescription:
            "A little bit of this, a little bit of that, mix it together, and make it like rock star",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 3,
          projectId: 1,
          stepTitle: "Step 3",
          stepDescription: "Put a smile on your face, you are set to go!",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 1,
          projectId: 2,
          stepTitle: "First",
          stepDescription: "Close your eyes, try to concentrate",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 2,
          projectId: 2,
          stepTitle: "Second",
          stepDescription:
            "Need some luck, it won't hurt to start a little pray",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 3,
          projectId: 2,
          stepTitle: "Third",
          stepDescription: "And then you realize you forgot to buy some eggs",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 4,
          projectId: 2,
          stepTitle: "Fourth",
          stepDescription:
            "Go to groceries to buy some eggs and repeat step one",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 1,
          projectId: 3,
          stepTitle: "Number 1",
          stepDescription: "Create all the possibilities",
          photo: null,
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 2,
          projectId: 3,
          stepTitle: "Number 2",
          stepDescription: "It might be a spaghetti also",
          photo: "/images/spaghetti.jpg",
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stepNumber: 3,
          projectId: 3,
          stepTitle: "Number 3",
          stepDescription:
            "I don't know what to decide, I'm just going to sleep now",
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
