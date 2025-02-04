import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ListOrderedIcon as AlphabeticalSort,
  BookOpen,
  Gamepad2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-2 text-primary">
        Welcome to Hiragana Hero
      </h1>
      <h2 className="text-3xl font-bold mb-8 text-primary">ひらがなヒーロー</h2>
      <p className="mb-8 text-lg text-gray-600">
        Become a Hiragana Hero! Choose a game to start your journey:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-col">
          <CardHeader>
            <AlphabeticalSort className="w-10 h-10 mb-2 mx-auto text-primary" />
            <CardTitle className="text-primary">Character Challenge</CardTitle>
            <CardDescription>
              Master individual hiragana characters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Test your knowledge of hiragana characters one by one. Great for
              beginners!
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link href="/hiragana-quiz" className="w-full">
              <Button className="w-full">Start Quiz</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <BookOpen className="w-10 h-10 mb-2 mx-auto text-primary" />
            <CardTitle className="text-primary">Sentence Decoder</CardTitle>
            <CardDescription>Practice reading full sentences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Challenge yourself with complete sentences. Perfect for
              intermediate learners!
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link href="/sentence-reading" className="w-full">
              <Button className="w-full">Start Reading</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <Gamepad2 className="w-10 h-10 mb-2 mx-auto text-gray-400" />
            <CardTitle className="text-primary">
              More Games Coming Soon!
            </CardTitle>
            <CardDescription>Stay tuned for new challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              We're working on exciting new games to help you master hiragana.
              Check back soon!
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full" disabled>
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
