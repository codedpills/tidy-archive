import { useState } from "react";

import "./archiveButton.scss";

type ArchiveButtonProps = {
  isArchived?: boolean;
  handleArchive: () => void;
};

const ArchiveButton = ({
  isArchived = false,
  handleArchive,
}: ArchiveButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const archivedIconState = isHovered ? "bi-archive" : "bi-archive-fill";
  const defaultIconState = isHovered ? "bi-archive-fill" : "bi-archive";

  return (
    <button
      className="archive-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        handleArchive();
      }}
    >
      <span
        className={`archive-button__icon ${
          isArchived ? archivedIconState : defaultIconState
        }`}
      ></span>
    </button>
  );
};

export default ArchiveButton;
