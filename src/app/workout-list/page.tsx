import WorkoutCard from "@/components/shared/WorkoutCard";
import { Workout } from "@/types/workOutTypes";
import React from "react";


const getFitLogData = async (): Promise<Workout[]> => {
  try {
    const response = await fetch("https://api.api-store.workers.dev/api/fitlog");

    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching fit log data:", error);
    throw error;
  }
};

const WorkoutList = async () => {
  const fitLogData = await getFitLogData();

  return (
    <section
      id="library"
      className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          The Library
          <span className="text-[#CCFF00]">.</span>
        </h2>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {fitLogData.map((item) => (
          <WorkoutCard key={item.id} workout={item} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutList;
