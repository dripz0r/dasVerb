import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

// Tooltip helper
const articleInfo = {
  der: "masculine",
  die: "feminine",
  das: "neuter",
};

// Example fun facts/usage tips for some words
const wordTips: Record<string, string> = {
  "der Hund": "Fun fact: 'Hund' is also used in idioms like 'Hundewetter' (bad weather)!",
  "die Katze": "Cats are the second most popular pet in Germany.",
  "das Haus": "'Haus' is used in many compounds, e.g., 'Krankenhaus' (hospital).",
  "das Buch": "'Buch' is the root of 'Bücher' (books) and 'Buchhandlung' (bookstore).",
  // ...add more as desired
};

// Helper to split article and noun for styling
function splitArticle(word: string) {
  const match = word.match(/^(der|die|das)\s(.+)$/);
  if (match) {
    return { article: match[1], noun: match[2] };
  }
  return { article: null, noun: word };
}

interface Word {
  german: string;
  english: string;
  category: string;
  favorite: boolean;
}

const allWordsData: Word[] = [
  // Animals
  { german: "der Hund", english: "dog", category: "Animals", favorite: true },
  { german: "die Katze", english: "cat", category: "Animals", favorite: false },
  { german: "der Vogel", english: "bird", category: "Animals", favorite: false },
  { german: "das Pferd", english: "horse", category: "Animals", favorite: false },
  { german: "der Fisch", english: "fish", category: "Animals", favorite: false },
  // Food
  { german: "der Apfel", english: "apple", category: "Food", favorite: true },
  { german: "das Brot", english: "bread", category: "Food", favorite: false },
  { german: "das Wasser", english: "water", category: "Food", favorite: false },
  { german: "der Käse", english: "cheese", category: "Food", favorite: false },
  { german: "die Milch", english: "milk", category: "Food", favorite: false },
  { german: "das Ei", english: "egg", category: "Food", favorite: false },
  { german: "das Salz", english: "salt", category: "Food", favorite: false },
  { german: "der Zucker", english: "sugar", category: "Food", favorite: false },
  // Places
  { german: "das Haus", english: "house", category: "Places", favorite: false },
  { german: "die Stadt", english: "city", category: "Places", favorite: false },
  { german: "der Bahnhof", english: "train station", category: "Places", favorite: false },
  { german: "die Schule", english: "school", category: "School", favorite: false },
  { german: "das Hotel", english: "hotel", category: "Places", favorite: false },
  { german: "das Büro", english: "office", category: "Work", favorite: false },
  { german: "die Arbeit", english: "work/job", category: "Work", favorite: false },
  { german: "die Universität", english: "university", category: "School", favorite: false },
  { german: "die Straße", english: "street", category: "Places", favorite: false },
  // Objects
  { german: "das Buch", english: "book", category: "Objects", favorite: true },
  { german: "das Auto", english: "car", category: "Objects", favorite: false },
  { german: "der Stuhl", english: "chair", category: "Objects", favorite: false },
  { german: "der Tisch", english: "table", category: "Objects", favorite: false },
  { german: "das Handy", english: "cell phone", category: "Objects", favorite: false },
  { german: "der Computer", english: "computer", category: "Objects", favorite: false },
  { german: "die Lampe", english: "lamp", category: "Objects", favorite: false },
  // People & Family
  { german: "der Freund", english: "friend", category: "People", favorite: false },
  { german: "der Lehrer", english: "teacher", category: "People", favorite: false },
  { german: "die Mutter", english: "mother", category: "Family", favorite: false },
  { german: "der Vater", english: "father", category: "Family", favorite: false },
  { german: "das Kind", english: "child", category: "Family", favorite: false },
  { german: "die Schwester", english: "sister", category: "Family", favorite: false },
  { german: "der Bruder", english: "brother", category: "Family", favorite: false },
  { german: "die Familie", english: "family", category: "Family", favorite: false },
  { german: "die Tochter", english: "daughter", category: "Family", favorite: false },
  { german: "der Sohn", english: "son", category: "Family", favorite: false },
  // Nature
  { german: "der Baum", english: "tree", category: "Nature", favorite: false },
  { german: "die Sonne", english: "sun", category: "Nature", favorite: false },
  { german: "die Blume", english: "flower", category: "Nature", favorite: false },
  { german: "der Berg", english: "mountain", category: "Nature", favorite: false },
  { german: "der Fluss", english: "river", category: "Nature", favorite: false },
  // Weather
  { german: "die Wolke", english: "cloud", category: "Weather", favorite: false },
  { german: "der Regen", english: "rain", category: "Weather", favorite: false },
  { german: "der Wind", english: "wind", category: "Weather", favorite: false },
  { german: "der Schnee", english: "snow", category: "Weather", favorite: false },
  { german: "das Wetter", english: "weather", category: "Weather", favorite: false },
  { german: "heiß", english: "hot", category: "Weather", favorite: false },
  { german: "kalt", english: "cold", category: "Weather", favorite: false },
  // Time
  { german: "die Uhr", english: "clock", category: "Time", favorite: false },
  { german: "heute", english: "today", category: "Time", favorite: false },
  { german: "morgen", english: "tomorrow", category: "Time", favorite: false },
  { german: "gestern", english: "yesterday", category: "Time", favorite: false },
  { german: "die Stunde", english: "hour", category: "Time", favorite: false },
  { german: "die Minute", english: "minute", category: "Time", favorite: false },
  { german: "die Woche", english: "week", category: "Time", favorite: false },
  { german: "das Jahr", english: "year", category: "Time", favorite: false },
  // Money
  { german: "das Geld", english: "money", category: "Money", favorite: false },
  { german: "der Euro", english: "euro", category: "Money", favorite: false },
  { german: "der Preis", english: "price", category: "Money", favorite: false },
  { german: "die Rechnung", english: "bill", category: "Money", favorite: false },
  { german: "die Karte", english: "card", category: "Money", favorite: false },
  { german: "die Bank", english: "bank", category: "Money", favorite: false },
  // Everyday
  { german: "Hallo", english: "hello", category: "Everyday", favorite: true },
  { german: "Tschüss", english: "bye", category: "Everyday", favorite: false },
  { german: "Bitte", english: "please", category: "Everyday", favorite: false },
  { german: "Danke", english: "thank you", category: "Everyday", favorite: false },
  { german: "Entschuldigung", english: "excuse me", category: "Everyday", favorite: false },
  { german: "ja", english: "yes", category: "Everyday", favorite: false },
  { german: "nein", english: "no", category: "Everyday", favorite: false },
  // Directions
  { german: "links", english: "left", category: "Directions", favorite: false },
  { german: "rechts", english: "right", category: "Directions", favorite: false },
  { german: "geradeaus", english: "straight ahead", category: "Directions", favorite: false },
  { german: "zurück", english: "back", category: "Directions", favorite: false },
  { german: "abbiegen", english: "to turn", category: "Directions", favorite: false },
  // Activity
  { german: "laufen", english: "to run", category: "Activity", favorite: false },
  { german: "schwimmen", english: "to swim", category: "Activity", favorite: false },
  { german: "lesen", english: "to read", category: "Activity", favorite: false },
  { german: "schreiben", english: "to write", category: "Activity", favorite: false },
  { german: "spielen", english: "to play", category: "Activity", favorite: false },
  // Health
  { german: "der Arzt", english: "doctor", category: "Health", favorite: false },
  { german: "krank", english: "sick", category: "Health", favorite: false },
  { german: "die Medizin", english: "medicine", category: "Health", favorite: false },
  { german: "der Schmerz", english: "pain", category: "Health", favorite: false },
  { german: "das Krankenhaus", english: "hospital", category: "Health", favorite: false },
  // Survival
  { german: "Hilfe", english: "help", category: "Survival", favorite: true },
  { german: "der Notruf", english: "emergency call", category: "Survival", favorite: false },
  { german: "das Feuer", english: "fire", category: "Survival", favorite: false },
  { german: "die Polizei", english: "police", category: "Survival", favorite: false },
  { german: "der Pass", english: "passport", category: "Survival", favorite: false },
  // Conversational
  { german: "Wie geht's?", english: "How are you?", category: "Conversational", favorite: true },
  { german: "Was machst du?", english: "What are you doing?", category: "Conversational", favorite: false },
  { german: "Ich verstehe nicht", english: "I don't understand", category: "Conversational", favorite: false },
  { german: "Können Sie das wiederholen?", english: "Can you repeat that?", category: "Conversational", favorite: false },
  { german: "Sprechen Sie Englisch?", english: "Do you speak English?", category: "Conversational", favorite: false },
  // Pronouns
  { german: "ich", english: "I", category: "Pronouns", favorite: false },
  { german: "du", english: "you (informal)", category: "Pronouns", favorite: false },
  { german: "er", english: "he", category: "Pronouns", favorite: false },
  { german: "sie", english: "she/they", category: "Pronouns", favorite: false },
  { german: "wir", english: "we", category: "Pronouns", favorite: false },
  { german: "ihr", english: "you all", category: "Pronouns", favorite: false },
  { german: "Sie", english: "you (formal)", category: "Pronouns", favorite: false },
  // Prepositions
  { german: "in", english: "in", category: "Prepositions", favorite: false },
  { german: "auf", english: "on", category: "Prepositions", favorite: false },
  { german: "unter", english: "under", category: "Prepositions", favorite: false },
  { german: "mit", english: "with", category: "Prepositions", favorite: false },
  { german: "ohne", english: "without", category: "Prepositions", favorite: false },
  // Colors
  { german: "rot", english: "red", category: "Colors", favorite: false },
  { german: "blau", english: "blue", category: "Colors", favorite: false },
  { german: "grün", english: "green", category: "Colors", favorite: false },
  { german: "gelb", english: "yellow", category: "Colors", favorite: false },
  { german: "schwarz", english: "black", category: "Colors", favorite: false },
  { german: "weiß", english: "white", category: "Colors", favorite: false },
  // Numbers
  { german: "eins", english: "one", category: "Numbers", favorite: false },
  { german: "zwei", english: "two", category: "Numbers", favorite: false },
  { german: "drei", english: "three", category: "Numbers", favorite: false },
  { german: "vier", english: "four", category: "Numbers", favorite: false },
  { german: "fünf", english: "five", category: "Numbers", favorite: false },
  { german: "zehn", english: "ten", category: "Numbers", favorite: false },
  { german: "zwanzig", english: "twenty", category: "Numbers", favorite: false },
  // Favorites & Fun
  { german: "Spaß", english: "fun", category: "Favorites", favorite: true },
  { german: "Geheimnis", english: "secret", category: "Favorites", favorite: true },
  { german: "Quatsch", english: "nonsense", category: "Favorites", favorite: true },
  { german: "Kuddelmuddel", english: "muddle, mess", category: "Favorites", favorite: true },
  { german: "Fernweh", english: "wanderlust", category: "Favorites", favorite: true },
];

