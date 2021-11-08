import { AnyAction } from 'redux';

import { KCAnswer, KCResult, KCStatus, Question } from '../../../../types/commonTypes';
import {
  SET_CLASS_KC_RESULT,
  SET_KC_ANSWER,
  SET_KC_STATUS,
  SET_LOADING,
  SET_QUESTIONS,
  SET_STUDENT_ANSWER,
} from './kcActionTypes';

export interface KCReducer {
  questions: Question[];
  kcStatus: KCStatus[];
  kcAnswer: KCAnswer[];
  errors: any[];
  isLoading: boolean;
  classKcResult: KCResult[];
  studentAnswer: { [questionId: string]: string };
}

const kcInitialState: KCReducer = {
  questions: [],
  errors: [],
  kcStatus: [],
  isLoading: true,
  kcAnswer: [],
  classKcResult: [],
  studentAnswer: {},
};

const kcReducer = (kcState = kcInitialState, action: AnyAction): KCReducer => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...kcState,
        questions: action.payload,
      };

    case SET_LOADING:
      return {
        ...kcState,
        isLoading: action.payload,
      };

    case SET_KC_STATUS:
      return {
        ...kcState,
        kcStatus: action.payload,
      };

    case SET_KC_ANSWER:
      return {
        ...kcState,
        kcAnswer: action.payload,
      };

    case SET_CLASS_KC_RESULT:
      return {
        ...kcState,
        classKcResult: action.payload,
      };

    case SET_STUDENT_ANSWER:
      return {
        ...kcState,
        studentAnswer: action.payload,
      };

    default:
      return kcState;
  }
};

export { kcInitialState, kcReducer };
