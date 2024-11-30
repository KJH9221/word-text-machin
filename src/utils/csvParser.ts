export const parseCSV = (content: string): { english: string; korean: string }[] => {
  const lines = content.split('\n');
  return lines
    .filter(line => line.trim())
    .map(line => {
      const [english, korean] = line.split(',').map(item => item.trim());
      return { english, korean };
    })
    .filter(pair => pair.english && pair.korean);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const generateQuiz = (words: { english: string; korean: string }[], count: number) => {
  return shuffleArray(words).slice(0, count);
};