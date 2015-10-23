'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn(
      'links',
      'click_count',
      Sequelize.INTEGER
    );

  },

  down: function (queryInterface, Sequelize) {

    queryInterface.removeColumn(
      'links',
      'click_count'
    );
  }
};
