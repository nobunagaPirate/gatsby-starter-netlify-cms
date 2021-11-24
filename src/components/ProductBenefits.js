import React from "react"
import { t } from "../services/languageService"

const ProductBenefits = ({ lang }) => {

  return (
    <section id="benefits" className="product-benefits">
      <div className="product-benefits-group">
        <div className="product-benefit-1-tagline">
          <div className="product-benefit-headline">
            {t("benefitsFirst", lang)}
          </div>

          <div className="product-benefit-subtext">
            {t("benefitsFirstSubtext", lang)}
          </div>
        </div>
        <div className="product-benefit-1-image"></div>
        <div className="product-benefit-2-tagline">
          <div className="product-benefit-headline">
            {t("benefitsSecond", lang)}
          </div>

          <div className="product-benefit-subtext">
            {t("benefitsSecondSubtext", lang)}
          </div>
        </div>
        <div className="product-benefit-2-image"></div>
        <div className="product-benefit-3-tagline">
          <div className="product-benefit-headline">
            {t("benefitsThird", lang)}
          </div>

          <div className="product-benefit-subtext">
            {t("benefitsThirdSubtext", lang)}
          </div>
        </div>
        <div className="product-benefit-3-image"></div>
      </div>
    </section>
  )
}

export default ProductBenefits
