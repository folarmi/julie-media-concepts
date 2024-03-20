import Image from "next/image";
import React from "react";

const imageStyle = {
  borderRadius: "24px",
  //   position: "absolute",
};

const AboutMe = () => {
  return (
    <div
      className="bg-primary px-10 md:px-40 py-24 md:flex justify-between items-center"
      id="about"
    >
      <div className="bg-primary border-8 border-secondaryTwo rounded-3xl h-[300px] w-[300px] relative">
        <Image
          src="/babe.JPG"
          alt="A picture of babe"
          width={300}
          height={50}
          style={imageStyle}
        />
      </div>

      <section className="flex flex-col mt-32 md:mt-0">
        <p className=" text-[42px] text-white font-bold">
          About <span className=" text-secondaryTwo">Me</span>
        </p>
        <p className="text-ashTwo text-base w-[350px] text-justify md:w-[466px] leading-7">
          Dedicated, creative, and driven, I strive to bring your vision to life
          through personalized solutions and unparalleled expertise, ensuring
          your satisfaction every step of the way.
        </p>
        <p className="text-ashTwo text-basew-[350px] text-justify md:w-[466px] leading-7 mt-4">
          Crafted with precision and fueled by a passion for excellence, I am
          here to transform your ideas into impactful realities, delivering
          results that exceed your expectations.
        </p>
        <div className="bg-secondaryTwo w-[123px] px-5 py-2 mt-4">
          <a href="#contactMe" className="text-base whitespace-nowrap">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export { AboutMe };
