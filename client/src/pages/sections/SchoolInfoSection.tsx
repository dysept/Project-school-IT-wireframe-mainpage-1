const scheduleItems = [
  { value: "1,5-2", label: "годин проходить урок" },
  { value: "1-2 рази", label: "разів на тиждень" },
  { value: "offline", label: "формат навчання" },
  { value: "online", label: "формат навчання" },
];

const statItems = [
  { value: "3 роки", label: "Розвиваємо та надихаємо дітей" },
  { value: "65+", label: "задоволених учнів та учениць" },
  { value: "150", label: "уроків проводимо в місяць" },
];

export const SchoolInfoSection = (): JSX.Element => {
  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(0,60,101,1)_0%,rgba(0,34,58,1)_100%)]"
    >
      {/* Background image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        alt="Background"
        src="/figmaAssets/32284648-vs78413-2-1.png"
      />

      {/* Left vector decorations */}
      <img className="absolute w-[8.92%] h-auto top-[28%] left-0 pointer-events-none hidden lg:block" alt="" src="/figmaAssets/vector-20.svg" />
      <img className="absolute w-[4.24%] h-auto top-[80%] right-0 pointer-events-none hidden lg:block" alt="" src="/figmaAssets/vector-11.svg" />
      <img className="absolute top-[-80px] -left-14 w-[700px] h-auto pointer-events-none opacity-30 hidden lg:block" alt="" src="/figmaAssets/vector-1-1.svg" />

      <div className="relative z-10 w-full px-5 lg:px-16 py-12 lg:py-16">

        {/* Section title */}
        <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-white text-[28px] lg:text-[38px] leading-[1.2] mb-4 max-w-[625px]">
          Чому обирають нашу школу програмування для дітей?
        </h2>

        {/* Orange title */}
        <div className="mb-6 lg:mb-8">
          <span className="[font-family:'Inter',Helvetica] font-black text-[#ff892f] text-[28px] lg:text-[40px] leading-tight" style={{ textShadow: "1px 1px 1px #00000033" }}>
            IT-школа &ldquo;Kidscope&rdquo;
          </span>
        </div>

        {/* Description */}
        <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-sm lg:text-base leading-7 mb-8 max-w-[700px]">
          Це позашкільна освіта що розвиває у дітей цифрову грамотність, знання
          про бізнес, навички спілкування та управління собою. Ці навички
          допоможуть школярам у майбутньому стати успішними фахівцями,
          керівниками, бізнесменами та творцями IT-продуктів.
          <br />
          Ми хочемо допомогти батькам підготувати та адаптувати дитину до
          дорослого життя у цифровому світі.
        </p>

        {/* CTA button */}
        <button
          onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
          className="mb-10 w-full max-w-[193px] h-[51px] rounded-[46.71px] border-[1.4px] border-solid flex items-center justify-center border-[#eb6906] cursor-pointer"
          style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
        >
          <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-base whitespace-nowrap">
            Підібрати навчання
          </span>
        </button>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 lg:gap-6 mb-10 max-w-[807px]">
          {statItems.map((stat, i) => (
            <div
              key={i}
              className="relative bg-[#e3efff21] rounded-2xl px-4 py-5 lg:py-6 flex flex-col items-center text-center border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <span className="[font-family:'Days-Regular',Helvetica] font-normal text-[#ff892f] text-[22px] lg:text-[36px] leading-tight mb-2 relative z-10" style={{ textShadow: "1px 1px 1px #00000040" }}>
                {stat.value}
              </span>
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-[11px] lg:text-base leading-snug relative z-10">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Two column: planet image + schedule */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Planet image (desktop only) */}
          <div className="hidden lg:block">
            <img className="w-[313px] h-[304px] object-cover" alt="Planet" src="/figmaAssets/image-3.png" />
          </div>

          {/* Schedule */}
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="[font-family:'Days-Regular',Helvetica] font-normal text-white text-[24px] lg:text-3xl leading-tight">
                Графік та час навчання
              </h3>
              <img className="w-10 h-10 lg:w-[54px] lg:h-[54px]" alt="Time" src="/figmaAssets/mingcute-time-line.svg" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-3 w-full lg:w-[273px]">
              {scheduleItems.map((item, i) => (
                <div
                  key={i}
                  className="relative bg-[#e3efff21] rounded-2xl px-4 py-4 lg:h-[130px] flex flex-col justify-center border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <span className="[font-family:'Inter',Helvetica] font-black text-[#ff892f] text-[22px] lg:text-[36px] leading-none mb-1 relative z-10" style={{ textShadow: "1px 1px 1px #00000040" }}>
                    {item.value}
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm lg:text-xl leading-snug relative z-10">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
