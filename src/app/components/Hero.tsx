import Image from "next/image";
import React from "react";

export const imageStyle = {
  borderRadius: "24px",
};

const Hero = () => {
  return (
    <div className="px-10 md:px-40 py-24 bg-secondary md:flex justify-between items-center">
      <section className="flex flex-col">
        <p className="text-secondaryTwo text-base">Hello, Welcome</p>
        <p className="text-[42px] text-white font-bold">My name is Juliet</p>
        <p className="text-ashTwo text-base w-80 text-justify md:w-[466px] leading-7">
          As the driving force behind our mission, I bring a passion for
          innovation, a commitment to excellence, and a dedication to exceeding
          your expectations with every project.
        </p>
        <div className="bg-secondaryTwo w-[123px] px-5 py-2 mt-4 mb-6 md:mb-0">
          <a href="#contactMe" className="text-base whitespace-nowrap">
            Contact Me
          </a>
        </div>
      </section>

      <Image
        src="/babe.JPG"
        alt="A picture of babe"
        width={300}
        height={300}
        style={imageStyle}
      />
    </div>
  );
};

export { Hero };
