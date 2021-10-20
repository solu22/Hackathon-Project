import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import RowTable from "./RowTable";

const useStyles = makeStyles(() => ({
  paper: {
    maxHeight: "70vh",
  },
  button: {
    width: 180,
    height: "100%",
    alignSelf: "flex-end",
  },
}));

function createData(
  name: string,
  status: string,
  result: number,
  price: number
) {
  return {
    name,
    status,
    result,
    knowledgeResult: [
      {
        exName: "Git",
        status: "Passed",
        result: 8,
      },
      {
        exName: "React",
        status: "Failed",
        result: 4,
      },
    ],
  };
}

const rows = [
  createData("An", "Attended", 4, 3.99),
  createData("Dat", "Attended", 3, 4.99),
  createData("Pasang", "Missing", 0, 3.79),
  createData("Bili", "Attended", 3, 2.5),
  createData("Anil", "Attended", 4, 1.5),
  createData("An", "Attended", 4, 3.99),
  createData("Dat", "Attended", 3, 4.99),
  createData("Pasang", "Missing", 0, 3.79),
  createData("Bili", "Attended", 3, 2.5),
  createData("Anil", "Attended", 4, 1.5),
  createData("An", "Attended", 4, 3.99),
  createData("Dat", "Attended", 3, 4.99),
  createData("Pasang", "Missing", 0, 3.79),
  createData("Bili", "Attended", 3, 2.5),
  createData("Anil", "Attended", 4, 1.5),
  createData("An", "Attended", 4, 3.99),
  createData("Dat", "Attended", 3, 4.99),
  createData("Pasang", "Missing", 0, 3.79),
  createData("Bili", "Attended", 3, 2.5),
  createData("Anil", "Attended", 4, 1.5),
  createData("An", "Attended", 4, 3.99),
  createData("Dat", "Attended", 3, 4.99),
  createData("Pasang", "Missing", 0, 3.79),
  createData("Bili", "Attended", 3, 2.5),
  createData("Anil", "Attended", 4, 1.5),
  createData("An", "Attended", 4, 3.99),
  createData("Dat", "Attended", 3, 4.99),
  createData("Pasang", "Missing", 0, 3.79),
  createData("Bili", "Attended", 3, 2.5),
  createData("Anil", "Attended", 4, 1.5),
  createData("An", "Attended", 4, 3.99),
  createData("Dat", "Attended", 3, 4.99),
  createData("Pasang", "Missing", 0, 3.79),
  createData("Bili", "Attended", 3, 2.5),
  createData("Anil", "Attended", 4, 1.5),
];

const AttendanceTable: React.VFC<{}> = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <RowTable key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendanceTable;
