"use client";

import React from "react";
import {Card, CardBody} from "@nextui-org/react";

const SWRError = (error) => {
  return (
    <div className="flex px-2 flex-row mt-6 flex-wrap w-full">
      <Card fullWidth={true} className="w-full flex justify-center">
      <CardBody>
        <p>{error.message}</p>
      </CardBody>
    </Card>
    </div>
  )
};

export default SWRError;