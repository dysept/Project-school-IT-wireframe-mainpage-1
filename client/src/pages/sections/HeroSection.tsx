export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[400px] lg:min-h-[718px]">
      <div
        className="relative w-full min-h-[400px] lg:min-h-[718px] flex items-center justify-center lg:justify-start"
        style={{ background: "url(/figmaAssets/group.png) 100% 100% / cover" }}
      >
        {/* Mobile mascot (top center) */}
        <img
          className="absolute top-4 right-4 w-[160px] h-[160px] object-cover lg:hidden"
          alt="Mascot"
          src="/figmaAssets/image-8.png"
        />

        {/* Desktop mascot */}
        <img
          className="absolute top-[148px] left-[720px] w-[441px] h-[441px] object-cover hidden lg:block"
          alt="Mascot"
          src="/figmaAssets/image-8.png"
        />

        {/* Content */}
        <div className="relative z-10 px-5 lg:px-0 lg:absolute lg:top-[211px] lg:left-[149px] lg:w-[658px] pt-8 lg:pt-0 pb-32 lg:pb-0 max-w-[400px] lg:max-w-none">
          <div
            className="[font-family:'Days-Regular',Helvetica] font-normal text-black text-[26px] lg:text-5xl leading-[1.2] lg:leading-[57px] mb-6 lg:mb-10"
            style={{ transform: "rotate(2.40deg)" }}
          >
            у 97% батьків позитивні відгуки про школу вже після першого заняття
          </div>

          <button
            onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full max-w-[300px] lg:w-[398px] lg:h-[105px] px-6 py-4 rounded-[100px] border-[3px] border-solid border-[#eb6906] flex items-center justify-center cursor-pointer"
            style={{
              transform: "rotate(2.68deg)",
              background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)",
            }}
          >
            <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[18px] lg:text-[27.6px] whitespace-nowrap">
              Запис на навчання
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
