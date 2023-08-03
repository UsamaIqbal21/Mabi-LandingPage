import React from "react";
import Images from "../Assets/Images";
function OurTopPartners() {
  return (
    <section id="Resources">
      <div className="pt-16 pb-28">
        <div className="container mx-auto px-4">
          <div>
            <h3
              className="text-[#0F172A] text-center text-3xl md:text-5xl font-roboto font-extrabold leading-tight"
              data-aos="fade-up"
            >
              Our Top Partners
            </h3>
          </div>
          <div className="flex items-center justify-center gap-x-4 lg:gap-x-7 xl:gap-x-16 2xl:gap-x-32 pt-16">
            <div
              className="w-[57px] h-[16px] md:w-[138px] md:h-[39px]"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img src={Images.partner1} alt="" />
            </div>
            <div
              className="w-[48px] h-[13px] md:w-[116px] md:h-[32px]"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img src={Images.partner2} alt="" />
            </div>
            <div
              className="w-[51px] h-[14px] md:w-[124px] md:h-[35px]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img src={Images.partner3} alt="" />
            </div>
            <div
              className="w-[60px] h-[19px] md:w-[145px] md:h-[46px]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src={Images.partner4} alt="" />
            </div>
            <div
              className="w-[57px] h-[14px] md:w-[138px] md:h-[32px]"
              data-aos="fade-right"
            >
              <img src={Images.partner5} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-4 lg:gap-x-7 xl:gap-x-16 2xl:gap-x-28 pt-6 2xl:pt-12">
            <div
              className="w-[56px] h-[14px] md:w-[138px] md:h-[36px]"
              data-aos="fade-left"
            >
              <img src={Images.partner6} alt="" />
            </div>
            <div
              className="w-[33px] h-[20px] md:w-[82px] md:h-[51px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src={Images.partner7} alt="" />
            </div>
            <div
              className="w-[40px] h-[16px] md:w-[99px] md:h-[40px]"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img src={Images.partner8} alt="" />
            </div>
            <div
              className="w-[28px] h-[17px] md:w-[70px] md:h-[44px]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img src={Images.partner9} alt="" />
            </div>
            <div
              className="w-[44px] h-[11px] md:w-[110px] md:h-[29px]"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img src={Images.partner10} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTopPartners;