const categories = [
  "All", "Favorites", "Animals", "Food", "Places", "Objects", "People", "Family", "Nature", "Weather", "Time", "Money", "Everyday", "Directions", "Activity", "Health", "Survival", "Conversational", "Pronouns", "Prepositions", "Colors", "Numbers", "Work", "School"
];

export default function DictionaryQuickView() {
  const [selected, setSelected] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  // Local state for favorites
  const [favorites, setFavorites] = useState<string[]>(() => allWordsData.filter((w: Word) => w.favorite).map((w: Word) => w.german));
  // Merge favorite state into word list
  const allWords: Word[] = allWordsData.map((w: Word) => ({ ...w, favorite: favorites.includes(w.german) }));
  const filtered: Word[] = (selected === "All"
    ? allWords
    : selected === "Favorites"
      ? allWords.filter((w: Word) => w.favorite)
      : allWords.filter((w: Word) => w.category === selected)
  ).filter((w: Word) =>
    w.german.toLowerCase().includes(search.toLowerCase()) ||
    w.english.toLowerCase().includes(search.toLowerCase())
  );

  function toggleFavorite(german: string) {
    setFavorites((favs: string[]) => favs.includes(german) ? favs.filter((f: string) => f !== german) : [...favs, german]);
  }

  return (
    <TooltipProvider>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors border ${selected === cat ? "bg-primary text-white border-primary" : "bg-muted text-primary border-muted hover:bg-primary/10"}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search German or English..."
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-base"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((word: Word, i: number) => {
            const { article, noun } = splitArticle(word.german);
            const tip = wordTips[word.german];
            return (
              <Card key={i} className="relative text-center p-2 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary group cursor-pointer flex flex-col items-center justify-center min-h-[110px]">
                {/* Star button in upper right */}
                <button
                  className="absolute top-2 right-2 text-yellow-400 text-xs p-0.5 rounded-full bg-transparent hover:bg-yellow-100/40 focus:outline-none"
                  aria-label={word.favorite ? 'Remove from favorites' : 'Add to favorites'}
                  title={word.favorite ? 'Remove from favorites' : 'Add to favorites'}
                  onClick={e => { e.stopPropagation(); toggleFavorite(word.german); }}
                  tabIndex={0}
                >
                  {word.favorite ? (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/></svg>
                  )}
                </button>
                <CardHeader className="p-2 flex flex-col items-center justify-center">
                  <CardTitle className="text-lg font-headline flex flex-col items-center justify-center gap-0">
                    {article && (
                      <span
                        className="text-gray-400 font-extralight italic text-xs cursor-help mb-0.5"
                        title={`Article: ${articleInfo[article as keyof typeof articleInfo]}`}
                      >
                        {article}
                      </span>
                    )}
                    <span className="font-semibold text-foreground text-xl leading-tight">{noun}</span>
                  </CardTitle>
                  <CardDescription className="text-[15px] mt-0.5 font-medium text-gray-700 group-hover:text-primary transition-colors text-center w-full">
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <span className="cursor-help">{word.english}</span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs text-base text-left">
                        <span className="font-semibold">{word.german}</span>
                        {tip && <><br /><span>{tip}</span></>}
                      </TooltipContent>
                    </Tooltip>
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <span>Want more? Try searching or exploring categories. <span className="font-bold">German is fun!</span> 😎</span>
        </div>
      </div>
    </TooltipProvider>
  );
} 