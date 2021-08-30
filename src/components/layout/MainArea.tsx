import Titlebar from "./Titlebar";
import TidyCollectionList from "../tidy-collection/TidyCollectionList";
import LetterLink from "../letterlink/LetterLink";

const MainArea = () => {
  return (
    <main className="main-area">
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
          <TidyCollectionList />
        </div>
      </div>
    </main>
  );
};

export default MainArea;
