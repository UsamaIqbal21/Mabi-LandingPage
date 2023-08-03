import React from "react";
import Images from "../Assets/Images";
function Footer() {
  return (
    <section className="bg-[#475569]">
      <div className="pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className=" lg:px-12 2xl:px-16">
            <div
              className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-y-8 md:gap-y-0
             md:gap-x-6 lg:gap-x-12 xl:gap-x-20 2xl:gap-x-28 border-[#334155] border-b-2 pb-12 lg:pl-4 xl:pl-16 2xl:pl-20 "
            >
              <div data-aos="fade-up">
                <a href="#">
                  <h3 className="text-white text-start text-3xl lg:texl-4xl font-roboto font-extrabold leading-tight ">
                    mabi
                  </h3>
                </a>
              </div>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div data-aos="fade-up" data-aos-delay="50">
                  <h4 className="text-white text-base md:text-start font-roboto font-medium leading-tight">
                    Product
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-[#E2E8F0]  text-base md:text-start  font-roboto font-medium leading-tight">
                    Pricing
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <h4 className="text-[#E2E8F0]  text-base md:text-start  font-roboto font-medium leading-tight">
                    Overview
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-[#E2E8F0]  text-base md:text-start  font-roboto font-medium leading-tight">
                    Browse
                  </h4>
                </div>
                <div
                  className="flex items-center justify-center gap-x-2"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Accessibility
                  </h4>
                  <img
                    src={Images.Badge}
                    alt=""
                    className="w-[37px] h-[17px] mt-1"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div data-aos="fade-up">
                  <h4 className="text-white text-base font-roboto font-medium leading-tight">
                    Solutions
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="50">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Brainstorming
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Ideation
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Wireframing
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Research
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div data-aos="fade-up">
                  <h4 className="text-white text-base font-roboto font-medium leading-tight">
                    Resources
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="50">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Help Center
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Blog
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Tutorials
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    FAQs
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div data-aos="fade-up">
                  <h4 className="text-white text-base font-roboto font-medium leading-tight">
                    Support
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="50">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Contact Us{" "}
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Developers
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Documentation
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Integrations
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-y-3">
                <div data-aos="fade-up">
                  <h4 className="text-white text-base font-roboto font-medium leading-tight">
                    Company
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="50">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    About{" "}
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Press
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Events
                  </h4>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                    Request Demo
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-6 gap-y-4 md:gap-y-0 lg:px-8 xl:px-12 2xl:px-16">
              <div data-aos="fade-right">
                <h4 className="text-[#E2E8F0] font-roboto text-base font-normal leading-relaxed">
                  @ 2023 Mabi. All rights reserved.
                </h4>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center pt-3 md:pt-0 md:gap-x-2">
                <div className="flex items-center justify-center gap-x-8 md:gap-x-4">
                  <div data-aos="fade-left">
                    <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                      Terms
                    </h4>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="50">
                    <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                      Privacy
                    </h4>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="100">
                    <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight">
                      Contact
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-8 md:gap-x-4 pt-3 md:pt-0">
                  <div
                    className="flex items-center justify-center gap-x-2"
                    data-aos="fade-left" data-aos-delay="150"
                  >
                    <img src={Images.world} alt="" width={24} height={24} />
                    <h4 className="text-[#E2E8F0] text-base font-roboto font-medium leading-tight">
                      EN
                    </h4>
                  </div>
                  <div
                    className="flex items-center justify-center gap-x-2"
                    data-aos="fade-left" data-aos-delay="200"
                  >
                    <img src={Images.euro} alt="" width={24} height={24} />
                    <h4 className="text-[#E2E8F0] text-base font-roboto font-medium leading-tight">
                      EUR
                    </h4>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="250">
                    <img src={Images.link} alt="" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
