import React, { useState } from 'react';
import ProductCards from './ProductCards';
import { product } from '../data/data';

function Product() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { cards } = product;

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2
          className="h2 mb-5 lg:mb-10 text-center font-media"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Services
        </h2>
        <p
          className="lead mb-5 lg:mb-10 text-center "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We can provide websites of your needs, such as:
        </p>

        <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
          {cards.map(({ icon, title, subtitle, delay }, index) => (
            <ProductCards
              key={index}
              icon={icon}
              title={title}
              subtitle={subtitle}
              delay={delay}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
