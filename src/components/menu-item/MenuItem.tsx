import "./menuItem.scss";

type MenuItemProps = {
  menuIconName: string;
  menuTitle: string;
  isActive?: boolean;
};

const MenuItem = ({
  menuIconName,
  menuTitle,
  isActive = false,
}: MenuItemProps) => {
  return (
    <div className={`menu-item  ${isActive && "active"}`}>
      <span className={`menu-item__icon ${menuIconName}`}></span>
      <span className="menu-item__text">{menuTitle}</span>
    </div>
  );
};

export default MenuItem;
