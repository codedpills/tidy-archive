import TidyCollectionItem from "./TidyCollectionItem";

import "./tidyCollection.scss";
import { Frontpage } from "../../types/frontpage";

type TidyCollectionListProps = {
  collection: Frontpage[];
};

const TidyCollectionList = ({ collection }: TidyCollectionListProps) => {
  if (collection.length === 0) return null;
  const collectionLetter = collection[0].title.toString()[0].toUpperCase();

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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TidyCollectionList;
