import React from "react"

import Layout from "../components/Layout"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import CallToAction from "../components/CallToAction"
import { RUSSIAN_LANG } from "../constants"
import HeroImg from "../components/HeroImg"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout lang={RUSSIAN_LANG}>
    <SEO title="English Web" />
    <HeroImg />
    <ValueProp lang={RUSSIAN_LANG} />
    <ProductBenefits lang={RUSSIAN_LANG} />
    <ProductFeatures lang={RUSSIAN_LANG} />
    <CallToAction lang={RUSSIAN_LANG} />
  </Layout>
)

export default IndexPage
