import Image from "next/image";
import React from "react";

const MyPortfolio = () => {
  return (
    <div
      className="bg-primary px-40 py-24 flex flex-col items-center"
      id="portfolio"
    >
      <p className=" text-[42px] text-white font-bold">
        My <span className=" text-secondaryTwo">Portfolio</span>
      </p>
      <p className="text-ashTwo text-base w-[466px] leading-7 text-center my-8">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>

      <section className="flex items-center">
        <Image
          src="/imgOne.jpg"
          alt="work sample"
          width={540}
          height={565}
          style={{
            borderRadius: "24px",
            marginRight: "1rem",
          }}
        />

        <div className="flex items-center flex-wrap gap-y-6 gap-x-6">
          <Image
            src="/imgTwo.jpg"
            alt="work sample"
            width={256}
            height={268}
            style={{
              borderRadius: "24px",
            }}
          />
          <Image
            src="/imgThree.jpg"
            alt="work sample"
            width={256}
            height={268}
            style={{
              borderRadius: "24px",
            }}
          />
          <Image
            src="/imgFour.jpg"
            alt="work sample"
            width={256}
            height={268}
            style={{
              borderRadius: "24px",
            }}
          />
          <Image
            src="/imgFive.jpg"
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
