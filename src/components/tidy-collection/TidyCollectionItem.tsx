import { useState } from "react";
import ArchiveButton from "../archive-button/ArchiveButton";

type TidyCollectionItemProps = {
  collectionTitle: string;
  collectionIconName: string;
};

const TidyCollectionItem = ({
  collectionTitle,
  collectionIconName,
}: TidyCollectionItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const someRestoreFunction = () => {
    console.log("restore archived collection!");
  };

  return (
    <div
      className="tidy-collection-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`card shadow-sm rounded border-0 py-4 px-4 ${
          isHovered && "hover"
        }`}
      >
        <div className="card__icon">
          <span className={`collection-icon ${collectionIconName}`}></span>
        </div>
        <div className="card__text">
          <span className="text-uppercase collection-tag">Tidy collection</span>
          <span className="text-capitalize collection-title">
            {collectionTitle}
          </span>
        </div>
        <div className={`card__button ${isHovered && "visible"}`}>
          <ArchiveButton
            isArchived={true}
            handleArchiveButtonAction={someRestoreFunction}
          />
        </div>
      </div>
    </div>
  );
};

export default TidyCollectionItem;
