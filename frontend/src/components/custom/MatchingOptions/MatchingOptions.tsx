import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import { SingleSelect } from "@/components/ui/single-select";
import { difficultyArray, topicArray } from "@/models/Question";
import { useState } from "react";

function MatchingOptions() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);

  function handleClick() {
    console.log(selectedTopics, selectedDifficulty);
  }

  return (
    <div className="grid">
      <h1 className="grid-rows-1 my-2">Matching Options</h1>
      <MultiSelect
        className="grid-rows-1 my-2"
        options={topicArray}
        defaultValue={selectedTopics}
        onValueChange={setSelectedTopics}
        placeholder="Select Topics"
      />
      <div className="flex grid-rows-1 my-2">
        <SingleSelect
          options={difficultyArray}
          defaultValue={selectedDifficulty}
          onValueChange={setSelectedDifficulty}
          placeholder="Select Difficulty"
        />
      </div>

      <Button onClick={handleClick}>Fight!</Button>
    </div>
  );
}

export default MatchingOptions;
