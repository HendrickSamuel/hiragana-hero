import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface StartScreenProps {
  onStart: (mode: "character") => void
}

export default function SentenceReadingStartScreen({ onStart }: StartScreenProps) {
  const [mode, setMode] = useState<"character">("character")

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Sentence Reading Practice</h2>
      <p className="mb-6 text-gray-600">Practice reading hiragana sentences. Choose your preferred mode to start.</p>
      <RadioGroup value={mode} onValueChange={(value) => setMode(value as "character")} className="mb-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="character" id="character" />
          <Label htmlFor="character" className="text-primary">
            Character by Character
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="word" id="word" disabled />
          <Label htmlFor="word" className="text-gray-400">
            Word by Word (Coming Soon!)
          </Label>
        </div>
      </RadioGroup>
      <Button onClick={() => onStart(mode)} className="w-full">
        Start Practice
      </Button>
    </div>
  )
}

