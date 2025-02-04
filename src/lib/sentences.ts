export interface Sentence {
  hiragana: string
  romaji: string[]
  translation: string
}

export const sentences: Sentence[] = [
  {
    hiragana: "わたしはにほんごをべんきょうします",
    romaji: ["wa", "ta", "shi", "ha", "ni", "ho", "n", "go", "wo", "be", "n", "kyo", "u", "shi", "ma", "su"],
    translation: "I study Japanese.",
  },
  {
    hiragana: "あしたはあめがふるでしょう",
    romaji: ["a", "shi", "ta", "ha", "a", "me", "ga", "fu", "ru", "de", "sho", "u"],
    translation: "It will probably rain tomorrow.",
  },
  {
    hiragana: "このほんはとてもおもしろいです",
    romaji: ["ko", "no", "ho", "n", "ha", "to", "te", "mo", "o", "mo", "shi", "ro", "i", "de", "su"],
    translation: "This book is very interesting.",
  },
  {
    hiragana: "ともだちとえいがをみにいきます",
    romaji: ["to", "mo", "da", "chi", "to", "e", "i", "ga", "wo", "mi", "ni", "i", "ki", "ma", "su"],
    translation: "I'm going to watch a movie with my friend.",
  },
  {
    hiragana: "にほんのりょうりがだいすきです",
    romaji: ["ni", "ho", "n", "no", "ryo", "u", "ri", "ga", "da", "i", "su", "ki", "de", "su"],
    translation: "I love Japanese cuisine.",
  },
]

