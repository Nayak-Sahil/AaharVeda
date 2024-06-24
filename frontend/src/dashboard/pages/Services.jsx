import ServiceCard from "@/components/Dashboard/ServiceCard";
import ServiceContent from "@/components/Dashboard/ServiceContent";
import React from "react";

export default function Service() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg text-primetext font-semibold md:text-base">
          Services
        </h1>
      </div>

      <section className="flex flex-col md:flex-row w-full h-max items-center justify-start">
        <ServiceCard title="Recipe" description="🥘 Find any Recipe" content={<ServiceContent btnTitle="Explore Recipe" />} />
        <ServiceCard isSoon={true} title="Nutrients" description="🥗 Find Nutrient in your recipe" content={<ServiceContent btnTitle="Explore Nutrients" />} />
      </section>
    </>
  );
}
