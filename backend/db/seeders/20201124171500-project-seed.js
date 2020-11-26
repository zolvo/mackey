"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Projects",
      [
        {
          userId: 1,
          projectTitle: "PIZZA",
          projectDescription: "how to make Pizza",
          photo: "/images/pizza.png",
          video: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          projectTitle: "Sunny Egg",
          projectDescription: "let's make a happy Sunny Egg",
          photo: "/images/sunny-egg.jpg",
          video: "/videos/sunny-egg.mp4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          projectTitle: "RAMEN",
          projectDescription: "I'm so crazy with this one",
          photo: "/images/noodles.png",
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
    await queryInterface.bulkDelete("Project", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
