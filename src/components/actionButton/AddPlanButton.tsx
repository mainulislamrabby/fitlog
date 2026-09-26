"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { Workout } from "@/types/workOutTypes";
import React, { useContext } from "react";
import { BsPlus } from "react-icons/bs";
import { toast } from "react-toastify";

const AddPlanButton = ({ workout }: { workout: Workout }) => {
  const { plan, setPlan } = useContext(FitLogContext);
  const handleAddToPlan = () => {
    if (plan.some((item) => item.id === workout.id)) {
      toast.info(`${workout.name} is already in your plan!`);
      return;
    }

    // Maximum 5 workouts
    if (plan.length >= 5) {
      toast.error("You can only add 5 workouts to today's plan!");
      return;
    }

    setPlan((prevPlan: Workout[]) => [...prevPlan, workout]);
    toast.success(`${workout.name} has been added to your plan!`);
  };
  return (
    <div>
      <button
        onClick={handleAddToPlan}
        className="flex items-center cursor-pointer gap-2 rounded-md border hover:text-gray-950 border-[#30343d] bg-[#ccff00] px-4 py-2.5 text-xs font-medium text-gray-900 transition hover:bg-[#ddff55] hover:border-[#ccff00]"
      >
        <BsPlus size={15} />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddPlanButton;
