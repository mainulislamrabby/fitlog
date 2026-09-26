"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { Workout } from "@/types/workOutTypes";
import React, { useContext } from "react";
import { BsBookmark} from "react-icons/bs";
import { toast } from "react-toastify";

const SavedButton = ({ workout }: { workout: Workout }) => {
  const { saved, setSaved } = useContext(FitLogContext);
  const handleAddToSaved = () => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info(`${workout.name} is already saved!`);
      return;
    }

    setSaved((prevSaved: Workout[]) => [...prevSaved, workout]);
    toast.success(`${workout.name} has been added to your saved workouts!`);
  };
  return (
    <div>
      <button
        
        onClick={handleAddToSaved}
        className="flex items-center gap-2 rounded-md border border-[#30343d] px-4 py-2.5 text-xs font-medium bg-gray-950 text-gray-300 transition hover:border-[#ccff00] hover:text-white"
      >
        <BsBookmark size={12} />
        Save for later
      </button>
    </div>
  );
};

export default SavedButton;
