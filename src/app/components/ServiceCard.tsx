import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  title: String;
  icon: string | StaticImport;
  desc: String;
};

const ServiceCard = ({ title, icon, desc }: ServiceCardProps) => {
  return (
    // <div className="bg-primary rounded-xl flex flex-col items-center w-[350px] h-[342px] my-8">
    // <Image
    //   alt="icon depicting service rendered"
    //   width={40}
    //   height={40}
    //   src={icon}
    //   style={{
    //     flex: 1,
    //     objectFit: "contain",
    //   }}
    // />
    //   <p className="text-white font-bold text-[26px] w-5  flex-1">{title}</p>
    // <p className="text-ashTwo text-center flex-1">{desc}</p>
    // </div>

    <div className="max-w-sm h-[300px] p-6 bg-primary rounded-lg shadow mr-6 flex flex-col items-center mb-6 md:mb-0">
      <Image
        alt="icon depicting service rendered"
        width={40}
        height={40}
        src={icon}
        style={{
          flex: 1,
          objectFit: "contain",
        }}
      />

      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center md:text-left">
          {title}
        </h5>
      </a>
      {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p> */}
      <p className="text-ashTwo text-center flex-1">{desc}</p>
    </div>
  );
};

export { ServiceCard };
