import React from 'react';
import { useState } from 'react';

const QuizSection = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="bg-customBeige p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">Test Your Knowledge</h3>
        <h2 className="text-4xl font-bold mb-4">Take the Constitution Quiz</h2>
        <p className="text-gray-700 text-lg">
          Challenge your understanding of the Indian Constitution with our
          interactive quiz. Earn points and badges as you go!
        </p>
      </div>
      <div className="flex space-x-4">
        <button onClick={()=>{
            setShowQuiz(true);
        }} className="bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition duration-300 font-semibold">
          Start Quiz
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-md border border-amber-700 hover:bg-stone-700 hover:text-white transition duration-300 font-semibold">
          View Leaderboard
        </button>
      </div>
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-xl font-bold mb-4">Constitution Quiz</h2>
            <p className="text-gray-600 mb-6">
              Ready to test your knowledge? Answer the following questions about the Indian Constitution.
            </p>
            {/* Add quiz questions and logic here */}
            <button
              onClick={() => setShowQuiz(false)}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition duration-300"
            >
              Close Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;