import { useState } from "react";

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

  const handleBlur = (): void => {
    setLinkState("default");
  };

  return (
    <li
      className={`letter-link ${isDisabled && "disabled"}`}
      onClick={handleClick}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="/">{letter}</a>
      <div className={`letter-border letter-border-${linkState}`}></div>
    </li>
  );
};

export default LetterLink;
