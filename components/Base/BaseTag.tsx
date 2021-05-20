import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

export interface BaseTagProps {
  children: ReactNode;
  status: boolean;
  onOperated: (status: boolean) => void;
}

export default function BaseTag({
  children,
  status,
  onOperated,
}: BaseTagProps) {
  const statusColor = () =>
    status ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900";
  const statusIcon = () => (status ? faCheck : faPlus);

  return (
    <button
      type="button"
      className={`p-2 rounded focus:outline-none ${statusColor()}`}
      onClick={() => onOperated(!status)}
    >
      <div className="flex space-x-2 items-center">
        <div>
          <FontAwesomeIcon icon={statusIcon()} width="1em" />
        </div>
        <div>{children}</div>
      </div>
    </button>
  );
}
