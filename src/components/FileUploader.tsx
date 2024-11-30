import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploaderProps {
  onFileUpload: (words: { english: string; korean: string }[]) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const words = content.split('\n')
        .filter(line => line.trim())
        .map(line => {
          const [english, korean] = line.split(',').map(item => item.trim());
          return { english, korean };
        })
        .filter(pair => pair.english && pair.korean);
      onFileUpload(words);
    };
    reader.readAsText(file);
  };

  return (
    <div className="w-full max-w-md">
      <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
        <Upload className="w-12 h-12 text-gray-400" />
        <span className="mt-2 text-base text-gray-600">Upload CSV file</span>
        <span className="text-sm text-gray-500">(English,Korean format)</span>
        <input
          type="file"
          className="hidden"
          accept=".csv"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};