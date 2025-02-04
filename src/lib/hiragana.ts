export interface HiraganaChar {
  hiragana: string
  romaji: string
  type: "monograph" | "monograph-diacritic" | "digraph" | "digraph-diacritic"
}

export const hiraganaList: HiraganaChar[] = [
  // Monographs
  { hiragana: "あ", romaji: "a", type: "monograph" },
  { hiragana: "い", romaji: "i", type: "monograph" },
  { hiragana: "う", romaji: "u", type: "monograph" },
  { hiragana: "え", romaji: "e", type: "monograph" },
  { hiragana: "お", romaji: "o", type: "monograph" },

  { hiragana: "か", romaji: "ka", type: "monograph" },
  { hiragana: "き", romaji: "ki", type: "monograph" },
  { hiragana: "く", romaji: "ku", type: "monograph" },
  { hiragana: "け", romaji: "ke", type: "monograph" },
  { hiragana: "こ", romaji: "ko", type: "monograph" },

  { hiragana: "さ", romaji: "sa", type: "monograph" },
  { hiragana: "し", romaji: "shi", type: "monograph" },
  { hiragana: "す", romaji: "su", type: "monograph" },
  { hiragana: "せ", romaji: "se", type: "monograph" },
  { hiragana: "そ", romaji: "so", type: "monograph" },

  { hiragana: "た", romaji: "ta", type: "monograph" },
  { hiragana: "ち", romaji: "chi", type: "monograph" },
  { hiragana: "つ", romaji: "tsu", type: "monograph" },
  { hiragana: "て", romaji: "te", type: "monograph" },
  { hiragana: "と", romaji: "to", type: "monograph" },

  { hiragana: "な", romaji: "na", type: "monograph" },
  { hiragana: "に", romaji: "ni", type: "monograph" },
  { hiragana: "ぬ", romaji: "nu", type: "monograph" },
  { hiragana: "ね", romaji: "ne", type: "monograph" },
  { hiragana: "の", romaji: "no", type: "monograph" },

  { hiragana: "は", romaji: "ha", type: "monograph" },
  { hiragana: "ひ", romaji: "hi", type: "monograph" },
  { hiragana: "ふ", romaji: "fu", type: "monograph" },
  { hiragana: "へ", romaji: "he", type: "monograph" },
  { hiragana: "ほ", romaji: "ho", type: "monograph" },

  { hiragana: "ま", romaji: "ma", type: "monograph" },
  { hiragana: "み", romaji: "mi", type: "monograph" },
  { hiragana: "む", romaji: "mu", type: "monograph" },
  { hiragana: "め", romaji: "me", type: "monograph" },
  { hiragana: "も", romaji: "mo", type: "monograph" },

  { hiragana: "や", romaji: "ya", type: "monograph" },
  { hiragana: "ゆ", romaji: "yu", type: "monograph" },
  { hiragana: "よ", romaji: "yo", type: "monograph" },

  { hiragana: "ら", romaji: "ra", type: "monograph" },
  { hiragana: "り", romaji: "ri", type: "monograph" },
  { hiragana: "る", romaji: "ru", type: "monograph" },
  { hiragana: "れ", romaji: "re", type: "monograph" },
  { hiragana: "ろ", romaji: "ro", type: "monograph" },

  { hiragana: "わ", romaji: "wa", type: "monograph" },
  { hiragana: "を", romaji: "wo", type: "monograph" },
  { hiragana: "ん", romaji: "n", type: "monograph" },

  // Monograph Diacritics
  { hiragana: "が", romaji: "ga", type: "monograph-diacritic" },
  { hiragana: "ぎ", romaji: "gi", type: "monograph-diacritic" },
  { hiragana: "ぐ", romaji: "gu", type: "monograph-diacritic" },
  { hiragana: "げ", romaji: "ge", type: "monograph-diacritic" },
  { hiragana: "ご", romaji: "go", type: "monograph-diacritic" },

  { hiragana: "ざ", romaji: "za", type: "monograph-diacritic" },
  { hiragana: "じ", romaji: "ji", type: "monograph-diacritic" },
  { hiragana: "ず", romaji: "zu", type: "monograph-diacritic" },
  { hiragana: "ぜ", romaji: "ze", type: "monograph-diacritic" },
  { hiragana: "ぞ", romaji: "zo", type: "monograph-diacritic" },

  { hiragana: "だ", romaji: "da", type: "monograph-diacritic" },
  { hiragana: "ぢ", romaji: "ji", type: "monograph-diacritic" },
  { hiragana: "づ", romaji: "zu", type: "monograph-diacritic" },
  { hiragana: "で", romaji: "de", type: "monograph-diacritic" },
  { hiragana: "ど", romaji: "do", type: "monograph-diacritic" },

  { hiragana: "ば", romaji: "ba", type: "monograph-diacritic" },
  { hiragana: "び", romaji: "bi", type: "monograph-diacritic" },
  { hiragana: "ぶ", romaji: "bu", type: "monograph-diacritic" },
  { hiragana: "べ", romaji: "be", type: "monograph-diacritic" },
  { hiragana: "ぼ", romaji: "bo", type: "monograph-diacritic" },

  { hiragana: "ぱ", romaji: "pa", type: "monograph-diacritic" },
  { hiragana: "ぴ", romaji: "pi", type: "monograph-diacritic" },
  { hiragana: "ぷ", romaji: "pu", type: "monograph-diacritic" },
  { hiragana: "ぺ", romaji: "pe", type: "monograph-diacritic" },
  { hiragana: "ぽ", romaji: "po", type: "monograph-diacritic" },

  // Digraphs
  { hiragana: "きゃ", romaji: "kya", type: "digraph" },
  { hiragana: "きゅ", romaji: "kyu", type: "digraph" },
  { hiragana: "きょ", romaji: "kyo", type: "digraph" },
  { hiragana: "しゃ", romaji: "sha", type: "digraph" },
  { hiragana: "しゅ", romaji: "shu", type: "digraph" },
  { hiragana: "しょ", romaji: "sho", type: "digraph" },
  { hiragana: "ちゃ", romaji: "cha", type: "digraph" },
  { hiragana: "ちゅ", romaji: "chu", type: "digraph" },
  { hiragana: "ちょ", romaji: "cho", type: "digraph" },
  { hiragana: "にゃ", romaji: "nya", type: "digraph" },
  { hiragana: "にゅ", romaji: "nyu", type: "digraph" },
  { hiragana: "にょ", romaji: "nyo", type: "digraph" },
  { hiragana: "ひゃ", romaji: "hya", type: "digraph" },
  { hiragana: "ひゅ", romaji: "hyu", type: "digraph" },
  { hiragana: "ひょ", romaji: "hyo", type: "digraph" },
  { hiragana: "みゃ", romaji: "mya", type: "digraph" },
  { hiragana: "みゅ", romaji: "myu", type: "digraph" },
  { hiragana: "みょ", romaji: "myo", type: "digraph" },
  { hiragana: "りゃ", romaji: "rya", type: "digraph" },
  { hiragana: "りゅ", romaji: "ryu", type: "digraph" },
  { hiragana: "りょ", romaji: "ryo", type: "digraph" },

  // Digraph Diacritics
  { hiragana: "ぎゃ", romaji: "gya", type: "digraph-diacritic" },
  { hiragana: "ぎゅ", romaji: "gyu", type: "digraph-diacritic" },
  { hiragana: "ぎょ", romaji: "gyo", type: "digraph-diacritic" },
  { hiragana: "じゃ", romaji: "ja", type: "digraph-diacritic" },
  { hiragana: "じゅ", romaji: "ju", type: "digraph-diacritic" },
  { hiragana: "じょ", romaji: "jo", type: "digraph-diacritic" },
  { hiragana: "びゃ", romaji: "bya", type: "digraph-diacritic" },
  { hiragana: "びゅ", romaji: "byu", type: "digraph-diacritic" },
  { hiragana: "びょ", romaji: "byo", type: "digraph-diacritic" },
  { hiragana: "ぴゃ", romaji: "pya", type: "digraph-diacritic" },
  { hiragana: "ぴゅ", romaji: "pyu", type: "digraph-diacritic" },
  { hiragana: "ぴょ", romaji: "pyo", type: "digraph-diacritic" },
]

