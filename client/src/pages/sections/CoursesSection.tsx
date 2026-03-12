const coursesData = [
  {
    id: 1,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "7-12 років",
    ageBadgeBg: "bg-[#f09ac2]",
    ageDotBg: "bg-[#199bd8]",
    title: "Візуальне програмування в Minecraft",
    description: "Програмування на мові Snap в популярній грі Minecraft",
    borderGradient: "linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.2) 100%)",
    extraDecor: null,
  },
  {
    id: 2,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "12-14 років",
    ageBadgeBg: "bg-[#b897c6]",
    ageDotBg: null,
    title: "Scratch програмування",
    description: "Програмування на мові Snap в популярній грі Minecraft",
    borderGradient: "linear-gradient(180deg,rgba(255,255,255,0.48) 0%,rgba(255,255,255,0.1) 100%)",
    extraDecor: { src: "/figmaAssets/vector-3.svg", alt: "Vector" },
  },
  {
    id: 3,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "14-16 років",
    ageBadgeBg: "bg-[#8ee55b]",
    ageDotBg: null,
    title: "Візуальне програмування в Minecraft",
    description: "Програмування на мові Snap в популярній грі Minecraft",
    borderGradient: "linear-gradient(180deg,rgba(255,255,255,0.2) 0%,rgba(255,255,255,1) 100%)",
    extraDecor: { src: "/figmaAssets/ellipse-32.svg", alt: "Ellipse" },
  },
  {
    id: 4,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "7-12 років",
    ageBadgeBg: "bg-white",
    ageDotBg: null,
    title: "Python для дітей",
    description: "Програмування на мові Snap в популярній грі Minecraft",
    borderGradient: "linear-gradient(180deg,rgba(255,255,255,0.2) 0%,rgba(255,255,255,1) 100%)",
    extraDecor: null,
  },
];

export const CoursesSection = (): JSX.Element => {
  return (
    <section id="courses" className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(2,36,60,1)_0%,rgba(18,115,183,1)_55%,rgba(255,255,255,1)_100%)] py-12">
      {/* Decorative bg */}
      <img className="absolute w-[24.31%] h-auto top-[51%] left-0 pointer-events-none hidden lg:block" alt="" src="/figmaAssets/rectangle.png" />
      <img className="absolute w-[28.19%] h-auto top-[28%] left-[78%] pointer-events-none hidden lg:block" alt="" src="/figmaAssets/rectangle-1.png" />
      <img className="absolute bottom-0 left-0 w-[280px] lg:w-[382px] h-auto object-cover pointer-events-none" alt="" src="/figmaAssets/image-6.png" />
      <img className="absolute w-[81.76%] h-auto top-[6%] left-[17%] pointer-events-none hidden lg:block" alt="" src="/figmaAssets/vector-6.svg" />
      <img className="absolute top-0 left-[69px] w-[72%] h-auto pointer-events-none opacity-30 hidden lg:block" alt="" src="/figmaAssets/vector-1.svg" />
      <img className="absolute top-0 right-0 w-[26%] h-auto object-cover pointer-events-none hidden lg:block" alt="" src="/figmaAssets/image-5.png" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-white text-[26px] lg:text-[38px] leading-[1.2] mb-3">
          Школа програмування
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-medium text-white text-base lg:text-2xl leading-7 mb-8 max-w-[819px]">
          Курси допомагають освоїти роботу з комп&#39;ютером, програмування та розробку ігор, а ще розвинути аналітичне та логічне мислення
        </p>

        {/* Cards: 2-col desktop, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {coursesData.map((course) => (
            <div key={course.id} className="relative w-full">
              {/* Card */}
              <div
                className="relative backdrop-blur-[6px] bg-[#ffffff26] rounded-[20px] overflow-hidden"
                style={{ WebkitBackdropFilter: "blur(6px) brightness(100%)" }}
              >
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none z-10"
                  style={{
                    padding: "1px",
                    background: course.borderGradient,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Image */}
                <div className="relative pt-4 px-5">
                  <img className="w-full h-[180px] lg:h-[209px] rounded-[9px] object-cover" alt="Course" src={course.image} />

                  {/* Age badge */}
                  <div className="absolute top-8 left-9 flex items-center bg-white rounded-[45px] px-3 h-[44px] lg:h-[54px] min-w-[140px] lg:min-w-[160px]">
                    <div className={`absolute left-2.5 w-5 h-6 ${course.ageBadgeBg} rounded-[3px] rotate-[90deg]`} />
                    <span className="relative [font-family:'Inter',Helvetica] font-extrabold text-black text-[18px] lg:text-[22px] whitespace-nowrap pl-5">
                      {course.ageBadge}
                    </span>
                    {course.ageDotBg && (
                      <div className={`absolute right-3 w-4 h-4 ${course.ageDotBg} rounded-full`} />
                    )}
                    {course.extraDecor && (
                      <img className="absolute right-2 w-[26px] h-6" alt={course.extraDecor.alt} src={course.extraDecor.src} />
                    )}
                  </div>

                  {/* Glass corner */}
                  <div className="absolute top-7 right-8 w-[55px] h-[52px] bg-[#ffffff94] rounded-[6px] border border-solid border-[#ffffffbf] backdrop-blur-[5px]" />
                </div>

                {/* Text content */}
                <div className="px-5 py-4">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-white text-[22px] lg:text-[35px] leading-tight mb-2">
                    {course.title}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[16px] lg:text-[26px] leading-relaxed mb-5">
                    {course.description}
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[20px] lg:text-[28px] leading-none cursor-pointer">
                      Подробиці
                    </span>
                    <button
                      onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
                      className="h-auto rounded-[54px] border-[1.6px] border-solid border-[#eb6906] px-4 py-2.5 cursor-pointer"
                      style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-sm lg:text-base whitespace-nowrap">
                        Записатися
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-10">
          <button
            className="h-auto rounded-[54px] border-[1.6px] border-solid border-[#eb6906] px-8 lg:px-10 py-4 cursor-pointer"
            style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
          >
            <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-base whitespace-nowrap">
              Дивитись всі курси
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
