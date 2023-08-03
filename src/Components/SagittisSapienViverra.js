import React from "react";
import Images from "../Assets/Images";
function SagittisSapienViverra() {
  return (
    <section className="bg-[#F1F5F9]">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col md:flex-row-reverse gap-y-8 md:gap-y-0 md:gap-x-2 2xl:gap-x-36 items-center justify-center  ">
              <div className="flex flex-col items-center md:items-start justify-center lg:pr-20 gap-y-8 lg:w-[831px]">
                <div>
                  <h3
                    className="text-[ #0F172A] text-center md:text-start text-3xl md:text-4xl xl:text-5xl  font-roboto font-bold leading-tight"
                    data-aos="fade-up"
                  >
                    Sagittis sapien viverra
                  </h3>
                </div>
                <div>
                  <p
                    className="text-[#0F172A] text-center md:text-start text-base font-roboto font-normal leading-relaxed  "
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse
                    dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar
                    vulputate facilisis vel eros. Auctor metus sed auctor tortor
                    sed nulla. Urna massa eu vel blandit sed nisi gravida.
                    Imperdiet parturient at purus bibendum risus auctor lacus
                    tristique arcu. Arcu hac cursus faucibus id. Eu integer
                    parturient risus magna eget massa. Risus molestie tempor,
                    faucibus non ultricies. Nam vel mattis quis dui, condimentum
                    mi volutpat ut aliquam.
                  </p>
                </div>
              </div>
              <div
                className="lg:w-[368px] "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={Images.pic2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SagittisSapienViverra;
