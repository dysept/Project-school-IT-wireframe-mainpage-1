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
      {/* Intro Section */}
      <IntroSection />

      {/* School Info Section */}
      <SchoolInfoSection />

      {/* Courses Section with "View All Courses" button */}
      <section className="relative w-full flex flex-col items-center">
        <CoursesSection />
        {/* "Дивитись всі курси" button rendered below courses */}
        <div className="flex w-[398px] items-center justify-center gap-[13.81px] p-[33.14px] my-8 rounded-[100px] border-[3px] border-solid border-[#eb6906] [background:url(/figmaAssets/frame-3-5.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_100%)]">
          <span className="w-fit [font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[27.6px] tracking-[0] leading-[normal] whitespace-nowrap">
            Дивитись всі курси
          </span>
        </div>
      </section>

      {/* Instructors Section */}
      <InstructorsSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
};
