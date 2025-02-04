import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface StartScreenProps {
  onStart: (config: QuizConfig) => void;
}

export interface QuizConfig {
  monographs: boolean;
  monographDiacritics: boolean;
  digraphs: boolean;
  digraphDiacritics: boolean;
  characterCount: number;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [config, setConfig] = useState<QuizConfig>({
    monographs: true,
    monographDiacritics: false,
    digraphs: false,
    digraphDiacritics: false,
    characterCount: 10,
  });

  const handleConfigChange = (
    key: keyof QuizConfig,
    value: boolean | number
  ) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleStart = () => {
    if (
      Object.values(config)
        .slice(0, 4)
        .some((value) => value)
    ) {
      onStart(config);
    } else {
      alert("Please select at least one category");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
        Welcome to the Character Challenge!
      </h2>
      <p className="mb-6 text-gray-600">
        Test your knowledge of hiragana characters in this timed quiz.
        You&apos;ll be presented with hiragana characters one at a time, and
        you&apos;ll need to type their romaji equivalents. You have 30 seconds
        for each character.
      </p>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-primary">
          Choose character types to include:
        </h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="monographs"
              checked={config.monographs}
              onCheckedChange={(checked) =>
                handleConfigChange("monographs", checked as boolean)
              }
            />
            <Label htmlFor="monographs">Monographs (あ, い, う, ...)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="monographDiacritics"
              checked={config.monographDiacritics}
              onCheckedChange={(checked) =>
                handleConfigChange("monographDiacritics", checked as boolean)
              }
            />
            <Label htmlFor="monographDiacritics">
              Monographs with diacritics (が, ぎ, ぐ, ...)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="digraphs"
              checked={config.digraphs}
              onCheckedChange={(checked) =>
                handleConfigChange("digraphs", checked as boolean)
              }
            />
            <Label htmlFor="digraphs">Digraphs (きゃ, きゅ, きょ, ...)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="digraphDiacritics"
              checked={config.digraphDiacritics}
              onCheckedChange={(checked) =>
                handleConfigChange("digraphDiacritics", checked as boolean)
              }
            />
            <Label htmlFor="digraphDiacritics">
              Digraphs with diacritics (ぎゃ, ぎゅ, ぎょ, ...)
            </Label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <Label htmlFor="characterCount" className="block mb-2 text-primary">
          Number of characters per game: {config.characterCount}
        </Label>

        <div className="flex items-center space-x-2">
          {[1, 5, 10, 15, 20].map((value) => (
            <Button
              key={value}
              onClick={() => handleConfigChange("characterCount", value)}
              className={`px-4 py-2 ${
                config.characterCount === value
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>
      <Button onClick={handleStart} className="w-full max-w-xs">
        Start Now
      </Button>
    </div>
  );
}
