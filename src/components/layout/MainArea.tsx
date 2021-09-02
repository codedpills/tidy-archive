import Titlebar from "./Titlebar";
import TidyCollectionList from "../tidy-collection/TidyCollectionList";
import AlphabetList from "../alphabet-list/AlphabetList";

import { Frontpage } from "../../types/frontpage";

type MainAreaProps = {
  archivedFrontpages: Frontpage[][];
  handleRestore: (id: string, collectionLetter: string) => void;
};

const MainArea = ({ archivedFrontpages, handleRestore }: MainAreaProps) => {
  return (
    <main className="main-area col-md-9 ms-sm-auto col-lg-10 ">
      <Titlebar title="Archive">
        <div className="col-11">
          <AlphabetList archivedFrontpages={archivedFrontpages} />
        </div>
      </Titlebar>
      <div className="main-area__content">
        <div className="col-11">
          {archivedFrontpages.map((frontpageCollection, idx) => (
            <TidyCollectionList
              collection={frontpageCollection}
              key={idx}
              handleRestore={handleRestore}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainArea;
