export interface WordPair {
  english: string;
  korean: string;
}

export interface QuizState {
  words: WordPair[];
  selectedCount: number;
  quizWords: WordPair[];
  isGenerated: boolean;
}