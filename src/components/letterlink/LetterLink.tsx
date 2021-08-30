import { useState } from "react";

import './letterlink.scss'

type LetterLinkProps = {
  letter: string;
};

type LinkState = "default" | "active" | "hover";

const LetterLink = ({ letter }: LetterLinkProps) => {
  const [linkState, setLinkState] = useState<LinkState>("default");

  return (
    <li
      className="letter-link"
      onClick={(e) => setLinkState("active")}
      onBlur={(e) => setLinkState("default")}
      onMouseEnter={(e) => {
        if (linkState !== "active") setLinkState("hover");
      }}
      onMouseLeave={(e) => {
        if (linkState !== "active") setLinkState("default");
      }}
    >
      <a href="/">{letter}</a>
      <div className={`letter-border letter-border-${linkState}`}></div>
    </li>
  );
};

export default LetterLink;
