"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section role="presentation" className="relative h-screen w-full">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="https://procreate-assets-cdn.procreate.com/_nuxt/hero_16_9.oDVes5j9.jpg"
          width={1920}
          height={1080}
          alt="Hero background image"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
