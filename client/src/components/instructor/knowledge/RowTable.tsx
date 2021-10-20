import React from "react";
import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import KnowledgeCollaps from "./KnowledgeCollaps";

const RowTable: React.VFC<{
  row: {
    name: string;
    status: string;
    result: number;
    knowledgeSummary: {
      totalParticipant: number;
      totalCompleted: number;
      leastCorrect: string;
      averageScore: number;
    }[];
  };
}> = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">
          {row.result}/{4}
        </TableCell>
        <TableCell align="center">
          <Button variant="contained" color="primary" size="small">
            Start
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <KnowledgeCollaps
            knowledgeSummary={row.knowledgeSummary}
            open={open}
          />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default RowTable;
