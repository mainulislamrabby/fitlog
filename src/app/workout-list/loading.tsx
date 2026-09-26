import React from "react";

const FitLogLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="h-64 rounded-lg bg-gray-200" />

          <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />

          <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />

          <div className="mt-3 h-4 w-full rounded bg-gray-200" />
          <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default FitLogLoading;