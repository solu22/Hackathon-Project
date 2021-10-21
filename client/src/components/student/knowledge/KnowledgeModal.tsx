import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import KnowledgeQuestion from "../../utils/FormRadioInput";

interface IFormInput {
  [question: string]: string;
}
const useStyle = makeStyles(() => ({
  paper: {
    margin: "10vh auto",
    minHeight: 200,
    maxHeight: 800,
    maxWidth: 800,
    padding: 32,
    overflow: "scroll",
  },
  grid: {
    marginTop: 32,
    padding: "16px 64px",
  },
}));

const knowledgeChecks = [
  {
    question: "How much is 1 + 1 - 1 + 1",
    options: ["not 2", "maybe 2", "could be 2"],
    correctAnswer: "must be 2",
  },
  {
    question: "Which number smaller than 5 and bigger than 3",
    options: ["not 4", "maybe 4", "could be 4"],
    correctAnswer: "must be 4",
  },
  {
    question: "What? is the answer",
    options: ["not 2", "maybe 2", "could be 2"],
    correctAnswer: "What?",
  },
  {
    question: "Is chair and table the same?",
    options: ["what?", "Yes, both have 4 legs", "I don't understand"],
    correctAnswer: "No",
  },
  {
    question: "Your name is Microsoft",
    options: ["Google is my friend", "Yes", "Not sure"],
    correctAnswer: "No",
  },
  {
    question: "This demo is build with blood",
    options: ["Angular for the win", "Vue is gudddddd", "Maybe, I don't know"],
    correctAnswer: "Yes, it is",
  },
];

const KnowledgeModal: React.VFC<{}> = () => {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState({} as IFormInput);
  const [submitted, setSubmitted] = useState(false);
  const { control, handleSubmit } = useForm<IFormInput>();
  const classes = useStyle();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setSubmitted(true);
    setAnswer(data);
  };
  console.log(answer);
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Start
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Paper className={classes.paper}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Box sx={{ textAlign: "center" }}>Knowledge Check</Box>
            </Typography>
            <div className={classes.grid}>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                // alignItems="center"
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {knowledgeChecks.map(
                      ({ question, options, correctAnswer }) => {
                        return (
                          <Grid item xs={12}>
                            <KnowledgeQuestion
                              key={question}
                              control={control}
                              name={question}
                              options={options
                                .concat(correctAnswer)
                                .sort((a, b) => 0.5 - Math.random())}
                            />
                            <Divider />
                          </Grid>
                        );
                      }
                    )}
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </form>
                ) : (
                  <>
                    {knowledgeChecks.map((knowledgeCheck, index) => {
                      return (
                        <Grid item xs={12}>
                          <Typography variant="h6">
                            Question: {knowledgeCheck.question}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color={
                              answer[knowledgeCheck.question] ===
                              knowledgeCheck.correctAnswer
                                ? "green"
                                : "red"
                            }
                          >
                            Your answer: {answer[knowledgeCheck.question]}
                          </Typography>
                          <Typography variant="subtitle1">
                            Correct answer: {knowledgeCheck.correctAnswer}
                          </Typography>
                          <Divider />
                        </Grid>
                      );
                    })}
                  </>
                )}
              </Grid>
            </div>
          </Paper>
        </>
      </Modal>
    </>
  );
};

export default KnowledgeModal;
