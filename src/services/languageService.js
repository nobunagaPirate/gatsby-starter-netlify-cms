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
      [VALUE_PROP_MAIN_TEXT]: "Uštedite vrijeme. Zaradite više.",
      [VALUE_PROP_DESC]: "Razumijemo koliko je važno imati dobru web stranicu. Zato smo okupili naše jezične i računalne " +
        "stručnjake, kako bismo pomogli dosegnuti sva globalna tržišta.",
      [BENEFITS_FIRST]: "Izmjerite i poboljšajte svoju statistiku",
      [BENEFITS_FIRST_SUBTEXT]: "Naša je stranica statistike napravljena tako da vam pomogne izmjeriti rast tvrtke radi postavljanja i postizanja poslovnih ciljeva.",
      [BENEFITS_SECOND]: "Višejezične web stranice",
      [BENEFITS_SECOND_SUBTEXT]: "Jezik ne bi trebao biti prepreka između vas i klijenata. Nudimo visokokvalitetne usluge prevođenja web stranica, izvornih govornika na engleskom, hrvatskom, španjolskom, ruskom i poljskom jeziku.",
      [BENEFITS_THIRD]: "Profesionalni programeri",
      [BENEFITS_THIRD_SUBTEXT]: "Iskusni programeri web stranica dostupni u svakom trenutku.",
      [PRODUCT_FEATURES_TITLE]: "Odlike Naših Proizvoda",
      [PRODUCT_FEATURES_STATS_TITLE]: "Statistike.",
      [PRODUCT_FEATURES_STATS_TEXT]: "Procijenit ćemo rast vaše tvrtke.",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "Jezik.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "Izvorni govornici, iznimni prijevod",
      [PRODUCT_FEATURES_DEVS_TITLE]: "Programeri",
      [PRODUCT_FEATURES_DEVS_TEXT]: "Sve ćemo postaviti na svoje mjesto",
      [CALL_TO_ACTION_TEXT]: "Tražite ponudu?",
      [HEADER_HOME]: "Povratak",
      [HEADER_BENEFITS]: "Povlastice",
      [HEADER_FEATURES]: "Značajke"
    },
    [SPANISH_LANG]: {
      [CONTACT_US]: "Contactenos",
      [VALUE_PROP_MAIN_TEXT]: "Ahorre tiempo. Gane más.",
      [VALUE_PROP_DESC]: "Entendemos que la buena comunicación, mejora su negocio. Por eso " +
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
      [VALUE_PROP_MAIN_TEXT]: "Uštedite vrijeme. Zaradite više.",
      [VALUE_PROP_DESC]: "Razumijemo koliko je važno imati dobru web stranicu. Zato smo okupili naše jezične i računalne " +
        "stručnjake, kako bismo pomogli dosegnuti sva globalna tržišta.",
      [BENEFITS_FIRST]: "Izmjerite i poboljšajte svoju statistiku",
      [BENEFITS_FIRST_SUBTEXT]: "Naša je stranica statistike napravljena tako da vam pomogne izmjeriti rast tvrtke radi postavljanja i postizanja poslovnih ciljeva.",
      [BENEFITS_SECOND]: "Višejezične web stranice",
      [BENEFITS_SECOND_SUBTEXT]: "Jezik ne bi trebao biti prepreka između vas i klijenata. Nudimo visokokvalitetne usluge prevođenja web stranica, izvornih govornika na engleskom, hrvatskom, španjolskom, ruskom i poljskom jeziku.",
      [BENEFITS_THIRD]: "Profesionalni programeri",
      [BENEFITS_THIRD_SUBTEXT]: "Iskusni programeri web stranica dostupni u svakom trenutku.",
      [PRODUCT_FEATURES_TITLE]: "Odlike Naših Proizvoda",
      [PRODUCT_FEATURES_STATS_TITLE]: "Statistike.",
      [PRODUCT_FEATURES_STATS_TEXT]: "Procijenit ćemo rast vaše tvrtke.",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "Jezik.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "Izvorni govornici, iznimni prijevod",
      [PRODUCT_FEATURES_DEVS_TITLE]: "Programeri",
      [PRODUCT_FEATURES_DEVS_TEXT]: "Sve ćemo postaviti na svoje mjesto",
      [CALL_TO_ACTION_TEXT]: "Tražite ponudu?",
      [HEADER_HOME]: "Povratak",
      [HEADER_BENEFITS]: "Povlastice",
      [HEADER_FEATURES]: "Značajke"
    },

    [RUSSIAN_LANG]: {
      [CONTACT_US]: "Свяжитесь с нами",
      [VALUE_PROP_MAIN_TEXT]: "Сэкономьте время. Заработайте больше.",
      [VALUE_PROP_DESC]: "Увеличьте продажи с помощью профессионально разработанных и переведённых веб-сайтов. " +
      "Наша команда предлагает вам языковых и компьютерных экспертов, которые помогут вам охватить все уголки мира.",
      [BENEFITS_FIRST]: "Измерьте и увеличьте свою статистику",
      [BENEFITS_FIRST_SUBTEXT]: "Наша статистическая страница поможет вам измерить рост компании, чтобы вы могли ставить и достигать свои профессиональные цели.",
      [BENEFITS_SECOND]: "Многоязычные сайты",
      [BENEFITS_SECOND_SUBTEXT]: "Язык не должен быть препятствием между вами и потенциальными клиентами. Именно поэтому мы предлагаем вам высококачественные услуги перевода веб- сайтов на Английский, Хорватский, Испанский, Русский&Польский носителями языка.",
      [BENEFITS_THIRD]: "Профессиональные разработчики",
      [BENEFITS_THIRD_SUBTEXT]: "Опытные инхаус разработчики доступны для вашего сайта в любое время.",
      [PRODUCT_FEATURES_TITLE]: "Особенности наших продуктов",
      [PRODUCT_FEATURES_STATS_TITLE]: "Статистика.",
      [PRODUCT_FEATURES_STATS_TEXT]: "Мы измерим рост вашей компании.",
      [PRODUCT_FEATURES_LANGUAGE_TITLE]: "Языки.",
      [PRODUCT_FEATURES_LANGUAGE_TEXT]: "Носители языка, качественный контент.",
      [PRODUCT_FEATURES_DEVS_TITLE]: "Разработчики.",
      [PRODUCT_FEATURES_DEVS_TEXT]: "Мы наведём порядок в вашем бизнесе.",
      [CALL_TO_ACTION_TEXT]: "Ищете выгодное предложение?",
      [HEADER_HOME]: "Главная",
      [HEADER_BENEFITS]: "Преимущества",
      [HEADER_FEATURES]: "Особенности"
    }
  }

  return allText[lang][text]
}
