'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
        */

        return queryInterface.bulkInsert(
            'customers', [
                {
                    name: 'Fazenda Água limpa',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
        */
        
        return queryInterface.bulkDelete('customers', null, {});        
    }
};
