import { useState } from "react";
import { Link } from "react-scroll";

import "./letterlink.scss";

type LetterLinkProps = {
  letter: string;
  isDisabled?: boolean;
};

type LinkState = "default" | "active" | "hover";

const LetterLink = ({ letter, isDisabled }: LetterLinkProps) => {
  const [linkState, setLinkState] = useState<LinkState>("default");

  const handleMouseEnter = (): void => {
    if (linkState !== "active" && !isDisabled) setLinkState("hover");
  };

  const handleMouseLeave = (): void => {
    if (linkState !== "active") setLinkState("default");
  };

  const handleClick = (): void => {
    if (isDisabled) return;
    setLinkState("active");
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
      <div className={`letter-border letter-border-${linkState}`}></div>
    </li>
  );
};

export default LetterLink;
