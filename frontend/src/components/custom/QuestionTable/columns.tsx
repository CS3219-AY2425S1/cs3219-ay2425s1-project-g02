import { ColumnDef, Row } from "@tanstack/react-table";
import { IDictionary, isSubset } from "../../../lib/utils";
import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";
import { Question, Difficulty } from "@/models/Question";
import QuestionDialog from "../Question/QuestionDialog";
import DeleteQuestionButton from "../Question/DeleteQuestionButton";
import EditQuestionButton from "../Question/EditQuestionButton";

const difficultyLevels: IDictionary<number> = {
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

export const columns = (refetch: () => void): ColumnDef<Question>[] => [
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Topics" />
    ),
    id: "topics",
    accessorFn: (row) => row.topics.join(", "), // accessorFn is a function that takes a row and returns the value for that column
    enableGlobalFilter: false,
    filterFn: (row, id, filterValue) => {
      const cellValue: string = row.getValue(id);
      const topics = new Set(cellValue.split(", "));
      const filterTopics = new Set(filterValue);

      return isSubset(filterTopics, topics);
    },
  },
  {
    id: "dateCreated",
    header: ({ column }) => (
      <div className="flex justify-center">
        <DataTableColumnHeader column={column} title="No." />
      </div>
    ),
    accessorFn: (_, index) => index + 1, // Return the raw index value (starting from 1)
    cell: ({ cell }) => (
      <div className="flex justify-center items-center h-full">
        {String(cell.getValue())}
      </div>
    ),
    size: 30,
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Questions" />
    ),
    accessorKey: "title",
    cell: ({ row }) => {
      return <QuestionDialog question={row.original} />;
    },
  },
  {
    header: ({ column }) => (
      <div className="flex justify-center">
        <DataTableColumnHeader column={column} title="Difficulty" />
      </div>
    ),
    accessorKey: "difficulty",
    sortingFn: difficultySort,

    cell: ({ row }) => {
      const difficulty: Difficulty = row.getValue("difficulty");
      return (
        <div
          className={`flex justify-center rounded-lg items-center ${getDifficultyClass(
            difficulty
          )}`}
        >
          <span className={`py-1 font-bold text-xs`}>{difficulty}</span>
        </div>
      );
    },
    size: 35,
  },
  {
    id: "admins",
    size: 40,
    maxSize: 40,
    cell: ({ row }) => {
      const question = row.original;
      return (
        <div className="grid grid-cols-2 gap-2">
          <EditQuestionButton question={question} onEdit={refetch} />
          <DeleteQuestionButton question={question} onDelete={refetch} />
        </div>
      );
    },
  },
];
