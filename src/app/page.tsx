"use client";

import { Bell, Calendar, CheckSquare, FileText } from "lucide-react";
import { useState } from "react";

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

  {
    id: "reminders" as const,
    label: "Reminders",
    icon: Bell,
    // count: reminders.length,
  },
];

export default function Home() {
  const [memos, setMemos] = useState<string[]>([]);
  const [task, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [deadlines, setDeadlines] = useState<
    { id: number; text: string; date: string }[]
  >([]);
  const [activeTab, setActiveTab] = useState<
    "memo" | "task" | "deadlines" | "reminders"
  >("memo");
  const [reminder, setReminder] = useState<string>("");
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
        <div className="mt-12">
          <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-2 px-4 -mb-px border-b-2 font-medium ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
                {/* <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-full px-2 py-0.5">
                  {tab.count}
                </span> */}
              </button>
            ))}
          </div>
        </div>

        {/** Tab content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"></div>
      </div>
    </div>
  );
}
