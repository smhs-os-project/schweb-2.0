import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

export interface FieldProps {
  title: string | ReactNode;
  actions?: {
    icon: IconDefinition;
    action: () => void;
  }[];
  children: ReactNode;
}

export default function Field({ title, actions, children }: FieldProps) {
  return (
    <div className="field w-full">
      <div className="title-bar flex justify-between pb-4">
        <div>
          <h2 className="text-lg">{title}</h2>
        </div>
        <div>
          {actions &&
            actions.map(({ icon, action }, index) => (
              <button
                type="button"
                className="w-min"
                key={`${title}-action-${index + 1}-icon`}
                tabIndex={0}
              >
                <FontAwesomeIcon icon={icon} onClick={action} />
              </button>
            ))}
        </div>
      </div>
      <div className="w-full space-y-2">{children}</div>
    </div>
  );
}
