
import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
};

export default GlobalLoading;
