import { ColumnDef, Row } from "@tanstack/react-table";
import { IDictionary, isSubset } from "../../../lib/utils";
import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";
import { Question, Difficulty } from "@/models/Question";

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

const dateSort = (rowA: Row<Question>, rowB: Row<Question>) => {
  const dateA: string = rowA.getValue("dateCreated");
  const dateB: string = rowB.getValue("dateCreated");
  return new Date(dateA).getTime() - new Date(dateB).getTime();
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
      <DataTableColumnHeader column={column} title="Qn No." />
    ),
    accessorFn: (row, index) => String(index + 1),
    sortingFn: dateSort,
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Questions" />
    ),
    accessorKey: "title",
    cell: ({ row }) => {
      const title: string = row.getValue("title");
      return <div className="line-clamp-1">{title}</div>;
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
