import FrontpageItem from "./FrontpageItem";

import "./frontpage.scss";

const someFrontpage = {
    title: "Some frontpage",
    iconName: "bi-check2-square",
}

const FrontpageList = () => {
  return (
    <div className="fontpage-list">
      <div className="frontpage-list__header">
        <h6 className="heading">Frontpages</h6>
        <button className="add-btn">
          <span className="bi-plus"></span>
        </button>
      </div>
      <div className="frontpage-list__items">
        <FrontpageItem frontpage={someFrontpage} />
        <FrontpageItem frontpage={someFrontpage} />
        <FrontpageItem frontpage={someFrontpage} />
        <FrontpageItem frontpage={someFrontpage} />
        <FrontpageItem frontpage={someFrontpage} />
        <FrontpageItem frontpage={someFrontpage} />
        <FrontpageItem frontpage={someFrontpage} />
      </div>
    </div>
  );
};

export default FrontpageList;
