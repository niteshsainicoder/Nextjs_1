import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import StickySection from "@/components/StickySection";
import Movingbg from "@/components/Movingbg";
import Upcomingwebinar from "@/components/Upcomingwebinar";

export default function Home() {
  return (
    <main className="w-full min-h-screen max-h-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickySection />
      <Movingbg />
      <Upcomingwebinar/>
    </main>);
}
