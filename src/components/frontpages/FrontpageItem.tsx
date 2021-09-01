import { useState } from "react";

import ArchiveButton from "../archive-button/ArchiveButton";

type FrontpageItemProps = {
  frontpage: {
    iconName: string;
    title: string;
  };
};

const someArchiveFunction = (): void => {
  console.log("archived!");
};

const FrontpageItem = ({ frontpage }: FrontpageItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`frontpage-item ${isHovered && "hover"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`frontpage-item__icon ${frontpage.iconName}`}></span>
      <div className="frontpage-item__text">
        <span className="frontpage-item__text-title">{frontpage.title}</span>
        <span
          className={`frontpage-item__text-button ${isHovered && "visible"}`}
        >
          <ArchiveButton handleArchive={someArchiveFunction} />
        </span>
      </div>
    </div>
  );
};

export default FrontpageItem;
