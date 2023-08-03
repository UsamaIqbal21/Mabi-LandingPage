import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from "./Assets/Images/heroBg.png";
import Navbar from "./Components/Navbar";
import Images from "./Assets/Images";
import OurTopPartners from "./Components/OurTopPartners";
import HowItWorks from "./Components/HowItWorks";
import TurpisRisusFacilisi from "./Components/TurpisRisusFacilisi";
import SagittisSapienViverra from "./Components/SagittisSapienViverra";
import NonCommodoNec from "./Components/NonCommodoNec";
import LaunchYourAppToday from "./Components/LaunchYourAppToday";
import Footer from "./Components/Footer";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <section id="home"
      className="bg-cover bg-center min-h-screen md:min-h-[50vh] lg:min-h-screen "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Navbar />
      <div className="py-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="lg:px-4 xl:px-12 2xl:pl-28">
            <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-7">
              <div className="flex flex-col items-center justify-center md:items-start space-y-1 md:w-[634px]">
                <div>
                  <h3
                    className="text-white text-center text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-roboto font-bold leading-tight"
                    data-aos="fade-right"
                  >
                    Launch Your App
                  </h3>
                </div>
                <div>
                  <h4
                    className="text-[#CBD5E1] text-center text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-roboto font-bold leading-tight"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    Grow Your Business
                  </h4>
                </div>
                <div className="pt-5">
                  <p
                    className="text-white text-center md:text-start text-lg lg:text-2xl font-roboto font-normal leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
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
              <div className="md:w-[688px]" data-aos="fade-left">
                <img src={Images.hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <OurTopPartners/>
    <HowItWorks/>
    <TurpisRisusFacilisi/>
    <SagittisSapienViverra/>
    <NonCommodoNec/>
    <LaunchYourAppToday/>
    <Footer/>
    </>
  );
}

export default App;
