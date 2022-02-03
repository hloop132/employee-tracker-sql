USE employee_db;

INSERT INTO department (name)
VALUES
("engineering"),
("legal"),
("admin"),
("hr");

INSERT INTO role (title, salary, department_id)
VALUES
("software engineer", 100000, 1),
("legal secretary", 90000, 2),
("ceo", 200000, 3),
("recruiting", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("woody","dog", 1, 2),
("poppy", "goat", 2, null),
("maggie", "opossum", 3, null),
("lucipurr", "cat", 4, 3);

