import { CROATIAN_LANG, ENGLISH_LANG, RUSSIAN_LANG, SPANISH_LANG } from "../constants"

const CONTACT_US = "contactUs"
const VALUE_PROP_MAIN_TEXT = "valuePropMainText"
const VALUE_PROP_DESC = "valuePropDesc"
const BENEFITS_FIRST = "benefitsFirst"
const BENEFITS_FIRST_SUBTEXT = "benefitsFirstSubtext"
const BENEFITS_SECOND = "benefitsSecond"
const BENEFITS_SECOND_SUBTEXT = "benefitsSecondSubtext"
const BENEFITS_THIRD = "benefitsThird"
const BENEFITS_THIRD_SUBTEXT = "benefitsThirdSubtext"
const PRODUCT_FEATURES_TITLE = "productFeaturesTitle"
const PRODUCT_FEATURES_STATS_TITLE = "productFeaturesStatsTitle"
const PRODUCT_FEATURES_STATS_TEXT = "productFeaturesStatsText"
const PRODUCT_FEATURES_LANGUAGE_TITLE = "productFeaturesLanguageTitle"
const PRODUCT_FEATURES_LANGUAGE_TEXT = "productFeaturesLanguageText"
const PRODUCT_FEATURES_DEVS_TITLE = "productFeaturesDevsTitle"
const PRODUCT_FEATURES_DEVS_TEXT = "productFeaturesDevsText"
const CALL_TO_ACTION_TEXT = "callToActionText"
const HEADER_HOME = "headerHome"
const HEADER_BENEFITS = "headerBenefits"
const HEADER_FEATURES = "headerFeatures"


