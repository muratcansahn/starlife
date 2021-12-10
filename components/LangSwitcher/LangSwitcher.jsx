import { langOptions } from "./util";

import { Dropdown } from ".";
import { useRouter } from "next/router";

const LangSwitcher = ({ onChangeLanguage }) => {
  // Get current locale from next/router
  const { locale } = useRouter();

  // Get active Lang
  const langSwitcherActiveLang = langOptions
    .filter((option) => option.abbr === locale)[0]
    .abbr.toUpperCase();

  return (
    <Dropdown className="lang-switcher ">
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {langSwitcherActiveLang}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {langOptions.map((option) => (
          <Dropdown.Item
            key={option.abbr}
            onClick={onChangeLanguage(option.abbr)}
          >
            {" "}
            {option.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LangSwitcher;
