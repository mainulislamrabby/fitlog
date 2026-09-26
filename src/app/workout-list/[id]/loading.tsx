import React from "react";

const FitLogDetailsLoading = () => {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
       
        <div className="h-112.5 rounded-xl bg-gray-200" />

    
        <div className="space-y-5 md:col-span-2">
          <div className="h-8 w-3/4 rounded bg-gray-200" />

          <div className="h-5 w-1/2 rounded bg-gray-200" />

          <div className="h-5 w-1/3 rounded bg-gray-200" />

          <div className="space-y-2 pt-4">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-4/5 rounded bg-gray-200" />
            <div className="h-4 w-3/5 rounded bg-gray-200" />
          </div>

          <div className="h-10 w-36 rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default FitLogDetailsLoading;