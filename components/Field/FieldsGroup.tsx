import React from "react";
import type { ReactNode } from "react";

export interface FieldsGroupProps {
  children: ReactNode;
}

export default function FieldsGroup({ children }: FieldsGroupProps) {
  return (
    <div className="flex justify-between w-full overflow-scroll">
      {children}
    </div>
  );
}
