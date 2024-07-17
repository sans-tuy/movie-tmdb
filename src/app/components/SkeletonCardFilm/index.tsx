import { CircularProgress, Skeleton } from "@nextui-org/react";

export default function SkeletonCardFilm() {
  return (
    <div>
      <div className="relative min-w-[150px] h-[225px] rounded-md ">
        <Skeleton
          className="rounded-lg min-w-[150px] h-[225px]"
          isLoaded={false}
        />
        <div className="absolute z-20 -bottom-5 left-2 bg-black rounded-[50%] text-white">
          <CircularProgress
            label=""
            size="md"
            aria-label="rating"
            value={0}
            color={"success"}
            formatOptions={{
              style: "decimal",
              maximumSignificantDigits: 2,
            }}
            maxValue={10}
            showValueLabel={true}
          />
        </div>
      </div>
      <Skeleton
        className="rounded-lg w-[150px] h-[25px] mt-5"
        isLoaded={false}
      />
    </div>
  );
}
