import React from 'react';
import { overview } from '../data/data';

function Brands() {
  const { brands } = overview;

  return (
    <section className="py-9">
      <h2
        className="h2 mb-10 lg:mb-20 text-center font-media"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Trusted By
      </h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
        {brands.map(({ image, delay }, index) => (
          <div key={index} data-aos-delay={delay} data-aos="fade-up">
            <img src={image} alt="Brands Sponsor" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
