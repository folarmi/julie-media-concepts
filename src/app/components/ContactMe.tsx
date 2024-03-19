/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/sendEmail";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section className="" id="contactMe">
      <div className="bg-primary px-10 md:px-40 pt-24 flex flex-col items-center">
        <p className=" text-[42px] text-white font-bold">
          Contact <span className=" text-secondaryTwo">Me</span>
        </p>

        <p className="text-ashTwo text-base w-[350px] md:w-[685px] leading-7 mt-4 text-justify">
          Ready to take the next step? Whether you have a question about my
          services, want to discuss a potential project, or just want to say
          hello, I'd love to hear from you! Fill out the form below, and I'll
          get back to you as soon as possible. Your satisfaction is my priority,
          and I am here to help in any way we can.
        </p>
      </div>

      <section className="bg-primary px-10 md:px-40 md:flex md:items-center md:justify-between">
        <div className="flex flex-col gap-y-4 pt-8">
          <p className="text-secondaryTwo text-base">
            Address: <span className="text-white">Ago Palace Way</span>
          </p>
          <p className="text-secondaryTwo text-base">
            Phone: <span className="text-white">+234 907 370 8364</span>
          </p>
          <p className="text-secondaryTwo text-base">
            Email: <span className="text-white"> juliemedia@gmail.com</span>
          </p>
          <p className="text-secondaryTwo text-base">
            Website:{" "}
            <span className="text-white">
              www.julie-media-concepts.vercel.app/
            </span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full md:w-1/2 mt-4"
        >
          <input
            type="text"
            id="first_name"
            className="bg-blueOne border text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16"
            placeholder="Name"
            required
            {...register("name", { required: true })}
          />

          <input
            type="email"
            id="first_name"
            className="bg-blueOne border text-gray-900 text-sm rounded-lg block w-full p-2.5 h-16 mt-8"
            placeholder="email@example.com"
            required
            {...register("email", { required: true })}
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
            className="bg-blueOne border text-white text-sm block p-2.5 w-full h-40 rounded-lg"
            placeholder="Message"
            {...register("message", { required: true })}
          ></textarea>

          <button className="bg-secondaryTwo w-[123px] px-5 py-2 mt-4">
            <p className="text-base whitespace-nowrap">Contact Me</p>
          </button>
        </form>
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
          src="/pinterest.png"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
};

export { ContactMe };
