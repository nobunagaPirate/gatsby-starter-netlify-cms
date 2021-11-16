import React from "react"

import Layout from "../components/Layout"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import CallToAction from "../components/CallToAction"

const IndexPage = () => (
  <Layout>
    <ValueProp />
    <ProductBenefits />
    <ProductFeatures />
    <CallToAction />
  </Layout>
);

export default IndexPage;
