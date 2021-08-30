type TidyCollectionItemProps = {
  collectionTitle: string;
  collectionIconName: string;
};

const TidyCollectionItem = ({
  collectionTitle,
  collectionIconName,
}: TidyCollectionItemProps) => {
  return (
    <div className="tidy-collection-item">
      <div className="card shadow-sm rounded border-0 py-4 px-4">
        <div className="row">
          <div className="col-3">
            <span className={`collection-icon ${collectionIconName}`}></span>
          </div>
          <div className="col-7">
            <span className="text-uppercase collection-tag">
              Tidy collection
            </span>
            <span className="text-capitalize collection-title">
              {collectionTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TidyCollectionItem;
