import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";
import { iDictionary } from "@/lib/utils";
import { Difficulty, Question } from "@/models/Question";
import { ColumnDef, Row } from "@tanstack/react-table";

const difficultyLevels: iDictionary<number> = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
};

const difficultySort = (rowA: Row<Question>, rowB: Row<Question>) => {
  const diffA: string = rowA.getValue("difficulty");
  const diffB: string = rowB.getValue("difficulty");
  return difficultyLevels[diffA] - difficultyLevels[diffB];
};

const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-red-100 text-red-800";
  }
};

export const columns: ColumnDef<Question>[] = [
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    accessorKey: "id",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Questions" />
    ),
    accessorKey: "question",
    cell: ({ row }) => {
      const question: string = row.getValue("question");
      return <div className="line-clamp-1">{question}</div>;
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Difficulty" />
    ),
    accessorKey: "difficulty",
    sortingFn: difficultySort,
    cell: ({ row }) => {
      const difficulty: Difficulty = row.getValue("difficulty");
      return (
        <div
          className={`flex rounded-lg justify-center items-center ${getDifficultyClass(
            difficulty
          )}`}
        >
          <span className={`py-1 font-bold text-xs`}>{difficulty}</span>
        </div>
      );
    },
  },
];
