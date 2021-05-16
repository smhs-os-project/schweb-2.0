import React from "react";
import type { ReactNode } from "react";

export interface SetupUIContainerProps {
  children: ReactNode;
}

export default function SetupUIContainer({ children }: SetupUIContainerProps) {
  return (
    <div className="setup-ui-root w-2/3 h-2/3 p-10 rounded-lg filter drop-shadow-lg bg-gray-100">
      {children}
    </div>
  );
}
