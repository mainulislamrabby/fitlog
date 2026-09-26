import SavedButton from "@/components/actionButton/SavedButton";
import AddPlanButton from "@/components/actionButton/AddPlanButton";
import { Workout } from "@/types/workOutTypes";
import Image from "next/image";
import React from "react";
import { BsFire, BsStar } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getFitLogData = async (id: string): Promise<Workout> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/fitlog/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch workout");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching workout:", error);
    throw error;
  }
};

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  const workout = await getFitLogData(id);

  return (
    <main className="min-h-screen bg-[#0c0d10] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          {/* LEFT SIDE - IMAGE */}
          <div className="relative w-full overflow-hidden rounded-lg">
            <div className="relative aspect-4/5 w-full">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            {/* TITLE */}
            <h1 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
              {workout.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-gray-400">
              {workout.description}
            </p>

            {/* MUSCLE GROUPS */}
            <div className="mt-3 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* SPECS */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#252831] bg-[#15181e]">
              {/* EQUIPMENT */}
              <div className="flex items-center justify-between border-b border-[#22252d] px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-xs text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              {/* DIFFICULTY */}
              <div className="flex items-center justify-between border-b border-[#22252d] px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-xs text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* SETS */}
              <div className="flex items-center justify-between border-b border-[#22252d] px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-xs text-gray-200">{workout.sets}</span>
              </div>

              {/* REPS */}
              <div className="flex items-center justify-between border-b border-[#22252d] px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-xs text-gray-200">{workout.reps}</span>
              </div>

              {/* DURATION */}
              <div className="flex items-center justify-between border-b border-[#22252d] px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Duration
                </span>

                <span className="flex items-center gap-2 text-xs text-gray-200">
                  <FaClock size={10} className="text-[#ccff00]" />
                  {workout.duration} min
                </span>
              </div>

              {/* CALORIES */}
              <div className="flex items-center justify-between border-b border-[#22252d] px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Calories
                </span>

                <span className="flex items-center gap-2 text-xs text-gray-200">
                  <BsFire size={11} className="text-[#ccff00]" />
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* RATING */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  Rating
                </span>

                <span className="flex items-center gap-2 text-xs text-gray-200">
                  <BsStar size={11} className="fill-[#ccff00] text-[#ccff00]" />
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-5">
              <h2 className="text-xs font-black uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[11px] leading-relaxed text-gray-400"
                  >
                    <span className="min-w-3 text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* ADD TO PLAN */}
              <AddPlanButton workout={workout} />

              {/* SAVE */}
              <SavedButton workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;
