import TidyCollectionItem from "./TidyCollectionItem";

import "./tidyCollection.scss";

const TidyCollectionList = () => {
  return (
    <div className="tidy-collection-list">
      <div className="tidy-collection-list__item overflow-hidden">
        <h5>A</h5>
        <div className="row row-cols-md-3">
          <div className="col">
            <TidyCollectionItem
              collectionTitle="Association"
              collectionIconName="bi-exclamation-triangle"
            />
          </div>
          <div className="col">
            <TidyCollectionItem
              collectionTitle="Alerts"
              collectionIconName="bi-exclamation-triangle"
            />
          </div>
          <div className="col">
            <TidyCollectionItem
              collectionTitle="Abbreviations location"
              collectionIconName="bi-exclamation-triangle"
            />
          </div>
          <div className="col">
            <TidyCollectionItem
              collectionTitle="All Natural"
              collectionIconName="bi-exclamation-triangle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TidyCollectionList;
