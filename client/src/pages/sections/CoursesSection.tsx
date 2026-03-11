import { Button } from "@/components/ui/button";

// Course data for the 2x2 grid
const coursesData = [
  {
    id: 1,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "7-12 років",
    ageBadgeBg: "bg-[#f09ac2]",
    ageDotBg: "bg-[#199bd8]",
    title: "Візуальнепрограмування\nв Minecraft",
    description: "Програмування на мові Snap\nв популярній грі Minecraft",
    borderGradient:
      "linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.2) 100%)",
    extraDecor: null,
  },
  {
    id: 2,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "12-14 років",
    ageBadgeBg: "bg-[#b897c6]",
    ageDotBg: null,
    title: "Scratch програмування",
    description: "Програмування на мові Snap\nв популярній грі Minecraft",
    borderGradient:
      "linear-gradient(180deg,rgba(255,255,255,0.48) 0%,rgba(255,255,255,0.1) 100%)",
    extraDecor: { src: "/figmaAssets/vector-3.svg", alt: "Vector" },
  },
  {
    id: 3,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "14-16 років",
    ageBadgeBg: "bg-[#8ee55b]",
    ageDotBg: null,
    title: "Візуальнепрограмування\nв Minecraft",
    description: "Програмування на мові Snap\nв популярній грі Minecraft",
    borderGradient:
      "linear-gradient(180deg,rgba(255,255,255,0.2) 0%,rgba(255,255,255,1) 100%)",
    extraDecor: { src: "/figmaAssets/ellipse-32.svg", alt: "Ellipse" },
  },
  {
    id: 4,
    image: "/figmaAssets/rectangle-5-3.png",
    ageBadge: "7-12 років",
    ageBadgeBg: "bg-white",
    ageDotBg: null,
    title: "Python для дітей",
    description: "Програмування на мові Snap\nв популярній грі Minecraft",
    borderGradient:
      "linear-gradient(180deg,rgba(255,255,255,0.2) 0%,rgba(255,255,255,1) 100%)",
    extraDecor: null,
  },
];

export const CoursesSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(2,36,60,1)_0%,rgba(18,115,183,1)_55%,rgba(255,255,255,1)_100%)] py-12">
      {/* Decorative background images */}
      <img
        className="absolute w-[24.31%] h-auto top-[51%] left-0 pointer-events-none"
        alt="Rectangle"
        src="/figmaAssets/rectangle.png"
      />
      <img
        className="absolute w-[28.19%] h-auto top-[28%] left-[78%] pointer-events-none"
        alt="Rectangle"
        src="/figmaAssets/rectangle-1.png"
      />
      <img
        className="absolute bottom-0 left-0 w-[382px] h-auto object-cover pointer-events-none"
        alt="Image"
        src="/figmaAssets/image-6.png"
      />
      <img
        className="absolute w-[81.76%] h-auto top-[6%] left-[17%] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-6.svg"
      />
      <img
        className="absolute top-0 left-[69px] w-[72%] h-auto pointer-events-none opacity-30"
        alt="Vector"
        src="/figmaAssets/vector-1.svg"
      />
      {/* Rocket image top right */}
      <img
        className="absolute top-0 right-0 w-[26%] h-auto object-cover pointer-events-none"
        alt="Image"
        src="/figmaAssets/image-5.png"
      />

      {/* Main content container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        {/* Section heading */}
        <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-white text-[38px] tracking-[0] leading-[1.2] mb-4">
          Школа програмування
        </h2>

        {/* Section subtitle */}
        <p className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[0] leading-8 mb-10 max-w-[819px]">
          Курси допомагають освоїти роботу з комп&#39;ютером, програмування та
          розробку ігор, а ще розвинути аналітичне та логічне мислення
        </p>

        {/* 2x2 Course cards grid */}
        <div className="grid grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <div key={course.id} className="relative w-full h-[572px]">
              {/* Glassmorphism card background */}
              <div
                className="absolute inset-0 backdrop-blur-[6.05px] bg-[#ffffff26] rounded-[19.84px] border-none"
                style={{
                  WebkitBackdropFilter: "blur(6.05px) brightness(100%)",
                }}
              >
                {/* Gradient border overlay */}
                <div
                  className="absolute inset-0 rounded-[19.84px] pointer-events-none"
                  style={{
                    padding: "1px",
                    background: course.borderGradient,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </div>

              {/* Course image */}
              <img
                className="absolute top-[22px] left-8 w-[calc(100%-64px)] h-[209px] rounded-[8.82px] object-cover"
                alt="Course"
                src={course.image}
              />

              {/* Age badge */}
              <div className="absolute top-11 left-14 h-[54px] flex items-center">
                <div className="relative flex items-center bg-white rounded-[45px] px-4 h-[54px] min-w-[160px]">
                  {/* Colored accent bar inside badge */}
                  <div
                    className={`absolute left-3 w-[26px] h-[30px] ${course.ageBadgeBg} rounded-[3px] rotate-[90.24deg]`}
                  />
                  <span className="relative [font-family:'Inter',Helvetica] font-extrabold text-black text-[22px] tracking-[0] leading-[30.4px] whitespace-nowrap pl-6">
                    {course.ageBadge}
                  </span>
                  {/* Optional dot decoration */}
                  {course.ageDotBg && (
                    <div
                      className={`absolute right-3 w-5 h-5 ${course.ageDotBg} rounded-full`}
                    />
                  )}
                  {/* Optional extra decoration image */}
                  {course.extraDecor && (
                    <img
                      className="absolute right-3 w-[30px] h-7"
                      alt={course.extraDecor.alt}
                      src={course.extraDecor.src}
                    />
                  )}
                </div>
              </div>

              {/* Frosted glass corner button */}
              <div className="absolute top-[38px] right-8 w-[69px] h-[66px] bg-[#ffffff94] rounded-[5.51px] border border-solid border-[#ffffffbf] backdrop-blur-[5.45px]" />

              {/* Course title */}
              <div className="absolute top-64 left-8 w-[calc(100%-64px)] [font-family:'Inter',Helvetica] font-bold text-white text-[35.3px] tracking-[0] leading-[46.3px] whitespace-pre-line">
                {course.title}
              </div>

              {/* Course description */}
              <div className="absolute top-[366px] left-8 [font-family:'Inter',Helvetica] font-medium text-white text-[26.5px] tracking-[0] leading-8 whitespace-pre-line">
                {course.description}
              </div>

              {/* Details link */}
              <div className="absolute top-[499px] left-8 [text-shadow:1px_1px_1px_#00000040] [font-family:'Inter',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[28.7px] whitespace-nowrap cursor-pointer">
                Подробиці
              </div>

              {/* Sign up button */}
              <Button
                className="absolute top-[499px] right-8 h-auto rounded-[53.52px] border-[1.61px] border-solid border-[#eb6906] bg-[linear-gradient(0deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_100%)] px-[17.74px] py-[10px]"
                variant="outline"
              >
                <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Записатися
                </span>
              </Button>
            </div>
          ))}
        </div>

        {/* View all courses button */}
        <div className="flex justify-center mt-12">
          <Button
            className="h-auto rounded-[53.52px] border-[1.61px] border-solid border-[#eb6906] bg-[linear-gradient(0deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_100%)] px-10 py-4"
            variant="outline"
          >
            <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Дивитись всі курси
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
