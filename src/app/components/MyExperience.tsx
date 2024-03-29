import React from "react";
import { ExperienceCard } from ".";

const MyExperience = () => {
  return (
    <div className="px-10 md:px-40 py-24 bg-secondary">
      <p className=" text-[42px] text-white font-bold">
        My <span className=" text-secondaryTwo">Experiences</span>
      </p>

      <p className="text-ashTwo text-base w-80 md:w-[466px] leading-7 mt-4">
        Harnessing a wealth of diverse experiences, I bring a unique perspective
        and a proven track record of success to every project, ensuring
        unparalleled results and client satisfaction.
      </p>

      <section className="mt-14 md:flex items-center">
        <ExperienceCard
          date="June-2002 - 2020"
          role="UX/UI Designer"
          tool="Figma"
          desc="There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered 
alteration in some."
        />
        <ExperienceCard
          date="June-2002 - 2020"
          role="Product Designer"
          tool="Figma"
          desc="There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered 
alteration in some."
        />
        <ExperienceCard
          date="June-2002 - 2020"
          role="Graphic Designer"
          tool="Figma"
          desc="There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered 
alteration in some."
        />
      </section>
    </div>
  );
};

export { MyExperience };
