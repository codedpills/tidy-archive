import Titlebar from "./Titlebar"

const MainArea = () => {
    return (
        <main className="main-area">
            <Titlebar title="Archive">
                Alphabet sorting thing
            </Titlebar>
            <div className="main-area__content">
                main content area
            </div>
        </main>
    );
}

export default MainArea;
