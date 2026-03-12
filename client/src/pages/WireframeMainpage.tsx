import { CoursesSection } from "./sections/CoursesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { InstructorsSection } from "./sections/InstructorsSection";
import { IntroSection } from "./sections/IntroSection";
import { SchoolInfoSection } from "./sections/SchoolInfoSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const EnrollmentSection = (): JSX.Element => (
  <section
    id="enrollment"
    className="relative w-full py-16 px-5 lg:px-[124px] flex flex-col items-center justify-center text-center bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(202,236,255,1)_100%)] overflow-hidden"
  >
    <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-black text-[28px] lg:text-[44px] leading-tight mb-4">
      Підібрати навчання
    </h2>
    <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base lg:text-xl leading-7 max-w-[600px] mb-10">
      Залиште свій номер телефону — ми зв&#39;яжемося з вами та підберемо курс для вашої дитини
    </p>
    <form
      className="flex flex-col sm:flex-row gap-4 w-full max-w-[520px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Ваше ім'я"
        className="flex-1 px-5 py-4 rounded-[50px] border-2 border-[#eb6906] outline-none [font-family:'Inter',Helvetica] text-base text-black placeholder-gray-400"
        style={{ background: "rgba(255,255,255,0.9)" }}
      />
      <input
        type="tel"
        placeholder="+38 (___) ___-__-__"
        className="flex-1 px-5 py-4 rounded-[50px] border-2 border-[#eb6906] outline-none [font-family:'Inter',Helvetica] text-base text-black placeholder-gray-400"
        style={{ background: "rgba(255,255,255,0.9)" }}
      />
      <button
        type="submit"
        className="px-8 py-4 rounded-[50px] border-[2px] border-solid border-[#eb6906] [font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-base whitespace-nowrap cursor-pointer"
        style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
      >
        Записатися
      </button>
    </form>
  </section>
);

export const WireframeMainpage = (): JSX.Element => {
  return (
    <main className="bg-[#0163a6] w-full flex flex-col relative overflow-x-hidden">
      <IntroSection />
      <SchoolInfoSection />
      <CoursesSection />
      <InstructorsSection />
      <HeroSection />
      <TestimonialsSection />
      <EnrollmentSection />
      <FooterSection />
    </main>
  );
};
