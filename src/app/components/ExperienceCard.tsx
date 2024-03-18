import React from "react";

type ExperienceCardProps = {
  date: String;
  role: String;
  tool: String;
  desc: String;
};

const ExperienceCard = ({ date, role, tool, desc }: ExperienceCardProps) => {
  return (
    <div className="bg-primary text-white w-96 p-6 rounded-xl flex flex-col gap-y-4 mr-6">
      <p className="text-xl text-offWhite">{date}</p>
      <p className="text-secondaryTwo font-bold text-[26px]">{role}</p>
      <p className="text-base text-offWhite">{tool}</p>
      <p className="text-ashTwo text-base">{desc}</p>
    </div>
  );
};

export { ExperienceCard };
