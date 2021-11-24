import React from "react"

import Layout from "../components/Layout"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import CallToAction from "../components/CallToAction"
import { ENGLISH_LANG } from "../constants"
import HeroImg from "../components/HeroImg"

const IndexPage = () => (
  <Layout lang={ENGLISH_LANG}>
    <HeroImg />
    <ValueProp lang={ENGLISH_LANG} />
    <ProductBenefits lang={ENGLISH_LANG} />
    <ProductFeatures lang={ENGLISH_LANG} />
    <CallToAction lang={ENGLISH_LANG} />
  </Layout>
)

export default IndexPage
