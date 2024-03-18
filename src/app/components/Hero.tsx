import Image from "next/image";
import React from "react";

export const imageStyle = {
  borderRadius: "24px",
};

const Hero = () => {
  return (
    <div className="px-40 py-24 bg-secondary flex justify-between items-center">
      <section className="flex flex-col">
        <p className="text-secondaryTwo text-base">Hello, Welcome</p>
        <p className="text-[42px] text-white font-bold">My name is Juliet</p>
        <p className="text-ashTwo text-base w-[466px] leading-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
        <div className="bg-secondaryTwo w-[123px] px-5 py-2 mt-4">
          <p className="text-base whitespace-nowrap">Contact Me</p>
        </div>
      </section>

      <Image
        src="/babe.jpg"
        alt="A picture of babe"
        width={300}
        height={300}
        style={imageStyle}
      />
    </div>
  );
};

export { Hero };
