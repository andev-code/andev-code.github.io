import { useContext } from "react";

import LanguageContext from "/src/context/LanguageContext";
import { HeaderMenuListItem } from "./HeaderMenuListItem";
import { SocialMedias } from "../SocialMedias";
import { TranslateButton } from "./TranslateButton";

export default function HeaderMenu({ show }) {
  const { text } = useContext(LanguageContext);
  const headerText = {...text.header}

  return (
    <nav
      className={`w-full py-5 bg-gradient-to-b from-gray-950 to-blue-950 md:hidden ${
        show ? "top-0 left-0 relative" : "absolute left-0 top-[-500px]"
      } transition-all`}
    >
      <ul className="w-full h-full">
        <HeaderMenuListItem to="#home">{text.header.link1}</HeaderMenuListItem>
        <HeaderMenuListItem to="#about">{text.header.link2}</HeaderMenuListItem>
        <HeaderMenuListItem to="#skills">
          {text.header.link3}
        </HeaderMenuListItem>
        <HeaderMenuListItem to="#resume">
          {text.header.link4}
        </HeaderMenuListItem>
        <HeaderMenuListItem to="#services">
          {text.header.link5}
        </HeaderMenuListItem>
        <HeaderMenuListItem to="#contact">
          {text.header.link6}
        </HeaderMenuListItem>
      </ul>

      <TranslateButton />
      <SocialMedias />
    </nav>
  );
}