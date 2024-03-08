import React from "react";
import {Skeleton} from "@nextui-org/react";

const SWRTextLoading = () => {
  return (
    <div className="flex px-2 flex-row mt-6 flex-wrap w-full gap-1">
      <Skeleton className="h-52 w-full rounded-lg mb-2" />
      <Skeleton className="h-4 w-2/3 rounded-md mb-4" />
      <Skeleton className="h-3 w-full rounded-md mb-1" />
      <Skeleton className="h-3 w-full rounded-md mb-1" />
      <Skeleton className="h-3 w-2/3 rounded-md mb-4" />
      <Skeleton className="h-3 w-full rounded-md mb-1" />
      <Skeleton className="h-3 w-full rounded-md mb-1" />
      <Skeleton className="h-3 w-2/3 rounded-md mb-1" />
    </div>
  )
};

export default SWRTextLoading;