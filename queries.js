const mysql = require("mysql2");

// to establish connection to MySQL database
async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "david386047",
      database: "employee_db",
    });
    return connection.promise(); // to use Promises
  } catch (error) {
    console.error("Error connecting to the database: ", error);
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase,
};
