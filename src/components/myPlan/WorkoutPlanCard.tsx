import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFire, BsStar, BsTrash3 } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { Workout } from "@/types/workOutTypes";

type Tab = "today" | "saved";

interface WorkoutPlanCardProps {
  workout: Workout;
  activeTab: Tab;
  onRemove: (id: string | number) => void;
  onMarkAsDone: (workout: Workout) => void;
}

const WorkoutPlanCard = ({
  workout,
  activeTab,
  onRemove,
  onMarkAsDone,
}: WorkoutPlanCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-[#242831] bg-[#12151a]">
      <div className="flex flex-col sm:flex-row">
        {/* IMAGE */}
        <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-48">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 192px"
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h2 className="text-sm font-black uppercase sm:text-base">
              {workout.name}
            </h2>

            <p className="mt-1 text-[11px] text-gray-500">{workout.equipment}</p>

            {/* STATS */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <FaClock size={10} className="text-[#ccff00]" />
                {workout.duration} min
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <BsFire size={11} className="text-[#ccff00]" />
                {workout.caloriesBurned} kcal
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <BsStar size={11} className="fill-[#ccff00] text-[#ccff00]" />
                {workout.rating}
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/workout-list/${workout.id}`}
              className="rounded-md bg-[#ccff00] px-3 py-2 text-[12px] font-bold uppercase text-black transition hover:bg-[#ddff55]"
            >
              View Details
            </Link>

            {activeTab === "today" && (
              <button
                onClick={() => onMarkAsDone(workout)}
                className="rounded-md border border-[#30343d] px-3 py-2 text-[12px] font-medium uppercase text-gray-300 transition hover:border-[#ccff00] hover:text-white"
              >
                Mark as Done
              </button>
            )}

            <button
              onClick={() => onRemove(workout.id)}
              className="flex items-center gap-1.5 rounded-md border border-[#30343d] px-3 py-2 text-[12px] text-gray-500 transition hover:border-red-500 hover:text-red-400"
              aria-label={`Remove ${workout.name}`}
            >
              <BsTrash3 size={10} />
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkoutPlanCard;
