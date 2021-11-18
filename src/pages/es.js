import React from "react"

import Layout from "../components/Layout"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import CallToAction from "../components/CallToAction"
import { SPANISH_LANG } from "../constants"

const IndexPage = () => (
  <Layout>
    <ValueProp lang={SPANISH_LANG} />
    <ProductBenefits lang={SPANISH_LANG} />
    <ProductFeatures lang={SPANISH_LANG} />
    <CallToAction lang={SPANISH_LANG} />
  </Layout>
)

export default IndexPage
