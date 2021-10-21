import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface IFormInput {
  [question: string]: string;
}

const KnowledgeQuestion: React.VFC<{
  control: Control<IFormInput, object>;
  name: string;
  options: string[];
}> = ({ control, name, options }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onBlur, onChange, value } = field;
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">Question: {name}</FormLabel>

            <RadioGroup value={value} onBlur={onBlur} onChange={onChange}>
              {options.map((option) => {
                return (
                  <FormControlLabel
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      }}
    />
  );
};

export default KnowledgeQuestion;
