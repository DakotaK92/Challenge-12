INSERT INTO department (name)
VALUES
('Production'),
('Operations'),
('Legal'),
('Information Technology'),
('Management'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Engineer', 100000, 1),
('Accountant', 90000, 2),
('Lawyer', 90000, 3),
('IT Specialist', 70000, 4),
('Project Manager', 120000, 5),
('Telemarketer', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Elodie', 'Hendricks', 1,5),
('Fabio', 'Cherry', 2, 5),
('Jemma', 'Wade', 3, 5),
('Tess', 'Oliver', 4, 5),
('Milly', 'Woods', 5, NULL),
('Santiago', 'Holland', 6, 9),
('Olivia', 'Leonard', 1, 9),
('Lorcan', 'Quinn', 2, 9),
('Maisy', 'Ford', 5, NULL);