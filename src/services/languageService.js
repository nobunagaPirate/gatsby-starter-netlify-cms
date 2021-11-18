import { CROATIAN_LANG, ENGLISH_LANG, SPANISH_LANG } from "../constants"

export function t(text, lang = ENGLISH_LANG) {
  const allText = {
    [ENGLISH_LANG]: {
      "contactUs": "Contact Us",
      "valuePropMainText": "Save time. Earn more.",
      "valuePropDesc": `We understand the impact that good communication has on your business.
That's why we've brought together our language and computer experts
to help your business reach all markets.`,
      "benefitsFirst": "Measure and increase your statistics",
      "benefitsSecond": "High quality websites for your customers available in English, Croatian and Spanish.",
      "benefitsThird": "In house professional developers for your website at all times",
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
      "valuePropDesc": `Razumijemo koliki utjecaj dobra komunikacija ima na vaše 
poslovno okruženje. Zato smo okupili naše jezične i računalne 
stručnjake, kako bi pomogli poslovanju na svim tržištima.`,
      "benefitsFirst": "Ispitajte i povećajte svoju statistiku",
      "benefitsSecond": "Izrada vrhunskih web stranica za vaše korisnike dostupne na engleskom, hrvatskom i španjolskom jeziku.",
      "benefitsThird": "Profesionalni programeri vaših web stranica dostupni u svakom trenutku",
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
