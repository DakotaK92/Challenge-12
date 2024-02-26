const retrieveDepartments = require('./retrieveDepartments.js');
const retrieveRole = require('./retrieveRole.js');
const retrieveEmployee = require('./retrieveEmployee.js');

// Inquirer prompts (run in 'selectTask')

const prompts = [
    // ***TASKS***
    {
        name: 'task',
        type: 'list',
        message: 'SELECT TASK:',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT']
    },

    // ***Add a Department***
    {
        name: 'department',
        type: 'input',
        message: "ENTER NEW DEPARTMENT NAME:",
        when: (response) => {
            if (response.task === 'Add a department') {
                return true;
            }
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b{31m', '\n Try again');
            }
            return true;
        }
    },

    // *** Add a Role***
    {
        name: 'roleTitle',
        type: 'input',
        message: 'ENTER NEW ROLE TITLE:',
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b{31m', '\n Try again');
            }
            return true;
        }
    },

    //*** Add a salary***
    {
        name: 'roleSalary',
        type: 'input',
        message: "ENTER ROLE SALARY:",
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        },
        // Validate to ensure input is not blank
        vaildate: (response) => {
            if (response === "") {
                return console.log('\u001b{31m', '\n Try again');
            }
            return true;
        }
    },

    // *** Select a department
    {
        name: 'roleDepartment',
        type: 'list',
        message: "SELECT ROLE DEPARTMENT:",
        // function located at retrieveDepartments.js to present current departments in db
        choices: retrieveDepartments,
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        }
    },

    // ***Add a firstname ***
    {
        name: 'employeeFirstName',
        type: 'input',
        message: "ENTER FIRST NAME:",
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        },
        // Validate to ensure input is not blank
        vaildate: (response) => {
            if (response === "") {
                return console.log('\u001b{31m', '\n Try again');
            }
            return true;
        }
    },

    // *** Add a lastname ***
    {
        name: 'employeeLastName',
        type: 'input',
        message: "ENTER LAST NAME:",
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        },
        // Validate to ensure input is not blank
        vaildate: (response) => {
            if (response === "") {
                return console.log('\u001b{31m', '\n Try again');
            }
            return true;
        }
    },

    // *** Select a role ***
    {
        name: 'employeeRole',
        type: 'list',
        message: "SELECT EMPLOYEE ROLE:",
        // function is located in retrieveRole.js to present current roles in db
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        },
    },

    // *** Select a manager ***
    {
        name: 'employeeManager',
        type: 'list',
        message: "SELECT EMPLOYEE MANAGER:",
        // function is located in retrieveEmployee.js to present current employee
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        },
    },

    // ***Update an Employee Role***
    {
        name: 'updateEmployee',
        type: 'list',
        message: "SELECT EMPLOYEE",
        //reused function located at retrieveEmployee.js to present current employee in db
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            }
            return false;
        },
    },

    // *** Update a Role
    {
        name: 'updateRole',
        type: 'list',
        message: "SELECT NEW ROLE:",
        // reused function located at retrieveRole.js to present current employee in db to update
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            }
            return false;
        },
    },
];

module.exports = prompts;