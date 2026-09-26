"use client";

import React, { useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogContext";
import { Workout } from "@/types/workOutTypes";

import PlanStats from "@/components/myPlan/PlanStats";
import PlanTabs from "@/components/myPlan/PlanTabs";
import WorkoutPlanCard from "@/components/myPlan/WorkoutPlanCard";
import EmptyState from "@/components/myPlan/EmptyState";

type Tab = "today" | "saved";
type SortOption = "duration" | "calories" | "rating";

const MyPlan = () => {
  const { plan, setPlan, saved, setSaved } = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  // Current tab workouts
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

  // Metrics for current tab
  const totalExercises = currentWorkouts.length;

  const totalMinutes = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) => total + workout.duration,
      0,
    );
  }, [currentWorkouts]);

  const totalCalories = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) => total + workout.caloriesBurned,
      0,
    );
  }, [currentWorkouts]);

  // Remove
  const handleRemove = (id: string | number) => {
    if (activeTab === "today") {
      setPlan((prevPlan) =>
        prevPlan.filter((workout) => workout.id !== Number(id)),
      );

      toast.success("Workout removed from today's plan.");
    } else {
      setSaved((prevSaved) =>
        prevSaved.filter((workout) => workout.id !== Number(id)),
      );

      toast.success("Workout removed from saved workouts.");
    }
  };

  // Mark as done
  const handleMarkAsDone = (workout: Workout) => {
    setPlan((prevPlan) =>
      prevPlan.filter((item) => item.id !== workout.id),
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

        {/* STATS */}
        <PlanStats
          exercises={totalExercises}
          minutes={totalMinutes}
          calories={totalCalories}
        />

        {/* TABS + SORT */}
        <PlanTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* LIST */}
        <section className="mt-4">
          {currentWorkouts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-3">
              {currentWorkouts.map((workout) => (
                <WorkoutPlanCard
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

export default MyPlan;