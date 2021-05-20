import React from "react";
import type { ReactNode } from "react";

export interface SetupUIButtonProps {
  textColor?: string;
  color: string;
  listener?: () => void;
  children: ReactNode;
}

export function SetupUIButton({
  textColor = "white",
  color,
  listener,
  children,
}: SetupUIButtonProps) {
  if (!listener) return null;

  return (
    <button
      className={`text-${textColor} bg-${color} text-sm p-2 rounded w-20 h-10`}
      type="button"
      onClick={listener}
    >
      {children}
    </button>
  );
}

export interface SetupUIStepsBaseProps {
  /**
   * For example, `1` for Step 1.
   */
  step?: number;
  /**
   * The title of this step.
   */
  title: string;
  /**
   * Should the "Next" button enable?
   *
   * Define the listener if yes.
   */
  onNext?: () => void;
  /**
   * Should the "Previous" button enable?
   *
   * Define the listener if yes.
   */
  onPrev?: () => void;
  /**
   * Should the "Skip" button enable?
   *
   * Define the listener if yes.
   */
  onSkip?: () => void;
  children: ReactNode;
}

export default function SetupUIStepsBase({
  step,
  title,
  onNext,
  onPrev,
  onSkip,
  children,
}: SetupUIStepsBaseProps) {
  return (
    <div className="setup-ui-step grid grid-rows-3 gap-4 align-between p-5 h-full">
      <div className="self-end">
        {step && <h1 className="step-number text-2xl font-light">{step}</h1>}
        <h1 className="step-title text-2xl font-bold">{title}</h1>
      </div>
      <div className="self-start overflow-scroll">{children}</div>
      <div className="self-center">
        <div className="flex space-x-2">
          <SetupUIButton color="sweet-orange" listener={onPrev}>
            上一步
          </SetupUIButton>
          <SetupUIButton color="sky-blue" listener={onNext}>
            下一步
          </SetupUIButton>
          <SetupUIButton
            textColor="gray-500"
            color="transparent"
            listener={onSkip}
          >
            略過
          </SetupUIButton>
        </div>
      </div>
    </div>
  );
}
