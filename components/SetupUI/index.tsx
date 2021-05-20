import React from "react";
import SetupUIContainer from "./Base/Container";
import SetupUIBlur from "./Base/Blur";
import type { ReactNode } from "react";

export interface SetupUIProps {
  /**
   * background
   */
  children: ReactNode;
  /**
   * Use what steps?
   */
  step: ReactNode;
}

export default function SetupUI({ children, step }: SetupUIProps) {
  return (
    <div className="setup-ui-main">
      <div className="z-10 fixed left-0 top-0 p-10 w-screen h-screen flex justify-center justify-items-center content-center items-center">
        <SetupUIContainer>
          { step }
        </SetupUIContainer>
      </div>
      <div className="z-0">
        <SetupUIBlur>{children}</SetupUIBlur>
      </div>
    </div>
  );
}
