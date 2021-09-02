import { useEffect, useState } from "react";

import LetterLink from "../letterlink/LetterLink";

import "./alphabetList.scss";

import { Frontpage } from "../../types/frontpage";

type AlphabetListProps = {
  archivedFrontpages: Frontpage[][];
};

const AlphabetList = ({ archivedFrontpages }: AlphabetListProps) => {
  const [activeLetter, setActiveLetter] = useState("");

  useEffect(() => {
    for (let i = 0; i < archivedFrontpages.length; i++) {
      if (archivedFrontpages[i].length > 0) {
        const letter = archivedFrontpages[i][0].title[0];
        handleSetActiveLetter(letter.toUpperCase());
        return;
      }
    }
    setActiveLetter("");
  }, [archivedFrontpages]);

  const handleSetActiveLetter = (letter: string) => {
    setActiveLetter(letter);
  };

  return (
    <div className="alphabet-sort">
      <ul className="alphabet-sort__list">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, idx) => (
          <LetterLink
            key={idx}
            letter={letter}
            isDisabled={archivedFrontpages[idx].length === 0}
            isActive={activeLetter === letter}
            setActiveLetter={handleSetActiveLetter}
          />
        ))}
      </ul>
    </div>
  );
};

export default AlphabetList;
