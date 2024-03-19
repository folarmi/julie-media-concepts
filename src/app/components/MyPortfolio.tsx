/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const MyPortfolio = () => {
  return (
    <div
      className="bg-primary px-10 md:px-40 py-24 flex flex-col items-center"
      id="portfolio"
    >
      <p className="text-[42px] text-white font-bold">
        My <span className=" text-secondaryTwo">Portfolio</span>
      </p>
      <p className="text-ashTwo text-base w-[350px] md:w-[466px] leading-7 text-justify my-8">
        Explore a world of creativity and innovation through my portfolio. With
        a passion for design, I've curated a collection of my finest work to
        showcase my skills and capabilities.
      </p>

      <section className="md:flex items-center">
        <Image
          src="/imageOne.png"
          alt="work sample"
          width={540}
          height={565}
          style={{
            borderRadius: "24px",
            marginRight: "1rem",
          }}
        />

        <div className="flex items-center flex-wrap gap-y-6 gap-x-6 mt-6 mb:mt-0">
          <Image
            src="/imageTwo.jpg"
            alt="work sample"
            width={256}
            height={268}
            style={{
              borderRadius: "24px",
            }}
          />
          <Image
            src="/imageThree.jpg"
            alt="work sample"
            width={256}
            height={268}
            style={{
              borderRadius: "24px",
            }}
          />
          <Image
            src="/imageFour.jpg"
            alt="work sample"
            width={256}
            height={268}
            style={{
              borderRadius: "24px",
            }}
          />
          <Image
            src="/imageFive.jpg"
            alt="work sample"
            width={256}
            height={268}
            style={{
              borderRadius: "24px",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export { MyPortfolio };
