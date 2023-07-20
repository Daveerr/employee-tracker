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
          await viewDepartments();
          break;

        case "View all Employees":
          await viewEmployees();
          break;

        case "View all Roles":
          await viewRoles();
          break;

        case "Add a Department":
          await addDepartment();
          break;

        case "Add a Role":
          await addRole();
          break;

        case "Add an Employee":
          await addEmployee();
          break;

        case "Update an Employee Role":
          await updateEmployee();
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
      "View all employees",
      "Add an employee",
      "Update employee details",
      "Add department",
      "Add a Role",
      "View all Roles",
      "View all Departments",
      "Exit",
    ],
  });
  return action;
}

startApp();
