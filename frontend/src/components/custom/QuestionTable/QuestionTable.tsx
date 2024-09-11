import { Difficulty, Question, Topic } from "@/models/Question";
import React, { useEffect, useState } from "react";
import { DataTable } from "../../ui/data-table";
import { columns } from "./columns";

function QuestionTable() {
  const [data, setData] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true); // To show a loading state

  // Fetch data asynchronously on component mount
  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setLoading(false); // Once data is fetched, stop loading
    }
    fetchData();
  }, []);

  // Return a loading indicator or the table once data is available
  return (
    <div className="container mx-auto py-10">
      {loading ? (
        <p>Loading...</p> // Show loading text or spinner
      ) : (
        <div className="font-bold">
          <DataTable columns={columns} data={data || []} />
        </div>
      )}
    </div>
  );
}

// Your async function for fetching data remains the same
async function getData(): Promise<Question[]> {
  const questions: Question[] = [
    {
      id: "1",
      question:
        "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
      topics: [Topic.Array],
      difficulty: Difficulty.Easy,
    },
    {
      id: "2",
      question:
        "Given a collection of distinct integers, return all possible permutations.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Medium,
    },
    {
      id: "3",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
    {
      id: "4",
      question:
        "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
      topics: [Topic.Array],
      difficulty: Difficulty.Easy,
    },
    {
      id: "5",
      question:
        "Given a collection of distinct integers, return all possible permutations.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Medium,
    },
    {
      id: "6",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
    {
      id: "7",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
    {
      id: "8",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
    {
      id: "9",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
    {
      id: "10",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
    {
      id: "11",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
    {
      id: "12",
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
      topics: [Topic.BackTracking],
      difficulty: Difficulty.Hard,
    },
  ];

  return questions;
}

export default QuestionTable;
