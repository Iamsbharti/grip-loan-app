const mysql = require("mysql");

const connectMysql = () => {
  console.log("Start DB Connection...");
  const connection = mysql.createConnection(process.env.MYSQL_DB);

  connection.query("SELECT 1", function (error, results, fields) {
    if (error) {
      Console.log("Error Connecting DB");
    } else {
      console.log("DB Connected:");
      if (fields[0].table === "") {
        /** '
         * 
         * const createLoanTableQuery =
          "CREATE TABLE Loans (loanId VARCHAR(255), userId VARCHAR(255),loanAmount VARCHAR(255),loanPeriod VARCHAR(255),transactionId VARCHAR(255))";
         * const createUserTableQuery =
          "CREATE TABLE Users (userId VARCHAR(255), username VARCHAR(255),ip VARCHAR(255),geolocation VARCHAR(255),loanId VARCHAR(255))";
        const createLoanTableQuery =
          "CREATE TABLE Loans (loanId VARCHAR(255), userId VARCHAR(255),loanAmount VARCHAR(255),transactionId VARCHAR(255))";
        const createTransactionTableQuery =
          "CREATE TABLE Transactions (transactionId VARCHAR(255),deposit VARCHAR(255),withdrawal VARCHAR(255),timestamp VARCHAR(255))";

         * connection.query(createTransactionTableQuery, function (err, result) {
          if (err) console.log("error:", err);
          console.log("delted::", result);
        });
           * connection.query(createLoanTableQuery, function (err, result) {
          if (err) throw err;
          console.log("Loan Table Created");
        });
        connection.query(createTransactionTableQuery, function (err, result) {
          if (err) throw err;
          console.log("Transaction Table Created");
        });
        

          */
      } else {
        console.log("Tables Found: skipping create table step");
      }
      return connection;
    }
  });
  connection.on("error", function (error) {
    console.log("error occured closing db connection::", error.code);
  });
};

module.exports = connectMysql;
