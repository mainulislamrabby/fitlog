import { Workout } from "@/types/workOutTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight, BsStar, BsFire } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout-list/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-[#292B33] bg-[#15161D] transition-all duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/50"
    >
      {/* Workout Image */}
      <div>
        <Image
          src={workout.image}
          alt={workout.name}
          width={600}
          height={400}
        />
      </div>

      {/* Workout Information */}
      <div className="p-3">
        {/* Muscle Groups */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#CCFF00] px-2 py-0.5 text-[12px] font-bold uppercase leading-tight text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="truncate text-[18px] font-extrabold uppercase leading-4 text-white">
            {workout.name}
          </h3>

          <BsArrowUpRight
            size={13}
            className="shrink-0 text-gray-500 transition-colors group-hover:text-[#CCFF00]"
          />
        </div>

        {/* Equipment */}
        <p className="truncate text-[12px] text-gray-400">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-2 border-t border-[#292B33]" />

        {/* Workout Stats */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-gray-400">
          <span className="flex items-center gap-1">
            <FaClock size={10} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <BsFire size={10} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <BsStar size={10} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;