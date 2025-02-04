"use client";

import { useState, useEffect } from "react";
import { hiraganaList, type HiraganaChar } from "../lib/hiragana";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { QuizConfig } from "./StartScreen";

interface QuizProps {
  onComplete: (
    results: { character: string; userAnswer: string; correctAnswer: string }[]
  ) => void;
  config: QuizConfig;
}

export default function Quiz({ onComplete, config }: QuizProps) {
  const [characters, setCharacters] = useState<HiraganaChar[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [results, setResults] = useState<
    { character: string; userAnswer: string; correctAnswer: string }[]
  >([]);

  useEffect(() => {
    // Filter and shuffle the hiragana list based on the configuration
    const filteredChars = hiraganaList.filter(
      (char) =>
        (config.monographs && char.type === "monograph") ||
        (config.monographDiacritics && char.type === "monograph-diacritic") ||
        (config.digraphs && char.type === "digraph") ||
        (config.digraphDiacritics && char.type === "digraph-diacritic")
    );
    const shuffled = [...filteredChars].sort(() => Math.random() - 0.5);
    setCharacters(shuffled.slice(0, config.characterCount));
    setTimeLeft(30);
  }, [config]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    const currentChar = characters[currentIndex];
    const newResult = {
      character: currentChar.hiragana,
      userAnswer,
      correctAnswer: currentChar.romaji,
    };

    const updatedResults = [...results, newResult];
    setResults(updatedResults);

    if (currentIndex < characters.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
      setTimeLeft(30);
    } else {
      onComplete(updatedResults);
    }
  };

  if (characters.length === 0) {
    return <div>Loading...</div>;
  }

  const currentChar = characters[currentIndex];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <p className="text-6xl mb-4">{currentChar.hiragana}</p>
        <p className="text-xl text-red-600">Time left: {timeLeft}s</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-4"
      >
        <Input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type the romaji"
          className="w-full"
          autoFocus
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Question {currentIndex + 1} of {characters.length}
      </p>
    </div>
  );
}
