"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Stores",
      [
        {
          name: "Toko 1",
          email: "toko1@email.com",
          password: "toko1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toko 2",
          email: "toko2@email.com",
          password: "toko2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
      await queryInterface.bulkDelete('Stores', null, {});
  },
};
