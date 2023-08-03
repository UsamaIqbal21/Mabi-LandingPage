import React from "react";
import Images from "../Assets/Images";
function HowItWorks() {
  return (
    <section id="Solutions">
      <div className="pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div>
            <div>
              <h3
                className="text-[#0F172A] text-center text-3xl md:text-5xl font-roboto font-extrabold leading-tight"
                data-aos="fade-up"
              >
               How it works
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-8 md:gap-x-20 lg:gap-x-8 xl:gap-x-20 pt-28">
              <div className="rounded-lg border-2 border-[#9CA3AF]  bg-white shadow-lg" data-aos="fade-up"   data-aos-delay="100">
                <div className="flex flex-col items-center justify-center p-8 gap-y-4">
                  <div className="w-[64px] h-[64px]">
                    <img src={Images.work1} alt="" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] text-center text-base md:text-xl font-roboto font-normal leading-relaxed">
                      Dui consectetur gravida platea ut dis diam. Enim morbi
                      proin auctor et nisl phasellus. Ultricies pharetra, id
                      quam facilisis urna, enim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border-2 border-[#6B7280]  bg-white shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-col items-center justify-center p-8 gap-y-4">
                  <div className="w-[64px] h-[64px]">
                    <img src={Images.work2} alt="" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] text-center text-base md:text-xl font-roboto font-normal leading-relaxed">
                      Et sit duis vestibulum proin. Sollicitudin velit, etiam a
                      feugiat sagittis. Imperdiet ipsum urna ornare vitae tempus
                      sed massa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border-2 border-[#4B5563]  bg-white shadow-lg " data-aos="fade-up" data-aos-delay="300">
                <div className="flex flex-col items-center justify-center p-8 gap-y-4">
                  <div className="w-[64px] h-[64px]">
                    <img src={Images.work3} alt="" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] text-center text-base md:text-xl font-roboto font-normal leading-relaxed">
                      Elit purus magna donec mattis amet, leo varius sed. Ut
                      metus sed convallis pretium sollicitudin turpis semper
                      vulputate.
                    </p>
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

export default HowItWorks;
