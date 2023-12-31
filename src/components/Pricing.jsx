import React, { useState } from 'react';
import PricingCards from './PricingCards';
import { pricing } from '../data/data';

function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { title, cards } = pricing;

  return (
    <section className="section" id="pricing">
      <div className="container mx-auto">
        <h2
          className="h2 mb-10 lg:mb-10 text-center font-media"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>
        <p
          className="lead mb-5 lg:mb-10 text-center "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Select the category needed starting from Personal, Grow, Professional.
          the prices listed may vary according to the features made
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
          {cards.map(
            ({ icon, title, services, price, userAmount, delay }, index) => (
              <PricingCards
                key={index}
                icon={icon}
                title={title}
                services={services}
                price={price}
                userAmount={userAmount}
                delay={delay}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
