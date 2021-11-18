import React from "react"
import { t } from "../services/languageService"
import ContactButton from "./ContactButton"

const CallToAction = ({ lang }) => {

  return (
    <section id="contact" className="cta">
      {t("contactUs", lang)}
      <h1>{t("callToActionText", lang)}</h1>
      <ContactButton lang={lang} />
    </section>
  )
}

export default CallToAction
