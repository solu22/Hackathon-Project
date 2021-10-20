import React from "react";
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
import data from "../../../MOCK_DATA.json";

const useStyles = makeStyles(() => ({
  paper: {
    maxHeight: "70vh",
    marginTop: 16,
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
];

const AttendanceTable: React.VFC<{
  participants: {
    id: number;
    name: string;
    result: number;
    knowledgeResult: {
      exName: string;
      status: boolean;
      result: number;
    }[];
  }[];
}> = ({ participants }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <RowTable key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendanceTable;