export function t(text, lang = ENGLISH_LANG) {
  const allText = {
    [ENGLISH_LANG]: {
      [CONTACT_US]: "Contact Us",
      [VALUE_PROP_MAIN_TEXT]: "Save time. Earn more.",
      [VALUE_PROP_DESC]: " Sell more with professionally developed and translated websites. Our " +
        "team offers you language and computer experts to help your business reach all corners of the world",
      [BENEFITS_FIRST]: "Measure and increase your statistics",
      [BENEFITS_FIRST_SUBTEXT]: "Our statistics page is made to help you measure your company's growth so you can set and achieve your professional goals.",
      [BENEFITS_SECOND]: "Multilingual Websites",
      [BENEFITS_SECOND_SUBTEXT]: "Language shouldn't be a barrier between you and potential customers. That's why we offer high quality" +
        " website translation services from native speakers in English, Croatian, Spanish, Russian & Polish.",
      [BENEFITS_THIRD]: "Professional Developers",
      [BENEFITS_THIRD_SUBTEXT]: "Experienced in-house developers available for your website at all times.",
      [PRODUCT_FEATURES_TITLE]: "Our Product Features",
      [PRODUCT_FEATURES_STATS_TITLE]: "Statistics.",
      [PRODUCT_FEATURES_STATS_TEXT]: "We will measure your company's growth.",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "Language.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "Native speakers, high quality content.",
      [PRODUCT_FEATURES_DEVS_TITLE]: "Developers.",
      [PRODUCT_FEATURES_DEVS_TEXT]: "We will cleanup the mess.",
      [CALL_TO_ACTION_TEXT]: "Looking for a quote?",
      [HEADER_HOME]: "Home",
      [HEADER_BENEFITS]: "Benefits",
      [HEADER_FEATURES]: "Features"
    },
    [CROATIAN_LANG]: {
      [CONTACT_US]: "Kontaktirajte nas",
      [VALUE_PROP_MAIN_TEXT]: "U??tedite vrijeme. Zaradite vi??e.",
      [VALUE_PROP_DESC]: "Razumijemo koliko je va??no imati dobru web stranicu. Zato smo okupili na??e jezi??ne i ra??unalne " +
        "stru??njake, kako bismo pomogli dosegnuti sva globalna tr??i??ta.",
      [BENEFITS_FIRST]: "Izmjerite i pobolj??ajte svoju statistiku",
      [BENEFITS_FIRST_SUBTEXT]: "Na??a je stranica statistike napravljena tako da vam pomogne izmjeriti rast tvrtke radi postavljanja i postizanja poslovnih ciljeva.",
      [BENEFITS_SECOND]: "Vi??ejezi??ne web stranice",
      [BENEFITS_SECOND_SUBTEXT]: "Jezik ne bi trebao biti prepreka izme??u vas i klijenata. Nudimo visokokvalitetne usluge prevo??enja web stranica, izvornih govornika na engleskom, hrvatskom, ??panjolskom, ruskom i poljskom jeziku.",
      [BENEFITS_THIRD]: "Profesionalni programeri",
      [BENEFITS_THIRD_SUBTEXT]: "Iskusni programeri web stranica dostupni u svakom trenutku.",
      [PRODUCT_FEATURES_TITLE]: "Odlike Nas??ih Proizvoda",
      [PRODUCT_FEATURES_STATS_TITLE]: "Statistike.",
      [PRODUCT_FEATURES_STATS_TEXT]: "Procijenit c??emo rast vas??e tvrtke.",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "Jezik.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "Izvorni govornici, iznimni prijevod",
      [PRODUCT_FEATURES_DEVS_TITLE]: "Programeri",
      [PRODUCT_FEATURES_DEVS_TEXT]: "Sve c??emo postaviti na svoje mjesto",
      [CALL_TO_ACTION_TEXT]: "Traz??ite ponudu?",
      [HEADER_HOME]: "Povratak",
      [HEADER_BENEFITS]: "Povlastice",
      [HEADER_FEATURES]: "Znac??ajke"
    },
    [SPANISH_LANG]: {
      [CONTACT_US]: "Contactenos",
      [VALUE_PROP_MAIN_TEXT]: "Ahorre tiempo. Gane m??s.",
      [VALUE_PROP_DESC]: "Entendemos que la buena comunicaci??n, mejora su negocio. Por eso " +
        "combinamos nuestros expertos en lenguajes y computadoras para ayudarte a incurrir " +
        "en cualquier mercado ",
      [BENEFITS_FIRST]: "",
      [BENEFITS_SECOND]: "",
      [BENEFITS_THIRD]: "",
      [PRODUCT_FEATURES_TITLE]: "",
      [PRODUCT_FEATURES_STATS_TITLE]: "",
      [PRODUCT_FEATURES_STATS_TEXT]: "",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "Language.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "Native speakers, high quality content.",
      [PRODUCT_FEATURES_DEVS_TITLE]: "Developers.",
      [PRODUCT_FEATURES_DEVS_TEXT]: "We will cleanup the mess.",
      [CALL_TO_ACTION_TEXT]: "",
      [HEADER_HOME]: "",
      [HEADER_BENEFITS]: "",
      [HEADER_FEATURES]: ""
    },

    [CROATIAN_LANG]: {
      [CONTACT_US]: "Kontaktirajte nas",
      [VALUE_PROP_MAIN_TEXT]: "U??tedite vrijeme. Zaradite vi??e.",
      [VALUE_PROP_DESC]: "Razumijemo koliko je va??no imati dobru web stranicu. Zato smo okupili na??e jezi??ne i ra??unalne " +
        "stru??njake, kako bismo pomogli dosegnuti sva globalna tr??i??ta.",
      [BENEFITS_FIRST]: "Izmjerite i pobolj??ajte svoju statistiku",
      [BENEFITS_FIRST_SUBTEXT]: "Na??a je stranica statistike napravljena tako da vam pomogne izmjeriti rast tvrtke radi postavljanja i postizanja poslovnih ciljeva.",
      [BENEFITS_SECOND]: "Vi??ejezi??ne web stranice",
      [BENEFITS_SECOND_SUBTEXT]: "Jezik ne bi trebao biti prepreka izme??u vas i klijenata. Nudimo visokokvalitetne usluge prevo??enja web stranica, izvornih govornika na engleskom, hrvatskom, ??panjolskom, ruskom i poljskom jeziku.",
      [BENEFITS_THIRD]: "Profesionalni programeri",
      [BENEFITS_THIRD_SUBTEXT]: "Iskusni programeri web stranica dostupni u svakom trenutku.",
      [PRODUCT_FEATURES_TITLE]: "Odlike Nas??ih Proizvoda",
      [PRODUCT_FEATURES_STATS_TITLE]: "Statistike.",
      [PRODUCT_FEATURES_STATS_TEXT]: "Procijenit c??emo rast vas??e tvrtke.",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "Jezik.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "Izvorni govornici, iznimni prijevod",
      [PRODUCT_FEATURES_DEVS_TITLE]: "Programeri",
      [PRODUCT_FEATURES_DEVS_TEXT]: "Sve c??emo postaviti na svoje mjesto",
      [CALL_TO_ACTION_TEXT]: "Traz??ite ponudu?",
      [HEADER_HOME]: "Povratak",
      [HEADER_BENEFITS]: "Povlastice",
      [HEADER_FEATURES]: "Znac??ajke"
    },

    [RUSSIAN_LANG]: {
      [CONTACT_US]: "?????????????????? ?? ????????",
      [VALUE_PROP_MAIN_TEXT]: "???????????????????? ??????????. ???????????????????????? ????????????.",
      [VALUE_PROP_DESC]: "?????????????????? ?????????????? ?? ?????????????? ?????????????????????????????? ?????????????????????????? ?? ?????????????????????????? ??????-??????????????. " +
      "???????? ?????????????? ???????????????????? ?????? ???????????????? ?? ???????????????????????? ??????????????????, ?????????????? ?????????????? ?????? ???????????????? ?????? ???????????? ????????.",
      [BENEFITS_FIRST]: "???????????????? ?? ?????????????????? ???????? ????????????????????",
      [BENEFITS_FIRST_SUBTEXT]: "???????? ???????????????????????????? ???????????????? ?????????????? ?????? ???????????????? ???????? ????????????????, ?????????? ???? ?????????? ?????????????? ?? ?????????????????? ???????? ???????????????????????????????? ????????.",
      [BENEFITS_SECOND]: "???????????????????????? ????????????",
      [BENEFITS_SECOND_SUBTEXT]: "???????? ???? ???????????? ???????? ???????????????????????? ?????????? ???????? ?? ???????????????????????????? ??????????????????. ???????????? ?????????????? ???? ???????????????????? ?????? ???????????????????????????????????? ???????????? ???????????????? ??????- ?????????????? ???? ????????????????????????, ??????????????????????, ????????????????????, ????????????????&?????????????????? ???????????????????? ??????????.",
      [BENEFITS_THIRD]: "???????????????????????????????? ????????????????????????",
      [BENEFITS_THIRD_SUBTEXT]: "?????????????? ???????????? ???????????????????????? ???????????????? ?????? ???????????? ???????????? ?? ?????????? ??????????.",
      [PRODUCT_FEATURES_TITLE]: "?????????????????????? ?????????? ??????????????????",
      [PRODUCT_FEATURES_STATS_TITLE]: "????????????????????.",
      [PRODUCT_FEATURES_STATS_TEXT]: "???? ?????????????? ???????? ???????????? ????????????????.",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "??????????.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "???????????????? ??????????, ?????????????????????????? ??????????????.",
      [PRODUCT_FEATURES_DEVS_TITLE]: "????????????????????????.",
      [PRODUCT_FEATURES_DEVS_TEXT]: "???? ???????????????? ?????????????? ?? ?????????? ??????????????.",
      [CALL_TO_ACTION_TEXT]: "?????????? ???????????????? ???????????????????????",
      [HEADER_HOME]: "??????????????",
      [HEADER_BENEFITS]: "????????????????????????",
      [HEADER_FEATURES]: "??????????????????????"
    }
  }

  return allText[lang][text]
}
