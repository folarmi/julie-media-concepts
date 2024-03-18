import React from "react";
import { ServiceCard } from ".";

const MyService = () => {
  return (
    <div className="px-40 py-24 bg-secondary" id="services">
      <p className=" text-[42px] text-white font-bold">
        My <span className=" text-secondaryTwo">Services</span>
      </p>

      <p className="text-ashTwo text-base w-[466px] leading-7 mt-4">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>

      <div className="mt-6 flex items-center justify-between ">
        <ServiceCard
          title="Digital Marketing"
          desc="There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some."
          icon="/digital.png"
        />
        <ServiceCard
          title="Web Development"
          desc="There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some."
          icon="/webdev.png"
        />
        <ServiceCard
          title="Creative Graphic Design"
          desc="There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some."
          icon="/graphicDesign.png"
        />
      </div>
    </div>
  );
};

export { MyService };
