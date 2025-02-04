"use client";

import { useState } from "react";
import SentenceReading from "../../components/SentenceReading";
import SentenceReadingStartScreen from "../../components/SentenceReadingStartScreen";

export default function SentenceReadingPage() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center text-primary">
        Sentence Decoder
      </h1>
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">
        文章デコーダー
      </h2>
      {!started ? (
        <SentenceReadingStartScreen onStart={handleStart} />
      ) : (
        <SentenceReading />
      )}
    </div>
  );
}
