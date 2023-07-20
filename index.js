const inquirer = require("inquirer");
const { connectToDatabase } = require("./queries");
const Employee = require("./employee");

async function startApp() {
  const connection = await connectToDatabase();
  const employee = new Employee(connection);

  console.log("Connected to the database.");

  try {
    while (true) {
      const action = await showMainMenu();

      switch (action) {
        case "View all Departments":
          await employee.viewDepartments(); // Corrected method call
          break;

        case "View all Employees":
          await employee.viewEmployees(); // Corrected method call
          break;

        case "View all Roles":
          await employee.viewRoles(); // Corrected method call
          break;

        case "Add a Department":
          await employee.addDepartment(); // Corrected method call
          break;

        case "Add a Role":
          await employee.addRole(); // Corrected method call
          break;

        case "Add an Employee":
          await employee.addEmployee(); // Corrected method call
          break;

        case "Update an Employee Role":
          await employee.updateEmployee(); // Corrected method call
          break;

        case "Exit":
          connection.end();
          console.log("Goodbye!");
          process.exit(0);
          break;

        default:
          console.log("Invalid choice.");
          break;
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function showMainMenu() {
  const { action } = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all Departments",
      "View all Employees",
      "View all Roles",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee Role",
      "Exit",
    ],
  });
  return action;
}
startApp();
