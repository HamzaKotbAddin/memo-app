import { Calendar, CheckSquare, FileText } from "lucide-react";

const tabs = [
  {
    id: "memo" as const,
    label: "Memo",
    icon: FileText,
    // count: memos.length,
  },
  {
    id: "task" as const,
    label: "Task",
    icon: CheckSquare,
    // count: tasks.filter((t) => !t.completed).length,
  },
  {
    id: "deadlines" as const,
    label: "Deadlines",
    icon: Calendar,
    // count: deadlines.length,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col min-h-screen container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold">Memo App</h1>
        </div>

        {/* audio recording */}
        <div className="mb-8">123</div>

        {/* Tab navigation */}
        <div className="mt-12"></div>

        {/** Tab content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"></div>
      </div>
    </div>
  );
}
