import * as React from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import AttendCollaps from "./AttendCollaps";

const RowTable: React.VFC<{
  row: {
    name: string;
    status: string;
    result: number;
    knowledgeResult: {
      exName: string;
      status: string;
      result: number;
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
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">
          {row.result}/{4}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <AttendCollaps
            knowledgeResult={row.knowledgeResult}
            open={open}
            studentName={row.name}
          />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default RowTable;
