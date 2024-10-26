import FeaturedCourses from "@/components/featured-courses";
import HeroSection from "@/components/hero-section";
import Instructors from "@/components/instructors";
import Testimonials from "@/components/testimonials";
import UpcomingWebinars from "@/components/upcoming-webinars";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid-white/[0.02] bg-black/[0.96] antialiased ">
      <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebinars/>
      <Instructors />
      
 
    </main>  );
}
