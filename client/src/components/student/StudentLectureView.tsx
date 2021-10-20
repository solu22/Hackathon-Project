import React from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SaveIcon from "@mui/icons-material/Save";
import KnowledgeCheckList from "./knowledge/KnowledgeCheckList";
import AttendanceList from "./attendance/AttendanceList";

// const lecture = {
//   title: "Test lecture",
//   url: "what ever",
//   sections: [
//     {
//       name: "first section",
//       status: "end",
//       totalParticipant: 50,
//       totalCompleted: 20,
//       knowledgeChecks: [
//         {
//           question: "1 + 1 is what",
//           options: ["not 2", "maybe 2", "could be 2"],
//           correctAnswer: "must be 2",
//         },
//         {
//           question: "2 + 2  is what",
//           options: ["not 4", "maybe 4", "could be 4"],
//           correctAnswer: "must be 4",
//         },
//         {
//           question: "Other question",
//           options: ["not 2", "maybe 2", "could be 2"],
//           correctAnswer: "What?",
//         },
//         {
//           question: "Dog is cat",
//           options: ["what?", "Yes, both have 4 legs", "I don't understand"],
//           correctAnswer: "No",
//         },
//         {
//           question: "Your name is Google",
//           options: ["Google is my friend", "Yes", "Not sure"],
//           correctAnswer: "No",
//         },
//         {
//           question: "This demo is build with ReactJS",
//           options: [
//             "Angular for the win",
//             "Vue is gudddddd",
//             "Maybe, I don't know",
//           ],
//           correctAnswer: "Yes, it is",
//         },
//       ],
//     },
//     {
//       name: "second section",
//       status: "end",
//       totalParticipant: 50,
//       totalCompleted: 20,
//       knowledgeChecks: [
//         {
//           question: "Random question",
//           options: ["not 2", "maybe 2", "could be 2"],
//           correctAnswer: "must be 2",
//         },
//         {
//           question: "Number before 5",
//           options: ["not 4", "maybe 4", "could be 4"],
//           correctAnswer: "must be 4",
//         },
//         {
//           question: "Which is wh question?",
//           options: ["not 2", "maybe 2", "could be 2"],
//           correctAnswer: "What?",
//         },
//         {
//           question: "Horse is a table",
//           options: ["what?", "Yes, both have 4 legs", "I don't understand"],
//           correctAnswer: "No",
//         },
//         {
//           question: "Your name is Facebook",
//           options: ["Google is my friend", "Yes", "Not sure"],
//           correctAnswer: "No",
//         },
//         {
//           question: "This demo is build with ExpressJS",
//           options: [
//             "NestJS for the win",
//             "PHP is gudddddd",
//             "Maybe, I don't know",
//           ],
//           correctAnswer: "Yes, it is",
//         },
//       ],
//     },
//     {
//       name: "third section",
//       status: "start",
//       totalParticipant: 50,
//       totalCompleted: 15,
//       knowledgeChecks: [
//         {
//           question: "How much is 1 + 1 - 1 + 1",
//           options: ["not 2", "maybe 2", "could be 2"],
//           correctAnswer: "must be 2",
//         },
//         {
//           question: "Which number smaller than 5 and bigger than 3",
//           options: ["not 4", "maybe 4", "could be 4"],
//           correctAnswer: "must be 4",
//         },
//         {
//           question: "What? is the answer",
//           options: ["not 2", "maybe 2", "could be 2"],
//           correctAnswer: "What?",
//         },
//         {
//           question: "Is chair and table the same?",
//           options: ["what?", "Yes, both have 4 legs", "I don't understand"],
//           correctAnswer: "No",
//         },
//         {
//           question: "Your name is Microsoft",
//           options: ["Google is my friend", "Yes", "Not sure"],
//           correctAnswer: "No",
//         },
//         {
//           question: "This demo is build with blood",
//           options: [
//             "Angular for the win",
//             "Vue is gudddddd",
//             "Maybe, I don't know",
//           ],
//           correctAnswer: "Yes, it is",
//         },
//       ],
//     },
//   ],
//   participants,
// };

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    maxHeight: "90vh",
  },
  paper: {
    maxHeight: "90vh",
    maxWidth: 1600,
    margin: "auto",
    padding: 32,
  },
  button: {
    width: 180,
    height: "100%",
    alignSelf: "flex-end",
  },
}));

const StudentLectureView: React.VFC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h2">
            <Box sx={{ textAlign: "center" }}>Lecture Name</Box>
          </Typography>
          <Typography variant="h5">
            Zoom Link:{" "}
            <Link href="https://www.github.com/">
              https://us06web.zoom.us/j/81418841157?pwd=ZWg0VkVFdFdEYmhNUnMxcnVvT2Jydz09
            </Link>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <KnowledgeCheckList />
            </Grid>
            <Grid item xs={4}>
              <AttendanceList />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};
export default StudentLectureView;
