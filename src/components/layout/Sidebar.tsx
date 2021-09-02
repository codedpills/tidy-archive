import FrontpageList from "../frontpages/FrontpageList";
import MenuItem from "../menu-item/MenuItem";
import Profile from "../profile/Profile";

import { Frontpage } from "../../types/frontpage";

const someUser = {
  name: "Ahmed Zaky",
  imageUrl:
    "https://media-exp1.licdn.com/dms/image/C4E03AQHPIrT3_OA0Zg/profile-displayphoto-shrink_200_200/0/1625055989831?e=1635984000&v=beta&t=Ss6z8zVwYZb84NKiom11kqWAqVo-ymGj-r6KDpW6YFw",
  company: "Tidy",
};

type SidebarProps = {
  frontpages: Frontpage[];
  handleArchive: (id: string) => void;
};

const Sidebar = ({ frontpages, handleArchive }: SidebarProps) => {
  return (
    <aside className="sidebar col-md-3 col-lg-2 d-flex flex-column flex-shrink-0 p-3 bg-white">
      <nav className="nav flex-column pt-5 pb-3">
        <MenuItem menuIconName="bi-search" menuTitle="search" />
        <MenuItem menuIconName="bi-inbox" menuTitle="inbox" />
        <MenuItem menuIconName="bi-bookmark" menuTitle="templates" />
      </nav>
      <nav className="nav flex-column mb-auto">
        <FrontpageList frontpages={frontpages} handleArchive={handleArchive} />
      </nav>
      <hr />
      <nav className="nav flex-column">
        <MenuItem
          menuIconName="bi-archive"
          menuTitle="archive"
          isActive={true}
        />
      </nav>
      <hr />
      <Profile user={someUser} />
    </aside>
  );
};

export default Sidebar;
