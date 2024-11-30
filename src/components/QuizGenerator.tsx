import React from 'react';
import { RefreshCw } from 'lucide-react';

interface QuizGeneratorProps {
  totalWords: number;
  selectedCount: number;
  onCountChange: (count: number) => void;
  onGenerate: () => void;
  disabled: boolean;
}

export const QuizGenerator: React.FC<QuizGeneratorProps> = ({
  totalWords,
  selectedCount,
  onCountChange,
  onGenerate,
  disabled
}) => {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="wordCount" className="text-sm font-medium text-gray-700">
          Number of words to include ({totalWords} words available)
        </label>
        <input
          type="number"
          id="wordCount"
          min="1"
          max={totalWords}
          value={selectedCount}
          onChange={(e) => onCountChange(Math.min(totalWords, Math.max(1, parseInt(e.target.value) || 1)))}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={onGenerate}
        disabled={disabled}
        className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        Generate Quiz
      </button>
    </div>
  );
};