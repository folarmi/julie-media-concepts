import Image from "next/image";
import React from "react";

const ContactMe = () => {
  return (
    <section className="" id="contactMe">
      <div className="bg-primary px-10 md:px-40 pt-24 flex flex-col items-center">
        <p className=" text-[42px] text-white font-bold">
          Contact <span className=" text-secondaryTwo">Me</span>
        </p>

        <p className="text-ashTwo text-center text-base w-96 md:w-[685px] leading-7 mt-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      <section className="bg-primary px-10 md:px-40 md:flex md:items-center md:justify-between">
        <div className="flex flex-col gap-y-4 pt-8">
          <p className="text-secondaryTwo text-base">
            Address:{" "}
            <span className="text-white">
              23 S 80 Road, Benedict,ne, 68316 United States
            </span>
          </p>
          <p className="text-secondaryTwo text-base">
            Phone: <span className="text-white">+01 123 456 789</span>
          </p>
          <p className="text-secondaryTwo text-base">
            Email: <span className="text-white"> abc.xyz@gmail.com</span>
          </p>
          <p className="text-secondaryTwo text-base">
            Website: <span className="text-white">www.abc.xyz.com</span>
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/2 mt-4">
          <input
            type="text"
            id="first_name"
            className="bg-blueOne border  text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            placeholder="Name"
            required
          />

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-8"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={2}
            className="block p-2.5 w-full text-sm h-40 text-gray-900 bg-blueOne rounded-lg  focus:ring-blue-500 focus:border-blue-500"
            placeholder="Message"
          ></textarea>

          <div className="bg-secondaryTwo w-[123px] px-5 py-2 mt-4">
            <p className="text-base whitespace-nowrap">Contact Me</p>
          </div>
        </div>
      </section>

      <div className="bg-primary px-10 md:px-40 pt-24 flex flex-col items-center">
        <p className=" text-[42px] text-white font-bold">AboutMe</p>

        <p className="text-ashTwo text-center text-base w-96 md:w-[685px] leading-7 my-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      <div className="flex items-center bg-primary justify-center gap-x-6 pb-24">
        <Image
          alt="social media icons"
          src="/facebook.png"
          width={24}
          height={24}
        />
        <Image
          alt="social media icons"
          src="/twitter.png"
          width={24}
          height={24}
        />
        <Image
          alt="social media icons"
          src="/linkedIn.png"
          width={24}
          height={24}
        />
        <Image
          alt="social media icons"
          src="/instagram.png"
          width={24}
          height={24}
        />
        <Image
          alt="social media icons"
          src="/youTube.jpg"
          width={24}
          height={24}
        />
        <Image
          alt="social media icons"
          src="/pinterest.jpg"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
};

export { ContactMe };
