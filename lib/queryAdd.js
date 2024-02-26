const db = require('../config/connection.js');

// response sent here from 'handleTask'
// functions for all ***ADD*** SQL queries

function addDepartment(response) {
    db.query(`
    INSERT INTO department (name)
    VALUES
    ('${response.department}');
    `, (err, res) => {
        if (err) throw err;
        console.log(`${response.department} department added!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function addRole(response) {
    db.query(`
    INSERT INTO role (title, salary, department_id)
    VALUES
    ('${response.roleTitle}', '${response.roleSalary}', '${response.roleDepartment}')  
    `, (err, res) => {
        if (err) throw err;
        console.log(`${response.roleTitle} role added!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function addEmployee(response) {
    db.query(`
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES
    ('${response.employeeFirstName}', '${response.employeeLastName}', '${response.employeeRole}', '${response.employeeManager}')
    `, (err, res) => {
        if (err) throw err;
        console.log(`Employee ${response.employeeFirstName} ${response.employeeLastName} added!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

module.export = { addDepartment, addRole, addEmployee };