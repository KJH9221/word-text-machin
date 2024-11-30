import React from 'react';
import { Printer } from 'lucide-react';
import { WordPair } from '../types';

interface QuizDisplayProps {
  words: WordPair[];
}

export const QuizDisplay: React.FC<QuizDisplayProps> = ({ words }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Vocabulary Quiz</h2>
        <button
          onClick={handlePrint}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors print:hidden"
        >
          <Printer className="w-5 h-5 mr-2" />
          Print Quiz
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {words.map((word, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <div className="font-medium text-lg">{index + 1}. {word.english}</div>
            <div className="mt-2 print:hidden text-gray-600">Answer: {word.korean}</div>
            <div className="mt-2 hidden print:block h-8 border-b border-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};