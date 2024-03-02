import React from "react";
import {Spinner} from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="flex w-full justify-center items-center h-screen">
      <Spinner size="lg" />
    </div> 
  );
}

export default Loading;