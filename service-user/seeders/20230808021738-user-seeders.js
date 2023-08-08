"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "zul",
          profession: "Admin Micro",
          role: "admin",
          email: "muhammadzulmarijrizqifathullah@gmail.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "marij",
          profession: "Frontend Developer",
          role: "student",
          email: "muhammadzulmarij@gmail.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
