import TidyCollectionItem from "./TidyCollectionItem";

import "./tidyCollection.scss";
import { Frontpage } from "../../types/frontpage";

type TidyCollectionListProps = {
  collection: Frontpage[];
  handleRestore: (id: string, collectionLetter: string) => void;
};

const TidyCollectionList = ({ collection, handleRestore }: TidyCollectionListProps) => {
  if (collection.length === 0) return null;
  const collectionLetter = collection[0].title.toString()[0].toUpperCase();

  const handleRestoreClick = (id: string) => {
    handleRestore(id, collectionLetter);
  }

  return (
    <div className="tidy-collection-list">
      <div className="tidy-collection-list__item">
        <h5 className="list-order-tag">{collectionLetter}</h5>
        <div className="row row-cols-md-3">
          {collection.map((archivedFrontpage) => (
            <div className="col" key={archivedFrontpage.id}>
              <TidyCollectionItem
                title={archivedFrontpage.title}
                icon={archivedFrontpage.icon}
                id={archivedFrontpage.id}
                handleRestore={handleRestoreClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TidyCollectionList;
