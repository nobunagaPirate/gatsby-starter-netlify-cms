import React from "react"

import Layout from "../components/Layout"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import CallToAction from "../components/CallToAction"
import { CROATIAN_LANG } from "../constants"

const IndexPage = () => (
  <Layout>
    <ValueProp lang={CROATIAN_LANG} />
    <ProductBenefits lang={CROATIAN_LANG} />
    <ProductFeatures lang={CROATIAN_LANG} />
    <CallToAction lang={CROATIAN_LANG} />
  </Layout>
)

export default IndexPage
