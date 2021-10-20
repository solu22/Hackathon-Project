import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Collapse, TableCell } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ResultModal from "./ResultModal";

const AttendCollaps: React.VFC<{
  knowledgeResult: {
    exName: string;
    status: string;
    result: number;
  }[];
  open: boolean;
  studentName: string;
}> = ({ knowledgeResult, open, studentName }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          Knowledge Check Result
        </Typography>
        <Table size="small" aria-label="purchases">
          <TableHead>
            <TableRow>
              <TableCell>Exercise name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Result</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {knowledgeResult.map((knowledgeRow) => (
              <TableRow key={knowledgeRow.exName}>
                <TableCell component="th" scope="row">
                  {knowledgeRow.exName}
                </TableCell>
                <TableCell>{knowledgeRow.status}</TableCell>
                <TableCell align="right">{knowledgeRow.result}/10</TableCell>
                <TableCell align="right">
                  <ResultModal
                    studentName={studentName}
                    exerciseName={knowledgeRow.exName}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  );
};
export default AttendCollaps;
