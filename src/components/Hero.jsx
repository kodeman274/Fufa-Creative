import React from 'react';
// import { HiOutlineChevronDown } from 'react-icons/hi';
import { hero } from '../data/data';

function Hero() {
  const { title, subtitle, btnText, compText, image } = hero;

  return (
    <section className="min-h-[900px] py-12">
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-1 ">
            <h1
              className="title mb-2 lg:mb-5 font-media"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {title}
            </h1>
            <p
              className="lead mb-5 lg:mb-10"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <div
              className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 btn-media"
                onClick={() =>
                  (window.location.href =
                    'https://api.whatsapp.com/send?phone=6285718010129')
                }
              >
                {btnText}
                {/* <HiOutlineChevronDown /> */}
              </button>
              <span className="text-light lg:lead lg:mb-0">{compText}</span>
            </div>
          </div>
          <div
            className="flex-none ml-12 "
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img src={image} alt="Hero Banner" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
