"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FitLogContext } from "@/context/FitLogContext";
import { Workout } from "@/types/workOutTypes";
import { BsFire, BsStar, BsTrash3 } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { toast } from "react-toastify";

type Tab = "today" | "saved";
type SortOption = "duration" | "calories" | "rating";

const MyPlan = () => {
  const { plan, setPlan, saved, setSaved } =
    useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Metrics are always based on Today's Plan
  const totalMinutes = useMemo(() => {
    return plan.reduce(
      (total, workout) => total + workout.duration,
      0
    );
  }, [plan]);

  const totalCalories = useMemo(() => {
    return plan.reduce(
      (total, workout) => total + workout.caloriesBurned,
      0
    );
  }, [plan]);

  // Current tab's workouts
  const currentWorkouts = useMemo(() => {
    const workouts = activeTab === "today" ? plan : saved;

    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [activeTab, plan, saved, sortBy]);

  const handleRemove = (id: string) => {
    if (activeTab === "today") {
      setPlan((prevPlan) =>
        prevPlan.filter((workout) => workout.id !== id)
      );

      toast.success("Workout removed from today's plan.");
    } else {
      setSaved((prevSaved) =>
        prevSaved.filter((workout) => workout.id !== id)
      );

      toast.success("Workout removed from saved workouts.");
    }
  };

  const handleMarkAsDone = (workout: Workout) => {
    setPlan((prevPlan) =>
      prevPlan.filter((item) => item.id !== workout.id)
    );

    toast.success(`${workout.name} marked as done!`);
  };

  return (
    <main className="min-h-screen bg-[#0c0d10] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <section>
          <h1 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* METRICS */}
        <section className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#20242c] bg-[#12151b]">
          <Metric
            label="Exercises"
            value={plan.length}
            highlight
          />

          <Metric
            label="Minutes"
            value={totalMinutes}
          />

          <Metric
            label="Calories"
            value={totalCalories}
          />
        </section>

        {/* TABS + SORT */}
        <section className="mt-5 flex items-center justify-between">
          <div className="flex rounded-lg border border-[#242831] bg-[#14171d] p-0.5">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-3 py-1.5 text-[9px] font-medium transition ${
                activeTab === "today"
                  ? "bg-[#20242c] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-3 py-1.5 text-[9px] font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#20242c] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* SORT */}
          <div className="flex items-center gap-2">
            <span className="hidden text-[9px] text-gray-500 sm:block">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortOption)
              }
              className="h-7 rounded-md border border-[#252a32] bg-[#14171d] px-2 text-[9px] text-gray-300 outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </section>

        {/* WORKOUT LIST */}
        <section className="mt-4">
          {loading ? (
            <div className="flex min-h-65 items-center justify-center rounded-xl border border-dashed border-[#252a32]">
              <p className="text-xs text-gray-500">
                Loading workouts…
              </p>
            </div>
          ) : currentWorkouts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-3">
              {currentWorkouts.map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                  activeTab={activeTab}
                  onRemove={handleRemove}
                  onMarkAsDone={handleMarkAsDone}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

/* ============================= */
/* METRIC CARD */
/* ============================= */

interface MetricProps {
  label: string;
  value: number;
  highlight?: boolean;
}

const Metric = ({
  label,
  value,
  highlight = false,
}: MetricProps) => {
  return (
    <div className="border-r border-[#20242c] px-3 py-3 last:border-r-0 sm:px-5 sm:py-4">
      <p className="text-[8px] text-gray-500 sm:text-[9px]">
        {label}
      </p>

      <p
        className={`mt-1 text-xl font-black sm:text-2xl ${
          highlight ? "text-[#ccff00]" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

/* ============================= */
/* EMPTY STATE */
/* ============================= */

const EmptyState = () => {
  return (
    <div className="flex min-h-66.25 flex-col items-center justify-center rounded-xl border border-dashed border-[#252a32] px-5 text-center">
      <h2 className="text-xs font-black uppercase sm:text-sm">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 text-[8px] text-gray-500 sm:text-[9px]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-4 rounded-full bg-[#ccff00] px-4 py-2 text-[8px] font-bold uppercase text-black transition hover:bg-[#ddff55]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

/* ============================= */
/* WORKOUT CARD */
/* ============================= */

interface WorkoutCardProps {
  workout: Workout;
  activeTab: Tab;
  onRemove: (id: string) => void;
  onMarkAsDone: (workout: Workout) => void;
}

const WorkoutCard = ({
  workout,
  activeTab,
  onRemove,
  onMarkAsDone,
}: WorkoutCardProps) => {
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

            <p className="mt-1 text-[9px] text-gray-500">
              {workout.equipment}
            </p>

            {/* STATS */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-[9px] text-gray-400">
                <FaClock
                  size={10}
                  className="text-[#ccff00]"
                />
                {workout.duration} min
              </div>

              <div className="flex items-center gap-1.5 text-[9px] text-gray-400">
                <BsFire
                  size={11}
                  className="text-[#ccff00]"
                />
                {workout.caloriesBurned} kcal
              </div>

              <div className="flex items-center gap-1.5 text-[9px] text-gray-400">
                <BsStar
                  size={11}
                  className="fill-[#ccff00] text-[#ccff00]"
                />
                {workout.rating}
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/workout/${workout.id}`}
              className="rounded-md bg-[#ccff00] px-3 py-2 text-[8px] font-bold uppercase text-black transition hover:bg-[#ddff55]"
            >
              View Details
            </Link>

            {activeTab === "today" && (
              <button
                onClick={() => onMarkAsDone(workout)}
                className="rounded-md border border-[#30343d] px-3 py-2 text-[8px] font-medium uppercase text-gray-300 transition hover:border-[#ccff00] hover:text-white"
              >
                Mark as Done
              </button>
            )}

            <button
              onClick={() => onRemove(workout.id)}
              className="flex items-center gap-1.5 rounded-md border border-[#30343d] px-3 py-2 text-[8px] text-gray-500 transition hover:border-red-500 hover:text-red-400"
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

export default MyPlan;