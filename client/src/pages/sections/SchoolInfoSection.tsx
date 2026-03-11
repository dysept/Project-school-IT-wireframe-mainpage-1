import { Button } from "@/components/ui/button";

// Stat cards data for the bottom row
const statCards = [
  {
    value: "3 роки",
    label: "Розвиваємо та надихаємо дітей",
    glowColor: "bg-[#38ffddba]",
    glowClass:
      "mt-[107.1px] w-[125.14px] h-[125.14px] ml-[-8.9px] rounded-[62.57px] rotate-[-3.86deg] blur-[93.05px]",
    valueLeft: "left-1.5",
  },
  {
    value: "65+",
    label: "задоволених учнів та учениць",
    glowColor: "bg-[#fff72aba]",
    glowClass:
      "mt-[-25.9px] w-[125.14px] h-[125.14px] ml-[154.1px] rounded-[62.57px] rotate-[-3.86deg] blur-[93.05px]",
    valueLeft: "left-12",
  },
  {
    value: "150",
    label: "уроков проводим в месяц",
    glowColor: "bg-[#ff2ad1ba]",
    glowClass:
      "mt-[97.3px] w-[161.61px] h-[161.61px] ml-[48.3px] rounded-[80.81px] rotate-[-3.86deg] blur-[93.05px]",
    valueLeft: "left-12",
  },
];

// Schedule info cards data
const scheduleCards = [
  {
    valueBig: "1,5-2",
    valueLabel: "годин проходить урок",
    blurColor: "text-[#ff8400ba]",
    innerLeft: "left-[26px]",
    innerWidth: "w-56",
    valueLeftBlur: "left-[61px]",
    valueLeftMain: "left-0",
  },
  {
    valueBig: "1-2 рази",
    valueLabel: "разів на тиждень",
    blurColor: "text-[#ffa94eb8]",
    innerLeft: "left-[50px]",
    innerWidth: "w-44",
    valueLeftBlur: "left-[11px]",
    valueLeftMain: "left-0",
  },
  {
    valueBig: "offline",
    valueLabel: "формат навчання",
    blurColor: "text-[#ffa94eb8]",
    innerLeft: "left-[50px]",
    innerWidth: "w-[177px]",
    valueLeftBlur: "left-[27px]",
    valueLeftMain: "left-0",
  },
  {
    valueBig: "online",
    valueLabel: "формат навчання",
    blurColor: "text-[#ffa94eb8]",
    innerLeft: "left-8",
    innerWidth: "w-[212px]",
    valueLeftBlur: "left-12",
    valueLeftMain: "left-0",
  },
];

