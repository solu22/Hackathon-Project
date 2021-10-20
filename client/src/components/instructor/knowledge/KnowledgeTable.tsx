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
    maxHeight: "40vh",
    margin: 16,
  },
  button: {
    width: 180,
    height: "100%",
    alignSelf: "flex-end",
  },
}));

function createData(name: string, status: string, result: number) {
  return {
    name,
    status,
    result,
    knowledgeSummary: [
      {
        totalParticipant: 10,
        totalCompleted: 8,
        leastCorrect: "ABCD is a thing ",
        averageScore: 6,
      },
      {
        totalParticipant: 8,
        totalCompleted: 6,
        leastCorrect: "ABCD is not a thing ",
        averageScore: 5,
      },
    ],
  };
}

const rows = [
  createData("Git", "Started", 4),
  createData("React", "Standby", 3),
  createData("Git1", "Started", 4),
  createData("Rea1ct", "Standby", 3),
  createData("Gi2t", "Started", 4),
  createData("Re2act", "Standby", 3),
  createData("Gi3t", "Started", 4),
  createData("R4eact", "Standby", 3),
];

const KnowledgeTable: React.VFC<{}> = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Result</TableCell>
            <TableCell align="center">Action</TableCell>
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

export default KnowledgeTable;
