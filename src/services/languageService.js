import { CROATIAN_LANG, ENGLISH_LANG, SPANISH_LANG } from "../constants"

export function t(text, lang = ENGLISH_LANG) {
  const allText = {
    [ENGLISH_LANG]: {
      "contactUs": "Contact Us",
      "valuePropMainText": "Save time. Earn more.",
      "valuePropDesc": " Sell more with professionally developed and translated websites. Our " +
        "team offers you language and computer experts to help your business reach all corners of the world",
      "benefitsFirst": "Measure and increase your statistics",
      "benefitsFirstSubtext": "Our statistics page is made to help you measure your company's growth so you can set and achieve your professional goals.",
      "benefitsSecond": "Multilingual Websites",
      "benefitsSecondSubtext": "Language shouldn't be a barrier between you and potential customers. That's why we offer high quality" +
        " website translation services from native speakers in English, Croatian, Spanish, Russian & Polish.",
      "benefitsThird": "Professional Developers",
      "benefitsThirdSubtext": "Experienced in-house developers available for your website at all times.",
      "productFeaturesTitle": "Our Product Features",
      "productFeaturesStatsTitle": "Statistics.",
      "productFeaturesStatsText": "We will measure your company's growth.",
      "productFeaturesLanguageTitle": "Language.",
      "productFeaturesLanguageText": "Native speakers, high quality content.",
      "productFeaturesDevsTitle": "Developers.",
      "productFeaturesDevsText": "We will cleanup the mess.",
      "callToActionText": "Looking for a quote?",
      "headerHome": "Home",
      "headerBenefits": "Benefits",
      "headerFeatures": "Features"
    },
    [CROATIAN_LANG]: {
      "contactUs": "Kontaktirajte nas",
      "valuePropMainText": "Uštedite vrijeme. Zaradite više.",
      "valuePropDesc": "Razumijemo koliko je važno imati dobru web stranicu. Zato smo okupili naše jezične i računalne " +
        "stručnjake, kako bismo pomogli dosegnuti sva globalna tržišta.",
      "benefitsFirst": "Izmjerite i poboljšajte svoju statistiku",
      "benefitsFirstSubtext": "Naša je stranica statistike napravljena tako da vam pomogne izmjeriti rast tvrtke radi postavljanja i postizanja poslovnih ciljeva.",
      "benefitsSecond": "Višejezične web stranice",
      "benefitsSecondSubtext": "Jezik ne bi trebao biti prepreka između vas i klijenata. Nudimo visokokvalitetne usluge prevođenja web stranica, izvornih govornika na engleskom, hrvatskom, španjolskom, ruskom i poljskom jeziku.",
      "benefitsThird": "Profesionalni programeri",
      "benefitsThirdSubtext": "Iskusni programeri web stranica dostupni u svakom trenutku.",
      "productFeaturesTitle": "Odlike Naših Proizvoda",
      "productFeaturesStatsTitle": "Statistike.",
      "productFeaturesStatsText": "Procijenit ćemo rast vaše tvrtke.",
      "productFeaturesLanguageTitle": "Jezik.",
      "productFeaturesLanguageText": "Izvorni govornici, iznimni prijevod",
      "productFeaturesDevsTitle": "Programeri",
      "productFeaturesDevsText": "Sve ćemo postaviti na svoje mjesto",
      "callToActionText": "Tražite ponudu?",
      "headerHome": "Povratak",
      "headerBenefits": "Povlastice",
      "headerFeatures": "Značajke"
    },
    [SPANISH_LANG]: {
      "contactUs": "Contactenos",
      "valuePropMainText": "Ahorre tiempo. Gane más.",
      "valuePropDesc": "Entendemos que la buena comunicación, mejora su negocio. Por eso " +
        "combinamos nuestros expertos en lenguajes y computadoras para ayudarte a incurrir " +
        "en cualquier mercado ",
      "benefitsFirst": "",
      "benefitsSecond": "",
      "benefitsThird": "",
      "productFeaturesTitle": "",
      "productFeaturesStatsTitle": "",
      "productFeaturesStatsText": "",
      "productFeaturesLanguageTitle": "Language.",
      "productFeaturesLanguageText": "Native speakers, high quality content.",
      "productFeaturesDevsTitle": "Developers.",
      "productFeaturesDevsText": "We will cleanup the mess.",
      "callToActionText": "",
      "headerHome": "",
      "headerBenefits": "",
      "headerFeatures": ""
    }
  }

  return allText[lang][text]
}
