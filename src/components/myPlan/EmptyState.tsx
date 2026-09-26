import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex min-h-66.25 flex-col items-center justify-center rounded-xl border border-dashed border-[#252a32] px-5 text-center">
      <h2 className="text-[22px] font-black uppercase sm:text-[18px]">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 text-[11px] text-gray-500 sm:text-[12px]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-4 rounded-full bg-[#ccff00] px-4 py-2 text-[14px] font-bold uppercase text-black transition hover:bg-[#ddff55]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyState;