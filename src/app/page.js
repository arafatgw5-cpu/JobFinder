"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
import HeroSection from "@/components/ui/HeroSection";
import StatsSection from "@/components/ui/StatsSection";
import JobsSection from "@/components/ui/JobSection";
import FeaturesSection from "@/components/ui/Featuressection";
import PricingSection from "@/components/ui/PricingSection";
import CTASection from "@/components/ui/CTASection";

// Lazy Loading Chart Component
const Chart = dynamic(
  () => import("@/components/Chart"),
  {
    loading: () => <Spinner />,
    ssr: false,
  }
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <JobsSection />
      <FeaturesSection/> 
      <PricingSection /> 
      <CTASection />
    </main>
  );
}