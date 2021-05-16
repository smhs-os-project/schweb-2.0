import React from "react";
import SetupUIContainer from "./Base/Container";
import SetupUIBlur from "./Base/Blur";
import SetupUIStepsBase from "./Steps/Base";
import type { ReactNode } from "react";

export interface SetupUIProps {
  /**
   * background
   */
  children: ReactNode;
}

export default function SetupUI({ children }: SetupUIProps) {
  return (
    <div className="setup-ui-main">
      <div className="z-10 fixed left-0 top-0 p-10 w-screen h-screen flex justify-center justify-items-center content-center items-center">
        <SetupUIContainer>
          <SetupUIStepsBase
            step={1}
            title="測試步驟"
            onPrev={() => {}}
            onNext={() => {}}
            onSkip={() => {}}
          >
            測試
          </SetupUIStepsBase>
        </SetupUIContainer>
      </div>
      <div className="z-0">
        <SetupUIBlur>{children}</SetupUIBlur>
      </div>
    </div>
  );
}