export const SchoolInfoSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[735px] overflow-hidden bg-[linear-gradient(180deg,rgba(0,60,101,1)_0%,rgba(0,34,58,1)_100%)]">
      {/* Decorative vector left */}
      <img
        className="absolute w-[8.92%] h-[18.64%] top-[28.71%] left-0"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />

      {/* Decorative vector right bottom */}
      <img
        className="absolute w-[4.24%] h-[10.61%] top-[80.82%] left-[95.76%]"
        alt="Vector"
        src="/figmaAssets/vector-11.svg"
      />

      {/* Background image */}
      <img
        className="absolute top-0 left-0 w-full h-[735px] object-cover"
        alt="Element"
        src="/figmaAssets/32284648-vs78413-2-1.png"
      />

      {/* Large decorative vector overlay */}
      <img
        className="absolute top-[-122px] -left-14 w-[997px] h-[972px]"
        alt="Vector"
        src="/figmaAssets/vector-1-1.svg"
      />

      {/* Main left content block */}
      <div className="absolute top-[calc(50.00%_-_338px)] left-[calc(50.00%_-_596px)] w-[807px] h-[679px]">
        {/* Large glassmorphism card background */}
        <div className="absolute top-[110px] left-0 w-[803px] h-[340px] flex bg-[#e3efff21] rounded-3xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="mt-[103px] w-[370px] h-[370px] ml-[541px] bg-[#384fff6e] rounded-[185px] blur-[93.05px]" />
        </div>

        {/* Description text */}
        <p className="top-[215px] left-[25px] w-[753px] [font-family:'Inter',Helvetica] text-base leading-7 absolute font-semibold text-white tracking-[0]">
          Це позашкільна освітащо розвиває у дітей цифрову грамотність, знання
          про бізнес, навички спілкування та управління собою. Ці навички
          допоможуть школярам у майбутньому стати успішними фахівцями,
          керівниками, бізнесменами та творцями IT-продуктів.
          <br />
          Ми хочемо допомогти батькам підготувати та адаптувати дитину до
          дорослого життя у цифровому світі.
        </p>

        {/* IT-школа "Kidscope" title with glow effect */}
        <div className="absolute top-[152px] left-[25px] w-[430px] h-[26px]">
          <div className="blur-[5px] text-[#ffa94d4a] absolute top-0 left-0 [font-family:'Inter',Helvetica] font-black text-[40px] tracking-[0] leading-[26px] whitespace-nowrap">
            IT-школа &quot;Kidscope&quot;
          </div>
          <div className="[text-shadow:1px_1px_1px_#00000033] text-[#ff892f] absolute top-0 left-0 [font-family:'Inter',Helvetica] font-black text-[40px] tracking-[0] leading-[26px] whitespace-nowrap">
            IT-школа &quot;Kidscope&quot;
          </div>
        </div>

        {/* Stat cards row - 3 glassmorphism cards */}
        {/* Card 1 - 3 роки */}
        <div className="absolute top-[474px] left-0 w-[259px] h-[205px] flex bg-[#e3efff21] rounded-2xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="mt-[107.1px] w-[125.14px] h-[125.14px] ml-[-8.9px] bg-[#38ffddba] rounded-[62.57px] rotate-[-3.86deg] blur-[93.05px]" />
        </div>

        {/* Card 2 - 65+ */}
        <div className="absolute top-[474px] left-[272px] w-[259px] h-[205px] flex bg-[#e3efff21] rounded-2xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="mt-[-25.9px] w-[125.14px] h-[125.14px] ml-[154.1px] bg-[#fff72aba] rounded-[62.57px] rotate-[-3.86deg] blur-[93.05px]" />
        </div>

        {/* Card 3 - 150 */}
        <div className="absolute top-[474px] left-[544px] w-[259px] h-[205px] flex bg-[#e3efff21] rounded-2xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="mt-[97.3px] w-[161.61px] h-[161.61px] ml-[48.3px] bg-[#ff2ad1ba] rounded-[80.81px] rotate-[-3.86deg] blur-[93.05px]" />
        </div>

        {/* Section heading */}
        <h2 className="absolute top-0 left-0 w-[625px] [font-family:'Days-Regular',Helvetica] font-normal text-white text-[38px] tracking-[0] leading-10">
          Чому обирають нашу школу програмування для дітей?
        </h2>

        {/* Stat: 3 роки */}
        <div className="absolute top-[520px] left-[33px] w-[199px] h-[113px]">
          <div className="absolute top-0 left-1.5 blur-[2.5px] [font-family:'Days-Regular',Helvetica] font-normal text-[#ffa94eb8] text-[49.4px] tracking-[0] leading-[42.0px] whitespace-nowrap">
            3 роки
          </div>
          <div className="absolute top-0 left-1.5 [text-shadow:1px_1px_1px_#00000040] [font-family:'Days-Regular',Helvetica] font-normal text-[#ff892f] text-[49.4px] tracking-[0] leading-[42.0px] whitespace-nowrap">
            3 роки
          </div>
          <div className="absolute top-[63px] left-0 w-[193px] [font-family:'Inter',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[24.7px]">
            Розвиваємо та надихаємо дітей
          </div>
        </div>

        {/* Stats: 65+ and 150 */}
        <div className="absolute top-[520px] left-[308px] w-[462px] h-[113px] flex gap-[70.4px]">
          {/* 65+ */}
          <div className="w-[198.56px] h-[112.95px] relative">
            <div className="absolute top-0 left-12 blur-[2.5px] [font-family:'Days-Regular',Helvetica] font-normal text-[#ffa94eb8] text-[49.4px] tracking-[0] leading-[42.0px] whitespace-nowrap">
              65+
            </div>
            <div className="absolute top-0 left-12 [text-shadow:1px_1px_1px_#00000040] [font-family:'Days-Regular',Helvetica] font-normal text-[#ff892f] text-[49.4px] tracking-[0] leading-[42.0px] whitespace-nowrap">
              65+
            </div>
            <div className="absolute top-[63px] left-0 w-[193px] [font-family:'Inter',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[24.7px]">
              задоволених учнів та учениць
            </div>
          </div>

          {/* 150 */}
          <div className="w-[198.56px] h-[113px] relative">
            <div className="absolute top-0 left-12 blur-[2.5px] [font-family:'Days-Regular',Helvetica] font-normal text-[#ffa94eb8] text-[49.4px] tracking-[0] leading-[42.0px] whitespace-nowrap">
              150
            </div>
            <div className="absolute top-0 left-12 [text-shadow:1px_1px_1px_#00000040] [font-family:'Days-Regular',Helvetica] font-normal text-[#ff892f] text-[49.4px] tracking-[0] leading-[42.0px] whitespace-nowrap">
              150
            </div>
            <div className="absolute top-[63px] left-0 w-[193px] [font-family:'Inter',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[24.7px]">
              уроков проводим в месяц
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <Button
        className="w-[193px] h-auto gap-[6.45px] p-[15.48px] absolute top-[403px] left-[calc(50.00%_-_572px)] rounded-[46.71px] border-[1.4px] border-solid flex items-center justify-center border-[#eb6906] [background:url(/figmaAssets/frame-3-5.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_100%)] hover:opacity-90"
        variant="outline"
      >
        <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Підібрати навчання
        </span>
      </Button>

      {/* Planet/image decoration */}
      <img
        className="absolute top-0 left-[691px] w-[313px] h-[304px] object-cover"
        alt="Image"
        src="/figmaAssets/image-3.png"
      />

      {/* Right side: Schedule section */}
      <div className="flex flex-col w-[388px] items-center justify-center gap-2 absolute top-[29px] left-[968px]">
        {/* Schedule header */}
        <div className="flex flex-col items-center justify-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Days-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[34px]">
            Графік та час навчання
          </h3>
          <img
            className="relative w-[54px] h-[54px]"
            alt="Mingcute time line"
            src="/figmaAssets/mingcute-time-line.svg"
          />
        </div>

        {/* Schedule info cards */}
        <div className="flex flex-col w-[272.76px] h-[569.35px] items-center justify-between relative">
          {/* Card: 1,5-2 годин проходить урок */}
          <div className="relative self-stretch w-full h-[129.59px] bg-[#e3efff21] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="relative top-9 left-[26px] w-56 h-[58px]">
              <div className="absolute top-0 left-[61px] blur-[2.5px] [font-family:'Inter',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[26px]">
                <span className="font-black text-[#ff8400ba]">1,5-2</span>
                <span className="text-[#ff8400ba] font-medium text-2xl">
                  {" "}
                  <br />
                </span>
                <span className="font-medium text-white text-xl">{""}</span>
              </div>
              <div className="absolute top-0 left-0 [text-shadow:1px_1px_1px_#00000040] [font-family:'Inter',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[26px]">
                <span className="font-black text-[#ff892f]">1,5-2</span>
                <span className="font-medium text-[#ff892f] text-2xl">
                  {" "}
                  <br />
                </span>
                <span className="font-medium text-white text-xl">
                  годин проходить урок
                </span>
              </div>
            </div>
          </div>

          {/* Card: 1-2 рази на тиждень */}
          <div className="relative self-stretch w-full h-[129.59px] bg-[#e3efff21] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="relative top-9 left-[50px] w-44 h-[58px]">
              <div className="absolute top-0 left-[11px] blur-[2.5px] [font-family:'Inter',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[26px] whitespace-nowrap">
                <span className="font-black text-[#ffa94eb8]">1-2</span>
                <span className="text-[#ffa94eb8] font-medium text-2xl">
                  &nbsp;
                </span>
                <span className="font-extrabold text-[#ffa94eb8]">рази</span>
              </div>
              <div className="absolute top-0 left-0 [text-shadow:1px_1px_1px_#0000004c] [font-family:'Inter',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[26px]">
                <span className="font-black text-[#ff892f]">1-2</span>
                <span className="font-medium text-[#ff892f] text-2xl">
                  &nbsp;
                </span>
                <span className="font-extrabold text-[#ff892f]">
                  рази
                  <br />
                </span>
                <span className="font-medium text-white text-xl">
                  разів на тиждень
                </span>
              </div>
            </div>
          </div>

          {/* Card: offline формат навчання */}
          <div className="relative self-stretch w-full h-[129.59px] bg-[#e3efff21] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="relative top-9 left-[50px] w-[177px] h-[58px]">
              <div className="absolute top-0 left-[27px] blur-[2.5px] [font-family:'Inter',Helvetica] font-black text-[#ffa94eb8] text-4xl text-center tracking-[0] leading-[26px] whitespace-nowrap">
                offline
              </div>
              <div className="absolute top-0 left-0 [text-shadow:1px_1px_1px_#00000040] [font-family:'Inter',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[26px]">
                <span className="font-black text-[#ff892f]">
                  offline
                  <br />
                </span>
                <span className="font-medium text-white text-xl">
                  формат навчання
                </span>
              </div>
            </div>
          </div>

          {/* Card: online формат навчання */}
          <div className="relative self-stretch w-full h-[129.59px] bg-[#e3efff21] rounded-2xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.47)_0%,rgba(255,255,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="relative top-[37px] left-8 w-[212px] h-[57px]">
              <div className="absolute top-0 left-12 blur-[2.5px] [font-family:'Inter',Helvetica] font-black text-[#ffa94eb8] text-4xl text-center tracking-[0] leading-[26px] whitespace-nowrap">
                online
              </div>
              <div className="absolute top-0 left-0 [text-shadow:1px_1px_1px_#00000040] [font-family:'Inter',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[26px]">
                <span className="font-black text-[#ff892f]">
                  online
                  <br />
                </span>
                <span className="text-white font-medium text-2xl">
                  формат навчання
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
