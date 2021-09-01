import Titlebar from "./Titlebar";
import TidyCollectionList from "../tidy-collection/TidyCollectionList";
import LetterLink from "../letterlink/LetterLink";

import { Frontpage } from "../../types/frontpage";

type MainAreaProps = {
  archivedFrontpages: Frontpage[][];
};

const MainArea = ({ archivedFrontpages }: MainAreaProps) => {
  return (
    <main className="main-area col-md-9 ms-sm-auto col-lg-10 ">
      <Titlebar title="Archive">
        <div className="col-11">
          <div className="alphabet-sort">
            <ul className="alphabet-sort__list">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, idx) => (
                <LetterLink key={idx} letter={letter} />
              ))}
            </ul>
          </div>
        </div>
      </Titlebar>
      <div className="main-area__content">
        <div className="col-11">
          {archivedFrontpages.map((frontpageCollection) => (
            <TidyCollectionList collection={frontpageCollection} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainArea;
