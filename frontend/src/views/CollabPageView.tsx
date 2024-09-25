import QuestionDialog from "@/components/custom/Question/QuestionDialog";
import { Difficulty, Question, Topic } from "@/models/Question";

const customQuestion: Question = {
  id: "q123",
  title: "Find the Longest Palindromic Substring",
  description:
    "Given a string `s`, return the longest palindromic substring in `s`. A palindromic substring is a substring that reads the same backward as forward.",
  topics: [
    Topic.Strings,
    Topic.DynamicProgramming,
    Topic.Algorithms,
    Topic.Strings,
    Topic.DynamicProgramming,
    Topic.Algorithms,
    Topic.Strings,
    Topic.DynamicProgramming,
    Topic.Algorithms,
  ],
  difficulty: Difficulty.Medium,
  dateCreated: "2024-09-16T08:00:00Z",
  examples: [
    {
      input: "babad",
      output: "bab", // "aba" is also a valid answer
    },
    {
      input: "cbbd",
      output: "bb",
    },
  ],
  constraints: [
    "1 <= s.length <= 1000",
    "s consist of only digits and English letters.",
  ],
};

function CollabPageView() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <QuestionDialog question={customQuestion} />
    </main>
  );
}

export default CollabPageView;
