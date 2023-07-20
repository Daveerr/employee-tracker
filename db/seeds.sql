USE employee_db;

INSERT INTO department (name) VALUES
('Software Engineer'),
('Account Manager'),
('Accountant'),
('Legal Team Lead');
('Lawyer');



INSERT INTO role (title, salary, department_id) VALUES
('Lead Engineer', 165000, 1),
('Software Engineer', 130000, 1),
('Sales Lead', 115000, 2),
('Salesperson', 70000, 2),
('Account Manager', 120000, 3),
('Acountant', 100000, 3),
('Legal Team Lead', 215000, 4),
('Lawyer', 175000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES
('David', 'Rodriguez', null, 1),
('John', 'Doe', null, 2),
('Steph', 'Curry', null, 3),
('Nick', 'Bosa', 1, 4),
('Christian', 'McCaffrey', 4, 5),
('George', 'Kittle', 1, 6),
('Tom', 'Brady', 2, 7),
('Joe', 'Burrow', 3, 8);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;