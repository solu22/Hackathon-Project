import * as React from "react";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  paper: {
    maxHeight: "70vh",
    maxWidth: 1600,
    margin: 16,
  },
}));

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function createData(name: string) {
  return { name };
}

const rows = [
  createData("Frozen Yoghurt"),
  createData("Ice Cream sandwich"),
  createData("Eclair Stuff"),
  createData("Cupcake Bun"),
  createData("Gingerbread Run"),
  createData("Frozen Yoghurt1"),
  createData("Ice Cream sandwich1"),
  createData("Eclair Stuff1"),
  createData("Cupcake Bun1"),
  createData("Gingerbread Run1"),
  createData("Frozen Yoghurt2"),
  createData("Ice Cream sandwich2"),
  createData("Eclair Stuff2"),
  createData("Cupcake Bun2"),
  createData("Gingerbread Run2"),
];

const AttendanceList: React.VFC<{}> = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell colSpan={2} align="center">
              Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar {...stringAvatar(row.name)} />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendanceList;
