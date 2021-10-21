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
          {participants.map((row) => (
            <RowTable key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendanceTable;
