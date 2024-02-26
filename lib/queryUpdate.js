const db = require('../config/connection.js');

// response sent here from 'handleTask'
// functions for all ***UPDATE*** sql queries

function updateEmployeeRole(response) {
    db.query(`
    UPDATE employee SET role_id = ${response.updateRole} WHERE employee.id = ${response.updateEmployee}
    `, (err, res) => {
        if (err) throw err;
        console.log(`Employee role updated!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

module.exports = updateEmployeeRole;