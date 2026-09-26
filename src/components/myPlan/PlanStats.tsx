import React from "react";

interface PlanStatsProps {
  exercises: number;
  minutes: number;
  calories: number;
}

const PlanStats = ({ exercises, minutes, calories }: PlanStatsProps) => {
  return (
    <section className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#20242c] bg-[#12151b]">
      <div className="border-r border-[#20242c] px-3 py-3 sm:px-5 sm:py-4">
        <p className="text-[14px] text-gray-500 sm:text-[12px]">Exercises</p>

        <p className="mt-1 text-xl font-black text-[#ccff00] sm:text-2xl">
          {exercises}
        </p>
      </div>

      <div className="border-r border-[#20242c] px-3 py-3 sm:px-5 sm:py-4">
        <p className="text-[14px] text-gray-500 sm:text-[12px]">Minutes</p>

        <p className="mt-1 text-xl font-black text-white sm:text-2xl">
          {minutes}
        </p>
      </div>

      <div className="px-3 py-3 sm:px-5 sm:py-4">
        <p className="text-[14px] text-gray-500 sm:text-[12px]">Calories</p>

        <p className="mt-1 text-xl font-black text-white sm:text-2xl">
          {calories}
        </p>
      </div>
    </section>
  );
};

export default PlanStats;
