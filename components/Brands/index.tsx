"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <div className="w-full">
      {/* <!-- ===== Clients Start ===== --> */}
      <p className="text-center text-sm mb-2 text-[#a4a5b8] mx-2">
        COMPATIBLE DEVICES
      </p>

      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-wrap justify-center gap-[1.875rem] flex-row md:gap-10 lg:gap-[3.125rem] xl:gap-20 xs:flex-col">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </div>
  );
};

export default Brands;