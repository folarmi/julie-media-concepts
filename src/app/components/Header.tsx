"use client";
import Image from "next/image";
import { useState } from "react";
import { sidebarItems } from "../data/data";

// import React from "react";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="block md:hidden bg-secondary">
        <Image
          src="/menu.png"
          className="ml-10 pt-4"
          width={24}
          height={24}
          alt=""
          onClick={toggleSidebar}
        />

        {showSidebar && (
          <div className="bg-secondary fixed top-0 left-0 z-40 w-64 h-screen transition-transform">
            <Image
              src="/close.png"
              className="ml-48 pt-4 flex justify-self-end"
              width={24}
              height={24}
              alt=""
              onClick={toggleSidebar}
            />
            <div className="space-y-6 font-medium mt-6 ml-6">
              {sidebarItems.map((item) => {
                return (
                  <div key={item?.id}>
                    <a
                      className="p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      href={item?.link}
                      onClick={toggleSidebar}
                    >
                      {item?.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* {showSidebar && (
          <div
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <p>vfhgh</p>
            </div>
          </div>
        )} */}
      </div>

      <nav className="hidden h-16 bg-primary md:flex items-center text-white px-40 py-5 sticky top-0">
        <p className="mr-60 whitespace-nowrap">Julie Media Concept</p>

        <div className="flex justify-around items-center w-full uppercase text-base text-ash">
          {sidebarItems.map((item) => {
            return (
              <div key={item?.id}>
                <a href={item?.link}>{item?.name}</a>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export { Header };
