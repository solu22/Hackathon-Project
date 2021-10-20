import axios, { AxiosResponse } from 'axios';
import { KCAnswer, KCResult, KCStatus, Question } from '../types/commonTypes';

const fetchQuestions = (kcId: string, studentId: string): Promise<AxiosResponse<Question[]>> => {
  return axios.get(`/get-kc/${kcId}`, { data: { studentId } });
};

const fetchKcStatus = (kcId: string): Promise<AxiosResponse<KCStatus[]>> => {
  return axios.get(`/kc-status/${kcId}`);
};

const submitAnswer = (kcId: string, answer: any, studentId: string): Promise<AxiosResponse<KCAnswer[]>> => {
  return axios.post(`/submitAnswer`, { data: { kcId, answer, studentId } });
};

const fetchKcResult = (kcId: string): Promise<AxiosResponse<KCResult[]>> => {
  return axios.get('/getKnowledgeCheckResult', { data: { kcId } });
};

export { fetchQuestions, fetchKcResult, fetchKcStatus, submitAnswer };
