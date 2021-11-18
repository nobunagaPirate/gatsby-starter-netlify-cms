import React from "react"

import Layout from "../components/Layout"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import CallToAction from "../components/CallToAction"
import { ENGLISH_LANG } from "../constants"

const IndexPage = () => (
  <Layout lang={ENGLISH_LANG}>
    <ValueProp lang={ENGLISH_LANG} />
    <ProductBenefits lang={ENGLISH_LANG} />
    <ProductFeatures lang={ENGLISH_LANG} />
    <CallToAction lang={ENGLISH_LANG} />
  </Layout>
)

export default IndexPage
