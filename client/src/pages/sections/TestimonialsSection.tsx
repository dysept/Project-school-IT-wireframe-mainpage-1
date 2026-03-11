import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Имя",
    text: "Курси допомагають освоїти роботу з комп'ютером, програмування та розробку ігор, а ще розвинути аналітичне та логічне мислення",
  },
  {
    id: 2,
    name: "Имя",
    text: "Курси допомагають освоїти роботу з комп'ютером, програмування та розробку ігор, а ще розвинути аналітичне та логічне мислення",
  },
  {
    id: 3,
    name: "Имя",
    text: "Курси допомагають освоїти роботу з комп'ютером, програмування та розробку ігор, а ще розвинути аналітичне та логічне мислення",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_5%,rgba(86,169,229,1)_89%,rgba(92,189,255,1)_100%)] overflow-hidden">
      {/* Top-left decorative rectangle */}
      <img
        className="absolute w-[28.19%] h-[23.85%] top-[3.02%] left-0 pointer-events-none"
        alt="Rectangle"
        src="/figmaAssets/rectangle-4.png"
      />

      {/* Top-right decorative rectangle */}
      <img
        className="absolute w-[28.19%] h-[23.85%] top-[27.54%] left-[77.15%] pointer-events-none"
        alt="Rectangle"
        src="/figmaAssets/rectangle-3.png"
      />

      {/* Main content container */}
      <div className="relative w-full px-[124px] pt-[100px] pb-[160px] flex flex-col gap-0">
        {/* Section heading */}
        <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[34px] mb-[48px]">
          Відгуки <br />
          Батьків та учнів
        </h2>

        {/* Section subtitle */}
        <p className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[26px] max-w-[819px] mb-[64px]">
          Курси допомагають освоїти роботу з комп&#39;ютером, програмування та
          розробку ігор, а ще розвинути аналітичне та логічне мислення
        </p>

        {/* Testimonial cards row */}
        <div className="flex flex-row gap-[56px] w-full mb-[80px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex flex-col w-[432px] min-h-[324px] items-center justify-center gap-1 px-[26px] py-[15px] flex-shrink-0"
            >
              {/* Glassmorphism card background with gradient border */}
              <div className="absolute inset-0 w-full h-full bg-[#ffffff26] rounded-2xl before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />

              {/* Card inner content */}
              <div className="flex flex-col w-[373px] items-start gap-[35px] relative z-[2]">
                {/* Star rating image */}
                <img
                  className="self-stretch w-full flex-shrink-0"
                  alt="Stars"
                  src="/figmaAssets/frame-36.svg"
                />

                <div className="flex flex-col items-start gap-8 self-stretch w-full">
                  {/* Name */}
                  <span className="self-stretch [font-family:'Inter',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[26px]">
                    {testimonial.name}
                  </span>

                  {/* Testimonial text */}
                  <p className="self-stretch [font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-7">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Детальніше" button centered */}
        <div className="flex justify-center w-full mb-[50px]">
          <Button
            className="h-auto w-[398px] gap-[13.81px] px-[33.14px] py-[33.14px] rounded-[100px] border-[3px] border-solid border-[#eb6906] hover:bg-[rgba(255,255,255,0.95)] flex items-center justify-center"
            style={{
              background: `url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)`,
            }}
            variant="outline"
          >
            <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[27.6px] tracking-[0] leading-normal whitespace-nowrap">
              Детальніше
            </span>
          </Button>
        </div>
      </div>

      {/* Bottom-left decorative layer */}
      <div className="absolute w-[8.35%] h-[13.46%] bottom-[2.58%] left-[9.17%] bg-[url(/figmaAssets/layer-0.png)] bg-[100%_100%]" />

      {/* Bottom-right decorative rectangle */}
      <img
        className="absolute w-[8.19%] h-[9.91%] bottom-[2.68%] left-[82.50%] pointer-events-none"
        alt="Rectangle"
        src="/figmaAssets/rectangle-7.png"
      />

      {/* Bottom wave */}
      <img
        className="w-full pointer-events-none"
        alt="Rectangle"
        src="/figmaAssets/rectangle-6.png"
      />
    </section>
  );
};
