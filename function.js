const inquirer = require("inquirer");

// to view all departments
async function viewDepartments(connection) {
  try {
    const [departments] = await connection.query("SELECT * FROM department");
    console.table(departments);
  } catch (error) {
    console.error("Error viewing departments: ", error);
  }
}
