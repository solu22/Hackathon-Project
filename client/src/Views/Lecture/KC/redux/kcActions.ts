import { fetchKcResult, fetchKcStatus, fetchQuestions, submitAnswer } from '../../../../api/kc';
import { KCAnswer, KCResult, KCStatus, Question } from '../../../../types/commonTypes';
import {
  SET_QUESTIONS,
  SET_LOADING,
  SET_KC_STATUS,
  SET_KC_ANSWER,
  SET_CLASS_KC_RESULT,
  SET_STUDENT_ANSWER,
} from './kcActionTypes';

const getQuestions = (kcId: string, studentId: string) => async (dispatch: any) => {
  try {
    setLoading(true);
    const { data } = await fetchQuestions(kcId, studentId);
    setLoading(false);
    return dispatch(setQuestions(data));
  } catch (error) {
    console.log(error);
  }
};

const setQuestions = (questions: Question[]) => {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  };
};

const setLoading = (isLoading: boolean) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

const getKcStatus = (kcId: string) => async (dispatch: any) => {
  try {
    const { data } = await fetchKcStatus(kcId);
    return dispatch(setKcStatus(data));
  } catch (error) {
    console.log(error);
  }
};

const setKcStatus = (kcStatus: KCStatus[]) => {
  return {
    type: SET_KC_STATUS,
    payload: kcStatus,
  };
};

const getKcAnswer =
  (kcId: string, answer: { [questionId: string]: string }, studentId: string) => async (dispatch: any) => {
    try {
      const { data } = await submitAnswer(kcId, answer, studentId);
      return dispatch(setKcAnswer(data));
    } catch (error) {
      console.log(error);
    }
  };

const setKcAnswer = (studentKcResult: KCAnswer[]) => {
  return {
    type: SET_KC_ANSWER,
    payload: studentKcResult,
  };
};

const fetchClassKcResult = (kcId: string) => async (dispatch: any) => {
  try {
    const { data } = await fetchKcResult(kcId);
    return dispatch(setClassKcResult(data));
  } catch (error) {
    console.log(error);
  }
};

const setClassKcResult = (classKcResult: KCResult[]) => {
  return {
    type: SET_CLASS_KC_RESULT,
    payload: classKcResult,
  };
};

const setStudentAnswer = (answer: { [questionId: string]: string }) => {
  return {
    type: SET_STUDENT_ANSWER,
    payload: answer,
  };
};

export { getQuestions, getKcStatus, getKcAnswer, fetchClassKcResult, setStudentAnswer };
