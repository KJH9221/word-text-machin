import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { QuizGenerator } from './components/QuizGenerator';
import { QuizDisplay } from './components/QuizDisplay';
import { generateQuiz } from './utils/csvParser';
import { WordPair, QuizState } from './types';

function App() {
  const [state, setState] = useState<QuizState>({
    words: [],
    selectedCount: 10,
    quizWords: [],
    isGenerated: false,
  });

  const handleFileUpload = (words: WordPair[]) => {
    setState(prev => ({
      ...prev,
      words,
      selectedCount: Math.min(prev.selectedCount, words.length),
      isGenerated: false,
    }));
  };

  const handleCountChange = (count: number) => {
    setState(prev => ({ ...prev, selectedCount: count }));
  };

  const handleGenerate = () => {
    const quizWords = generateQuiz(state.words, state.selectedCount);
    setState(prev => ({ ...prev, quizWords, isGenerated: true }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Word Quiz Generator</h1>
        
        <div className="space-y-8 flex flex-col items-center">
          {state.words.length === 0 ? (
            <FileUploader onFileUpload={handleFileUpload} />
          ) : !state.isGenerated ? (
            <>
              <div className="text-center text-green-600 font-medium">
                ✓ {state.words.length} words loaded successfully
              </div>
              <QuizGenerator
                totalWords={state.words.length}
                selectedCount={state.selectedCount}
                onCountChange={handleCountChange}
                onGenerate={handleGenerate}
                disabled={state.words.length === 0}
              />
            </>
          ) : (
            <QuizDisplay words={state.quizWords} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;