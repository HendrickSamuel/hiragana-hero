"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { sentences, type Sentence } from "../lib/sentences"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { hiraganaList } from "../lib/hiragana"

function groupHiragana(hiragana: string): string[] {
  const grouped: string[] = []
  let i = 0
  while (i < hiragana.length) {
    if (i + 1 < hiragana.length && hiraganaList.some((char) => char.hiragana === hiragana.slice(i, i + 2))) {
      grouped.push(hiragana.slice(i, i + 2))
      i += 2
    } else {
      grouped.push(hiragana[i])
      i += 1
    }
  }
  return grouped
}

export default function SentenceReading() {
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [revealedRomaji, setRevealedRomaji] = useState<Array<{ romaji: string; correct: boolean }>>([])
  const [groupedHiragana, setGroupedHiragana] = useState<string[]>([])

  useEffect(() => {
    selectRandomSentence()
  }, [])

  const selectRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length)
    const sentence = sentences[randomIndex]
    setCurrentSentence(sentence)
    setGroupedHiragana(groupHiragana(sentence.hiragana))
    setHighlightIndex(0)
    setUserInput("")
    setIsCorrect(null)
    setRevealedRomaji([])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentSentence) return

    const correctRomaji = currentSentence.romaji[highlightIndex]
    const isAnswerCorrect = userInput.toLowerCase() === correctRomaji.toLowerCase()
    setIsCorrect(isAnswerCorrect)

    const newRevealedRomaji = [...revealedRomaji]
    newRevealedRomaji[highlightIndex] = { romaji: correctRomaji, correct: isAnswerCorrect }
    setRevealedRomaji(newRevealedRomaji)

    if (highlightIndex < groupedHiragana.length - 1) {
      setHighlightIndex(highlightIndex + 1)
      setUserInput("")
    } else {
      // Sentence completed
      setTimeout(selectRandomSentence, 1500)
    }
  }

  if (!currentSentence) return <div>Loading...</div>

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Sentence Reading Practice</h2>
      <div className="mb-6">
        <p className="text-xl mb-2">
          {groupedHiragana.map((char, index) => (
            <span key={index} className="relative inline-block mr-1">
              <span className={index === highlightIndex ? "bg-yellow-200" : ""}>{char}</span>
              {revealedRomaji[index] && (
                <span
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 text-xs ${
                    revealedRomaji[index].correct ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {revealedRomaji[index].romaji}
                </span>
              )}
            </span>
          ))}
        </p>
        <p className="text-gray-600 italic mt-8">{currentSentence.translation}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type the romaji for the highlighted character"
          className={`w-full ${isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : ""}`}
          autoFocus
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      <Button onClick={selectRandomSentence} className="w-full mt-4">
        Next Sentence
      </Button>
    </div>
  )
}

