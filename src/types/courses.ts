export type Topic = {
  title: string;
  questions?: number;
  duration?: number;
};

export type Curriculum = {
  name: string;
  duration: string;
  topics: Topic[];
};

export type CourseData = {
  title: string;
  description: string;
  image: string;
  curriculum: Curriculum[];
  material: {
    duration: number;
    lessons: number;
    enrolled: number;
    language: string;
  };
};

export type QuizData = {
  question: string;
  options: QuizOption[];
  answer: string;
  duration: number;
};

export type QuizOption = {
  label: string;
  text: string;
};
