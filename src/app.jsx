"use client";

import {NextUIProvider} from "@nextui-org/react";

export function App ({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}