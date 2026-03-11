// Instructor data
const instructors = [
  {
    id: 1,
    image: "/figmaAssets/ellipse-1.svg",
    name: "Имя Фамилия",
    description: (
      <>
        -Програмування на мові Snap
        <br />в популярній грі Minecraft
        <br />
        -Програмування на мові Snap
        <br />в популярній грі Minecraft
      </>
    ),
    showButton: true,
  },
  {
    id: 2,
    image: "/figmaAssets/ellipse-2.svg",
    name: "Имя Фамилия",
    description: (
      <>
        -Програмування на мові Snap
        <br />в популярній грі Minecraft
        <br />
        -Програмування на мові Snap
        <br />в популярній грі Minecraft
      </>
    ),
    showButton: true,
  },
  {
    id: 3,
    image: "/figmaAssets/ellipse-3.svg",
    name: "Имя Фамилия",
    description: (
      <>
        -Програмування на мові Snap
        <br />в популярній грі Minecraft
        <br />
        -Програмування на мові Snap
        <br />в популярній грі Minecraft
      </>
    ),
    showButton: true,
  },
];

export const InstructorsSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full py-12 px-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.69) 100%), linear-gradient(180deg,rgba(255,255,255,0.8) 0%,rgba(255,255,255,0) 100%), url(/figmaAssets/section---about-teachers-.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 100%)",
      }}
    >
      {/* Decorative image top right */}
      <img
        className="absolute top-[31px] right-[3px] w-[302px] h-[257px] pointer-events-none"
        alt="Ksdfvzkjnzsdc"
        src="/figmaAssets/ksdfvzkjnzsdc.png"
      />

      <div className="max-w-[1192px] mx-auto px-[124px] box-content">
        {/* Section heading */}
        <h2 className="[font-family:'Days-Regular',Helvetica] font-normal text-black text-4xl tracking-[0] leading-9 mb-6">
          Наші
          <br />
          Викладачі
        </h2>

        {/* Section subtitle */}
        <p className="[font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 max-w-[819px] mb-10">
          Курси допомагають освоїти роботу з комп&#39;ютером, програмування та
          розробку ігор, а ще розвинути аналітичне та логічне мислення
        </p>

        {/* Instructors grid */}
        <div className="grid grid-cols-3 gap-8 w-full">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="flex flex-col items-start">
              {/* Profile image */}
              <img
                className="w-[247px] h-[241px] object-cover ml-[40px]"
                alt="Ellipse"
                src={instructor.image}
              />

              {/* Name */}
              <div className="mt-4 [font-family:'Inter',Helvetica] font-bold text-black text-[34.5px] tracking-[0] leading-[45.3px]">
                {instructor.name}
              </div>

              {/* Description */}
              <div className="mt-4 [font-family:'Inter',Helvetica] font-medium text-black text-[21.6px] tracking-[0] leading-[33.5px]">
                {instructor.description}
              </div>

              {/* Button */}
              {instructor.showButton && (
                <button
                  className="mt-6 flex items-center justify-center gap-[7.39px] px-[17.74px] py-[17.74px] rounded-[53.52px] border-[1.61px] border-solid border-[#eb6906] cursor-pointer"
                  style={{
                    background:
                      "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)",
                    minWidth: "176px",
                    height: "58px",
                  }}
                >
                  <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Детальніше
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
