import { useState } from "react";

import ArchiveButton from "../archive-button/ArchiveButton";

import { Frontpage } from "../../types/frontpage";

type FrontpageItemProps = {
  frontpage: Frontpage;
  handleArchive: (id: string) => void;
};

const FrontpageItem = ({ frontpage, handleArchive }: FrontpageItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div
      className={`frontpage-item ${isHovered && "hover"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`frontpage-item__icon ${frontpage.icon}`}></span>
      <div className="frontpage-item__text">
        <span className="frontpage-item__text-title">{frontpage.title}</span>
        <span
          className={`frontpage-item__text-button ${isHovered && "visible"}`}
        >
          <ArchiveButton
            handleArchiveButtonAction={handleArchive}
            id={frontpage.id}
          />
        </span>
      </div>
    </div>
  );
};

export default FrontpageItem;
