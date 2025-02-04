import { Button } from "@/components/ui/button";

interface ResultsProps {
  results: { character: string; userAnswer: string; correctAnswer: string }[];
  onRestart: () => void;
}

export default function Results({ results, onRestart }: ResultsProps) {
  const score = results.filter(
    (r) => r.userAnswer.toLowerCase() === r.correctAnswer.toLowerCase()
  ).length;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Quiz Results</h3>
      <p className="text-xl mb-6 text-center">
        You got <span className="font-bold text-red-600">{score}</span> out of{" "}
        {results.length} correct!
      </p>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Detailed Results:</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-2xl">{result.character}</span>
              <span
                className={
                  result.userAnswer.toLowerCase() ===
                  result.correctAnswer.toLowerCase()
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {result.userAnswer || "(no answer)"}{" "}
                {result.userAnswer.toLowerCase() !==
                  result.correctAnswer.toLowerCase() &&
                  `(Correct: ${result.correctAnswer})`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={onRestart} className="w-full">
        Restart Quiz
      </Button>
    </div>
  );
}
