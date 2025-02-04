"use client";

import { useState } from "react";
import Quiz from "../../components/Quiz";
import Results from "../../components/Results";
import StartScreen, { type QuizConfig } from "../../components/StartScreen";

export default function HiraganaQuiz() {
  const [quizState, setQuizState] = useState<"start" | "quiz" | "results">(
    "start"
  );
  const [results, setResults] = useState<
    { character: string; userAnswer: string; correctAnswer: string }[]
  >([]);
  const [quizConfig, setQuizConfig] = useState<QuizConfig | null>(null);

  const handleStartQuiz = (config: QuizConfig) => {
    setQuizConfig(config);
    setQuizState("quiz");
  };

  const handleQuizComplete = (
    quizResults: {
      character: string;
      userAnswer: string;
      correctAnswer: string;
    }[]
  ) => {
    setResults(quizResults);
    setQuizState("results");
  };

  const handleRestartQuiz = () => {
    setQuizState("start");
    setResults([]);
    setQuizConfig(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center text-primary">
        Character Challenge
      </h1>
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">
        文字チャレンジ
      </h2>
      {quizState === "start" && <StartScreen onStart={handleStartQuiz} />}
      {quizState === "quiz" && quizConfig && (
        <Quiz onComplete={handleQuizComplete} config={quizConfig} />
      )}
      {quizState === "results" && (
        <Results results={results} onRestart={handleRestartQuiz} />
      )}
    </div>
  );
}
