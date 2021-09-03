import FrontpageItem from "./FrontpageItem";

import { Frontpage } from "../../types/frontpage";

import "./frontpage.scss";

type FrontpageListProps = {
  frontpages: Frontpage[];
  handleArchive: (id: string) => void;
};

const FrontpageList = ({ frontpages, handleArchive }: FrontpageListProps) => {
  return (
    <div className="fontpage-list">
      <div className="frontpage-list__header">
        <h6 className="heading">Frontpages</h6>
        <button className="add-btn">
          <span className="bi-plus"></span>
        </button>
      </div>
      <div className="frontpage-list__items" data-test="frontpage-list-items">
        {frontpages.map((frontpage) => (
          <FrontpageItem
            key={frontpage.id}
            frontpage={frontpage}
            handleArchive={handleArchive}
          />
        ))}
      </div>
    </div>
  );
};

export default FrontpageList;
