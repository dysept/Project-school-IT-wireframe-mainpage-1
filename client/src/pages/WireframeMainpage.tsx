import { CoursesSection } from "./sections/CoursesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { InstructorsSection } from "./sections/InstructorsSection";
import { IntroSection } from "./sections/IntroSection";
import { SchoolInfoSection } from "./sections/SchoolInfoSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const WireframeMainpage = (): JSX.Element => {
  return (
    <main className="bg-[#0163a6] w-full min-w-[1440px] flex flex-col relative">
      <IntroSection />
      <SchoolInfoSection />
      <CoursesSection />
      <InstructorsSection />
      <HeroSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
};
