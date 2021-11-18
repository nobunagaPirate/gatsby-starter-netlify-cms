import Button from "./Button"
import React from "react"
import { t } from "../services/languageService"

export default function ContactButton({ lang }) {
  return <>
    <Button label={t("contactUs", lang)} />
  </>
}
