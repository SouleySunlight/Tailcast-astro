import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import alexise from "../assets/images/alexise.webp"
import testimonial2 from "../assets/images/yannism.png";
import testimonial3 from "../assets/images/nathanb.jpg";

const testimonialsData = [
  {
    customerName: "Alexis Ego",
    customerTitle: "Theodo's Solution architect",
    content:
      "Astonishing proof-of-concept for directus. I couldn't expect better from a financially and time free engineer",
    image: alexise,
  },
  {
    customerName: "Yannis Marecaux",
    customerTitle: "Theodo's Sales",
    content:
      "I really enjoyed Souleyman as a developper and as a person. He always know how to manage his time and is eager to help and learn new things",
    image: testimonial2,
  },
  {
    customerName: "Nathan Boulanger",
    customerTitle: "Software Engineer",
    content:
      "It's always super cool to work on a project previously POCed by Souleyman. He makes things so much easier",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          People like you love Souleyman
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
