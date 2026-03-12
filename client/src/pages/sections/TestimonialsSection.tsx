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
      <img className="absolute w-[28.19%] h-[23.85%] top-[3.02%] left-0 pointer-events-none hidden lg:block" alt="" src="/figmaAssets/rectangle-4.png" />
      <img className="absolute w-[28.19%] h-[23.85%] top-[27.54%] left-[77.15%] pointer-events-none hidden lg:block" alt="" src="/figmaAssets/rectangle-3.png" />

      <div className="relative w-full px-5 lg:px-[124px] pt-14 lg:pt-[100px] pb-24 lg:pb-[160px] flex flex-col">
        <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-black text-[28px] lg:text-4xl leading-tight mb-8 lg:mb-[48px]">
          Відгуки<br />Батьків та учнів
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base lg:text-2xl leading-7 max-w-[819px] mb-10 lg:mb-[64px]">
          Курси допомагають освоїти роботу з комп&#39;ютером, програмування та розробку ігор, а ще розвинути аналітичне та логічне мислення
        </p>

        {/* Cards: 1-col mobile, row desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[56px] w-full mb-10 lg:mb-[80px]">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col w-full lg:w-[432px] min-h-[240px] lg:min-h-[324px] items-center justify-center gap-1 px-5 lg:px-[26px] py-5 lg:py-[15px] flex-shrink-0"
            >
              <div className="absolute inset-0 w-full h-full bg-[#ffffff26] rounded-2xl before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />

              <div className="flex flex-col w-full items-start gap-5 lg:gap-[35px] relative z-[2]">
                <img className="w-full" alt="Stars" src="/figmaAssets/frame-36.svg" />
                <div className="flex flex-col items-start gap-4 lg:gap-8 w-full">
                  <span className="[font-family:'Inter',Helvetica] font-bold text-black text-[22px] lg:text-[32px] leading-tight">
                    {t.name}
                  </span>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-sm lg:text-xl leading-6 lg:leading-7">
                    {t.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full mb-8 lg:mb-[50px]">
          <button
            onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full max-w-[320px] lg:w-[398px] px-8 py-5 lg:py-[33px] rounded-[100px] border-[3px] border-solid border-[#eb6906] flex items-center justify-center cursor-pointer"
            style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
          >
            <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[20px] lg:text-[27.6px] whitespace-nowrap">
              Детальніше
            </span>
          </button>
        </div>
      </div>

      <div className="absolute w-[8.35%] h-[13.46%] bottom-[2.58%] left-[9.17%] bg-[url(/figmaAssets/layer-0.png)] bg-[100%_100%] hidden lg:block" />
      <img className="absolute w-[8.19%] bottom-[2.68%] left-[82.50%] pointer-events-none hidden lg:block" alt="" src="/figmaAssets/rectangle-7.png" />
      <img className="w-full pointer-events-none" alt="" src="/figmaAssets/rectangle-6.png" />
    </section>
  );
};
