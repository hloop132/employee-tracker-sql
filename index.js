//do i really need this and a router.js// Import and require mysql2

const inquirer = require("inquirer");
const mysql = require("mysql2");
const { message } = require("statuses");

const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // MySQL password
  password: "password",
  database: "employee_db",
});

//what file to link to??

const choices = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        type: "list",
        message: "What would you like to do?",
        choices: ["ADD", "VIEW", "UPDATE", "EXIT"],
      },
    ])
    .then((answer) => {
      console.log(answer);

      if (answer.choices === "VIEW") {
        viewThing();
      } else if (answer.choices === "UPDATE") {
        updateThing();
      } else if (answer.choices === "ADD") {
        addThing();
      } else if (answer.choices == "EXIT") {
        console.log("Goodbye");
      } else {
        console.log("ending");
        return;
      }
    });
};

choices();

function viewThing() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "what data would you like to see?",
        name: "table",
        choices: ["dept", "role", "emp"],
      },
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.table === "dept") {
        db.query("SELECT * FROM department", (err, result) => {
          if (err) {
            console.log(err);
          }
          console.table(result);
        });
        console.log("you want dept data");
        // addThing();
      } else if (answer.table === "role") {
        db.query("SELECT * FROM role", (err, result) => {
          if (err) {
            console.log(err);
          }
          console.table(result);
        });
        console.log("you want role data");
      } else if (answer.table === "emp") {
        db.query("SELECT * FROM employee", (err, result) => {
          if (err) {
            console.log(err);
          }
          console.table(result);
        });
        console.log("you want emp data");
      }
    });
  // console.log("this is veiw thing")
}

const addThing = () => {
  inquirer.prompt([{
    type: "list",
    message: "what do you want to add?",
    name: "addChoice",
    choices: ["department","role","employee"]
  }])
  .then((ans) =>{
    switch (ans.addChoice) {
      case "department":
        departmentQ() 
        break;
      case "role":
        roleQ()
        break;
      default:
        employeeQ()
        break;
    }
  })
}

const departmentQ = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "department",
      },
    ])
    .then(function (ans) {
      db.query(
        `INSERT INTO derpartment WHERE name = ?`,
        [ans.name],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(result);
        }
      );
    });
};

const roleQ = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What the title of the role?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary",
      },
      {
        type: "input",
        message: "What is the department id of the role?",
        name: "departmentId",
      },
    ])
    .then(function (ans) {
      db.query(
        `INSERT INTO role WHERE title = ?, salsry = ?, department_id = ?`,
        [ans.title, ans.salary, ans.departmentId],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(result);
        }
      );
    });
};

const employeeQ = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employees first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is employees last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is the employees role id?",
        name: "roleId",
      },
      {
        type: "list",
        message: "What is the manager id?",
        name: "managerId",
      },
    ])
    .then(function (ans) {
      db.query(
        `INSERT INTO employee WHERE first_name = ?, last_name = ?, role_id = ?, manager_id = ?`,
        [ans.firstName, ans.lastName, ans.roleId, ans.managerId],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(result);
        }
      );
    });
};
