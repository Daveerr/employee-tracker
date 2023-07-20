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

// to view all employees
async function viewEmployees(connection) {
  try {
    const query = `
      SELECT 
        e.id,
        e.first_name,
        e.last_name,
        r.title AS role,
        d.name AS department
      FROM 
        employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.department_id = d.id
    `;

    const [employees] = await connection.query(query);
    console.table(employees);
  } catch (error) {
    console.error("Error viewing employees: ", error);
  }
}

//  to view all roles
async function viewRoles(connection) {
  try {
    const [roles] = await connection.query("SELECT * FROM role");
    console.table(roles);
  } catch (error) {
    console.error("Error viewing roles: ", error);
  }
}

//  to add a department
async function addDepartment(connection) {
  try {
    const departmentData = await inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter the name of the new department:",
      },
    ]);

    // Perform the SQL INSERT query to add the new department to the database
    const { departmentName } = departmentData;
    await connection.query("INSERT INTO department (name) VALUES (?)", [
      departmentName,
    ]);

    console.log("New department added successfully!");
  } catch (error) {
    console.error("Error adding department: ", error);
  }
}

// to add a role
async function addRole(connection) {
  try {
    // Use inquirer to prompt the user for information about the new role
    const roleData = await inquirer.prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "Enter the title of the new role:",
      },
      {
        type: "number",
        name: "roleSalary",
        message: "Enter the salary for the new role:",
      },
      {
        type: "number",
        name: "departmentId",
        message: "Enter the department ID for the new role:",
      },
    ]);

    // Perform the SQL INSERT query to add the new role to the database
    const { roleTitle, roleSalary, departmentId } = roleData;
    await connection.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
      [roleTitle, roleSalary, departmentId]
    );

    console.log("New role added successfully!");
  } catch (error) {
    console.error("Error adding role: ", error);
  }
}

// to add an employee
async function addEmployee(connection) {
  try {
    // Use inquirer to prompt the user for information about the new employee
    const employeeData = await inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter the first name of the new employee:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the last name of the new employee:",
      },
      {
        type: "number",
        name: "roleId",
        message: "Enter the role ID for the new employee:",
      },
      {
        type: "number",
        name: "managerId",
        message:
          "Enter the manager's ID for the new employee (or leave blank if none):",
      },
    ]);

    // Perform the SQL INSERT query to add the new employee to the database
    const { firstName, lastName, roleId, managerId } = employeeData;
    await connection.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [firstName, lastName, roleId, managerId || null]
    );

    console.log("New employee added successfully!");
  } catch (error) {
    console.error("Error adding employee: ", error);
  }
}

// to update an employee's role
async function updateEmployee(connection) {
  try {
    // Use inquirer to prompt the user for information about the employee to update
    const employeeToUpdate = await inquirer.prompt([
      {
        type: "number",
        name: "employeeId",
        message: "Enter the ID of the employee to update:",
      },
      {
        type: "number",
        name: "newRoleId",
        message: "Enter the new role ID for the employee:",
      },
    ]);

    // Perform the SQL UPDATE query to update the employee's role in the database
    const { employeeId, newRoleId } = employeeToUpdate;
    await connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [
      newRoleId,
      employeeId,
    ]);

    console.log("Employee role updated successfully!");
  } catch (error) {
    console.error("Error updating employee role: ", error);
  }
}

module.exports = {
  viewDepartments,
  viewEmployees,
  viewRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
};
