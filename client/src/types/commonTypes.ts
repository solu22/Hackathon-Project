export interface Question {
  questionId: string;
  question: string;
  options: string[];
}

export interface Result {
  correct: number;
  incorrect: number;
  total: number;
  detail: {
    questionId: string;
    studentChoice: string;
    correctChoice: string;
  }[];
}
