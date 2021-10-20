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

const KnowledgeCollaps: React.VFC<{
  knowledgeSummary: {
    totalParticipant: number;
    totalCompleted: number;
    leastCorrect: string;
    averageScore: number;
  }[];
  open: boolean;
}> = ({ knowledgeSummary, open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          Knowledge Check Summary
        </Typography>
        <Table size="small" aria-label="purchases">
          <TableHead>
            <TableRow>
              <TableCell>Exercise name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {knowledgeSummary.map((knowledgeRow) => (
              <TableRow key={knowledgeRow.totalParticipant}>
                <TableCell component="th" scope="row">
                  {knowledgeRow.totalCompleted}
                </TableCell>
                <TableCell>{knowledgeRow.leastCorrect}</TableCell>
                <TableCell>{knowledgeRow.averageScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  );
};
export default KnowledgeCollaps;
