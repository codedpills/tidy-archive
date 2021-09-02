import { useState } from "react";
import { Link } from "react-scroll";

import "./letterlink.scss";

type LetterLinkProps = {
  letter: string;
  isDisabled?: boolean;
  isActive: boolean;
  setActiveLetter: (letter: string) => void;
};

type LinkState = "default" | "active" | "hover";

const LetterLink = ({
  letter,
  isDisabled,
  isActive,
  setActiveLetter,
}: LetterLinkProps) => {
  const [linkState, setLinkState] = useState<LinkState>("default");
  const handleMouseEnter = (): void => {
    if (!isActive && !isDisabled) setLinkState("hover");
  };

  const handleMouseLeave = (): void => {
    if (!isDisabled) setLinkState("default");
  };

  const handleClick = (): void => {
    if (isDisabled) return;
    setActiveLetter(letter);
  };

  return (
    <li className={`letter-link ${isDisabled && "disabled"}`}>
      <Link
        className="scroll-link"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        activeClass="active"
        to={letter}
        spy={true}
        offset={-200}
      >
        {letter}
      </Link>
      <div
        className={`letter-border letter-border-${
          isActive ? "active" : linkState
        }`}
      ></div>
    </li>
  );
};

export default LetterLink;
