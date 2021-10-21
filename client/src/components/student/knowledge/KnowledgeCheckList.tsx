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
import KnowledgeModal from "./KnowledgeModal";

const useStyles = makeStyles(() => ({
  paper: {
    maxHeight: "70vh",
    maxWidth: 1600,
    marginTop: 16,
  },
}));

function createRow(title: string, description: string, status: boolean) {
  return { title, description, status };
}

const rows = [
  createRow("First section", "Cover first section", true),
  createRow("Second section", "Cover second section", false),
  createRow("Third section", "Cover third section", true),
];

const KnowledgeCheckList: React.VFC<{}> = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell>{row.title}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">
                {row.status ? "Passed" : "Failed"}
              </TableCell>
              <TableCell align="center">
                <KnowledgeModal />
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total Number of Knowledge Check</TableCell>
            <TableCell align="center">3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total Number of Completed</TableCell>
            <TableCell align="center">3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total Number of Passed </TableCell>
            <TableCell align="center">2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KnowledgeCheckList;
