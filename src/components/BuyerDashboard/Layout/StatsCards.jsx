import React from "react";
import { Heart, MessageSquare, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Buying",
    value: "02",
    icon: TrendingUp,
  },
  {
    title: "Favourites",
    value: "42",
    icon: Heart,
  },
  {
    title: "Open Chats",
    value: "23",
    icon: MessageSquare,
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon; // Extract the icon for JSX
        return (
          <div
            key={stat.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="border-b-8 border-[#1252AE] rounded-xl flex items-center gap-4 p-4 sm:p-6">
              <div className="rounded-full bg-gray-100 p-3">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h3 className="text-xl sm:text-2xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
