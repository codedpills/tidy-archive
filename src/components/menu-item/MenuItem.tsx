import "./menuItem.scss";

type MenuItemProps = {
  menuIconName: string;
  menuTitle: string;
};

const MenuItem = ({ menuIconName, menuTitle }: MenuItemProps) => {
  return (
    <div className="menu-item">
      <span className={`menu-item__icon ${menuIconName}`}></span>
      <span className="menu-item__text">{menuTitle}</span>
    </div>
  );
};

export default MenuItem;
