import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

import { Question } from "../../../../types/commonTypes";
import { getKcAnswer, setStudentAnswer } from "../redux/kcActions";

interface QuestionListsProps {
  questions: Question[];
  kcId: string;
}

export const QuestionLists: React.FC<QuestionListsProps> = ({
  questions,
  kcId,
}) => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  // const {studentId} = useSelector((state:RootState) => state.student)

  const onSubmit = (fields: FieldValues) => {
    dispatch(getKcAnswer(kcId, fields, ""));
    dispatch(setStudentAnswer(fields));
    return <Redirect to="/kc-result" />;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questions.map(({ question, questionId, options }) => (
        <div key={questionId}>
          <div>{question}</div>
          <Controller
            rules={{ required: true }}
            control={control}
            name={questionId}
            defaultValue=""
            render={({ field }) => {
              return (
                <RadioGroup {...field}>
                  {options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              );
            }}
          />
        </div>
      ))}
      <input type="submit" />
    </form>
  );
};
