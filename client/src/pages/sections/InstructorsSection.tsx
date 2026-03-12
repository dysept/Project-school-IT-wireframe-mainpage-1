const instructors = [
  {
    id: 1,
    image: "/figmaAssets/ellipse-1.svg",
    name: "Имя Фамилия",
    description: "- Програмування на мові Snap\nв популярній грі Minecraft\n- Програмування на мові Snap\nв популярній грі Minecraft",
  },
  {
    id: 2,
    image: "/figmaAssets/ellipse-2.svg",
    name: "Имя Фамилия",
    description: "- Програмування на мові Snap\nв популярній грі Minecraft\n- Програмування на мові Snap\nв популярній грі Minecraft",
  },
  {
    id: 3,
    image: "/figmaAssets/ellipse-3.svg",
    name: "Имя Фамилия",
    description: "- Програмування на мові Snap\nв популярній грі Minecraft\n- Програмування на мові Snap\nв популярній грі Minecraft",
  },
];

export const InstructorsSection = (): JSX.Element => {
  return (
    <section
      id="instructors"
      className="relative w-full py-12 px-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.69) 100%), linear-gradient(180deg,rgba(255,255,255,0.8) 0%,rgba(255,255,255,0) 100%), url(/figmaAssets/section---about-teachers-.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 100%)",
      }}
    >
      {/* Decorative top-right image (desktop) */}
      <img
        className="absolute top-[31px] right-[3px] w-[220px] lg:w-[302px] h-auto pointer-events-none opacity-70 lg:opacity-100"
        alt=""
        src="/figmaAssets/ksdfvzkjnzsdc.png"
      />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-[124px]">
        <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-black text-[28px] lg:text-4xl leading-[1.2] mb-4">
          Наші<br />Викладачі
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-semibold text-black text-base lg:text-2xl leading-7 max-w-[819px] mb-10">
          Курси допомагають освоїти роботу з комп&#39;ютером, програмування та розробку ігор, а ще розвинути аналітичне та логічне мислення
        </p>

        {/* Cards: 3-col desktop, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="flex flex-col items-start">
              <img
                className="w-[180px] lg:w-[247px] h-[176px] lg:h-[241px] object-cover ml-0 lg:ml-[40px]"
                alt="Instructor"
                src={instructor.image}
              />
              <div className="mt-4 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] lg:text-[34px] leading-tight">
                {instructor.name}
              </div>
              <div className="mt-3 [font-family:'Inter',Helvetica] font-medium text-black text-base lg:text-[21px] leading-relaxed whitespace-pre-line">
                {instructor.description}
              </div>
              <button
                className="mt-5 flex items-center justify-center px-[18px] py-[14px] rounded-[54px] border-[1.6px] border-solid border-[#eb6906] cursor-pointer"
                style={{
                  background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)",
                  minWidth: "150px",
                }}
              >
                <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-sm lg:text-base whitespace-nowrap">
                  Детальніше
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
