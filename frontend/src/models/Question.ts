export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export enum Topic {
  Array = "Array",
  BackTracking = "Back Tracking",
}

export type Question = {
  id: string;
  question: string;
  topics: Topic[];
  difficulty: Difficulty;
};
