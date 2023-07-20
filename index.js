const inquirer = require("inquirer");
const { connectToDatabase } = require("./queries");
const Employee = require("./employee");

async function startApp() {
  const connection = await connectToDatabase();
  const employee = new Employee(connection);

  console.log("Connected to the database.");
}

startApp();
