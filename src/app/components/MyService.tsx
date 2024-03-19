/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ServiceCard } from ".";

const MyService = () => {
  return (
    <div className="px-10 md:px-40 py-24 bg-secondary" id="services">
      <p className=" text-[42px] text-white font-bold">
        My <span className=" text-secondaryTwo">Services</span>
      </p>

      <p className="text-ashTwo text-justify text-base w-[350px] md:w-[466px] leading-7 mt-4">
        Welcome to Julie Media Concepts, where we specialize in providing
        top-notch designs. With a focus on delivering excellence and exceeding
        expectations, we're here to meet your needs and elevate your projects to
        new heights.
      </p>

      <div className="mt-6 md:flex items-center justify-between">
        <ServiceCard
          title="Graphic Design"
          desc="Transform your ideas into visually stunning creations with our exceptional graphic design expertise, crafted to captivate and inspire your audience."
          icon="/graphicDesign.png"
        />
        <ServiceCard
          title="Digital Marketing"
          desc="Maximize your online presence with our cutting-edge digital marketing skills, strategically tailored to elevate your brand's visibility and drive measurable growth."
          icon="/digital.png"
        />
        <ServiceCard
          title="Content Management"
          desc="
          Maximize your brand's online impact with our proficient social media management expertise, ensuring engaging content and strategic outreach across all platforms."
          icon="/webDev.png"
        />
      </div>
    </div>
  );
};

export { MyService };
