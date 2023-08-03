import React from "react";
import Images from "../Assets/Images";
function NonCommodoNec() {
  return (
    <section className="bg-[#F1F5F9] ">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="lg:px-12 2xl:pl-24">
            <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-0 lg:gap-x-12 2xl:gap-x-36 items-center justify-center">
              <div className="flex flex-col items-center md:items-start justify-center gap-y-5 md:w-[611px] lg:pt-8 2xl:pt-0">
                <div>
                  <h3
                    className="text-3xl text-[#0F172A] text-center md:text-start md:text-4xl  xl:text-5xl font-roboto font-bold leading-tight"
                    data-aos="fade-right"
                  >
                    Non commodo nec
                  </h3>
                </div>
                <div>
                  <p
                    className="text-[#0F172A] text-center md:text-start text-base md:text-lg font-roboto font-normal leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum
                    dui. Curabitur in commodo pretium lacinia feugiat. A
                    ultricies quis commodo, nisl, vestibulum, feugiat dolor.
                    Tincidunt orci consequat, pellentesque leo dui nunc ac,
                    amet. A proin pulvinar nec nibh bibendum. Nec mi mattis
                    vulputate dictum platea pharetra, id id.
                  </p>
                </div>
              </div>
              <div className="md:w-[553px] " data-aos="fade-left">
                <img src={Images.pic3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NonCommodoNec;
