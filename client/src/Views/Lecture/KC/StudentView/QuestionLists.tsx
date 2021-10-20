import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { Question } from '../../../../types/commonTypes';

interface QuestionListsProps {
  questions: Question[];
}

export const QuestionLists: React.FC<QuestionListsProps> = ({ questions }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (fields: FieldValues) => {
    console.log(fields);
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
                    <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
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
