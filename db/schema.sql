DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT,
    dpt_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles(
     id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id)  
    ON DELETE SET NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    roles_id INT,
    manager_id INT,
    FOREIGN KEY(roles_id) REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY(manager_id) REFERENCES employee(id)
    ON DELETE SET NULL,
    PRIMARY KEY(id)
);



