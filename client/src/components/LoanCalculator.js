import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "month", headerName: "Month", width: 100 },
  { field: "interest", headerName: "Interest", width: 170 },
  { field: "remainingAmount", headerName: "Remaining Balance", width: 170 },
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DataTable(props) {
  let { loanAmount, loanPeriod } = props.loanDetails;
  let interestRows = [];
  for (let i = 1; i <= loanPeriod * 12; i++) {
    let rowObject = {};

    let id = i;
    let month = i <= 12 ? monthNames[i - 1] : monthNames[i - 12];
    let interest = (10 / 100 / loanPeriod) * loanAmount;
    loanAmount = loanAmount - interest;
    rowObject = {
      ...rowObject,
      id: id,
      month: month,
      interest: interest.toFixed(2),
      remainingAmount: loanAmount.toFixed(2),
    };
    interestRows.push(rowObject);
  }
  return (
    <div style={{ height: 400, width: "60%" }}>
      <DataGrid
        rows={interestRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
