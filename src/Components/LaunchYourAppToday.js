import React from "react";
import bg from "../Assets/Images/bg.png";
import Images from "../Assets/Images";
function LaunchYourAppToday() {
  return (
    <section id="Pricing"
      className="bg-cover bg-[#F1F5F9] bg-center min-h-screen md:min-h-[50vh] lg:min-h-screen  "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="pt-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-4 lg:gap-x-8 xl:gap-x-20">
              <div className="md:w-[600px]"   data-aos="fade-up">
                <img src={Images.pic4} alt="" />
              </div>
              <div className="flex flex-col items-center md:items-start justify-center gap-y-6 md:w-[600px]">
                <div>
                  <h3 className="text-white text-center md:text-start text-3xl font-roboto font-bold leading-tight"    data-aos="fade-up" data-aos-delay="100">
                    Launch Your App Today
                  </h3>
                </div>
                <div>
                  <p className="text-white text-center md:text-start text-base font-roboto font-normal leading-relaxed"    data-aos="fade-up" data-aos-delay="200">
                    Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend
                    proin massa tincidunt viverra lectus pulvinar.
                  </p>
                </div>
                <div className="pt-5">
                  <div
                    className="border-white rounded-full border-2  py-[4px] px-[15px] cursor-pointer "
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h3 className="text-white font-roboto text-2xl font-medium leading-relaxed pb-1">
                      Free Launch
                    </h3>
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

export default LaunchYourAppToday;
