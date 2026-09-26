import React from "react";

type Tab = "today" | "saved";
type SortOption = "duration" | "calories" | "rating";

interface PlanTabsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
}: PlanTabsProps) => {
  return (
    <section className="mt-5 flex items-center justify-between">
      {/* TABS */}
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
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="h-7 rounded-md border border-[#252a32] bg-[#14171d] px-2 text-[9px] text-gray-300 outline-none"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </section>
  );
};

export default PlanTabs;
