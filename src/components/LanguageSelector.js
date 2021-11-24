import React, { useState } from "react"
import { CROATIAN_LANG, ENGLISH_LANG, SPANISH_LANG } from "../constants"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LanguageSelector({ currentLang }) {
  const [showMenu, setShowMenu] = useState(false)

  const languageFlags = {
    [ENGLISH_LANG]: "EN",
    [CROATIAN_LANG]: "HR",
    [SPANISH_LANG]: "ES"
  }

  if (!showMenu) {

    return <div className="lang-menu">
      <FontAwesomeIcon icon="globe-americas" />
      Languaje
      <span className="menu-arrow-down">▼</span>
    </div>
  } else
    return <div>
      <ShowFlag icon={languageFlags[ENGLISH_LANG]} />
      <ShowFlag icon={languageFlags[CROATIAN_LANG]} />
      <ShowFlag icon={languageFlags[SPANISH_LANG]} />
    </div>
}


function ShowFlag({ icon }) {
  return <div className="flag-img">{icon}</div>
}
