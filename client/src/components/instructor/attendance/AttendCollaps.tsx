import React from "react";
import {
  Collapse,
  TableCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import ResultModal from "./ResultModal";

const AttendCollaps: React.VFC<{
  knowledgeResult: {
    exName: string;
    status: boolean;
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
              <TableCell align="center">Result</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {knowledgeResult.map((knowledgeRow) => (
              <TableRow key={knowledgeRow.exName}>
                <TableCell component="th" scope="row">
                  {knowledgeRow.exName}
                </TableCell>
                <TableCell>
                  {knowledgeRow.status ? "Passed" : "Failed"}
                </TableCell>
                <TableCell align="center">{knowledgeRow.result}/10</TableCell>
                <TableCell align="center">
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
