import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import { motion } from "framer-motion";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import UpcomingWebinars from "@/components/upcomingWebinar";
import { WavyBackground } from "@/components/ui/wavy-background";
import Indstructors from "@/components/Indstructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Indstructors />
      <Footer />
    </main>
  );
}
