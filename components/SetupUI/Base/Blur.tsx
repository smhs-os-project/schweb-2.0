import React from "react";
import type { ReactNode } from "react";

export interface SetupUIBlurProps {
  level?: string;
  children: ReactNode;
}

export default function SetupUIBlur({
  level = "md",
  children,
}: SetupUIBlurProps) {
  return (
    <div className={`setup-ui-background filter blur-${level} select-none`}>
      {children}
    </div>
  );
}
