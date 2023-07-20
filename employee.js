const {
  viewDepartments,
  viewEmployees,
  viewRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
} = require("./function");

class Employee {
  constructor(connection) {
    this.connection = connection;
  }

  async viewDepartments() {
    await viewDepartments(this.connection);
  }

  async viewEmployees() {
    await viewEmployees(this.connection);
  }

  async viewRoles() {
    await viewRoles(this.connection);
  }

  async addDepartment() {
    await addDepartment(this.connection);
  }

  async addRole() {
    await addRole(this.connection);
  }

  async addEmployee() {
    await addEmployee(this.connection);
  }

  async updateEmployee() {
    await updateEmployee(this.connection);
  }
}

module.exports = Employee;
