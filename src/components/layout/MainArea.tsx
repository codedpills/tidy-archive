import Titlebar from "./Titlebar";
import TidyCollectionList from "../tidy-collection/TidyCollectionList";

const MainArea = () => {
  return (
    <main className="main-area">
      <Titlebar title="Archive">Alphabet sorting thing</Titlebar>
      <div className="main-area__content">
        <div className="col-11">
          <TidyCollectionList />
        </div>
      </div>
    </main>
  );
};

export default MainArea;
