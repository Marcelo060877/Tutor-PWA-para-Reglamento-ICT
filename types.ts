
export enum View {
  HOME = 'home',
  STUDY = 'study',
  QUIZ = 'quiz',
  GLOSSARY = 'glossary',
  TUTOR = 'tutor',
}

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizQuestion extends Question {
  userAnswerIndex?: number;
}

export interface Topic {
  id: string;
  title: string;
  subtopics?: Topic[];
  contentRef?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  context?: string;
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  isStreaming?: boolean;
}
