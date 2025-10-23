import Hero from "@/components/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import StatsSection from "@/components/home/StatsSection";
import FeaturedBusinesses from "@/components/home/FeaturedBusinesses";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Timeline from "@/components/home/Timeline";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <WhatWeDo />
      <FeaturedBusinesses />
      <FeaturedProjects />
      <Timeline />
      <WhyChoose />
    </>
  );
}
