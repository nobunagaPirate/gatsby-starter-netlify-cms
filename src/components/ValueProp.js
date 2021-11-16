import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>Save time. Earn more.</h1>
          <p className="main-subtitle">
            We understand the impact that good communication has on your business.
            That's why we've brought together our language and computer experts
            to help your business reach all markets.
          </p>
          <Button label="Contact Us" />
        </div>
        <div className="main-photo" />
      </div>
    </section>
  )
};

export default ValueProp;
