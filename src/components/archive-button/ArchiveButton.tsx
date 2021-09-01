import { useState } from "react";

import "./archiveButton.scss";

type ArchiveButtonProps = {
  isArchived?: boolean;
  handleArchiveButtonAction: () => void;
};

const ArchiveButton = ({
  isArchived = false,
  handleArchiveButtonAction,
}: ArchiveButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const archivedIconState = isHovered ? "bi-archive" : "bi-archive-fill";
  const defaultIconState = isHovered ? "bi-archive-fill" : "bi-archive";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    handleArchiveButtonAction();
  };

  return (
    <button
      className="archive-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
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
