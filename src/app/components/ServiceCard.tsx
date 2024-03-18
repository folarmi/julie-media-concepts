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
    <div className="bg-primary rounded-xl flex flex-col items-center w-[350px] h-[342px] my-8">
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
      <p className="text-white font-bold text-[26px] w-5  flex-1">{title}</p>
      <p className="text-ashTwo text-center flex-1">{desc}</p>
    </div>
  );
};

export { ServiceCard };
