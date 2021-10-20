export interface Question {
  questionId: string;
  question: string;
  options: string[];
}

export interface KCStatus {
  studentId: string;
  status: 'not started' | 'started' | 'completed';
}

export interface KCAnswer {
  questionId: string;
  answer: string;
}

export interface KCResult {
  studentId: string;
  result: any;
}
