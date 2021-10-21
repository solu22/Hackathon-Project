import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  maxHeight: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

function createData(question: string, answer: string) {
  return { question, answer };
}
const rows = [
  createData(
    " 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
  createData(
    " 10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ratione hic eligendi asperiores cumque deleniti maxime esse provident reiciendis quo quaerat, libero delectus ullam aperiam deserunt, sapiente et repudiandae. ",
    " A. Not correct, pick another one my friend"
  ),
];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, maxWidth: "95%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Question</TableCell>
            <TableCell align="center">Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.question}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="left">{row.answer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const ResultModal: React.VFC<{ studentName: string; exerciseName: string }> = ({
  studentName,
  exerciseName,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Check Answer
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Box sx={{ textAlign: "center" }}>
              {studentName}-{exerciseName}
            </Box>
          </Typography>
          <BasicTable />
        </Box>
      </Modal>
    </>
  );
};

export default ResultModal;
