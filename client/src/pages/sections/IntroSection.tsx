const navItems = [
  { label: "Програми навчання", hasDropdown: true },
  { label: "Набір дітей", hasDropdown: true },
  { label: "Вартість навчання", hasDropdown: true },
  { label: "Курси", hasDropdown: true },
];

export const IntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(1,99,166,1)_17%,rgba(0,60,101,1)_100%)] min-h-[955px]">
      {/* Background image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Element"
        src="/figmaAssets/32284648-vs78413-2-1.png"
      />

      {/* Vector decoration - left side */}
      <img
        className="absolute top-[109px] left-[-652px] w-[893px] h-[855px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-1-2.svg"
      />

      {/* Navigation Bar */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-96px)] max-w-[1384px] h-[105px] bg-[#caf7ff26] rounded-[16.78px] border border-solid border-[#ffffff0d] flex items-center">
        {/* Logo */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-172px] w-[150px] h-[41px] bg-white rounded-3xl flex items-center">
          <img
            className="absolute top-1.5 left-1 w-6 h-[29px]"
            alt="Image"
            src="/figmaAssets/image-1.png"
          />
          <img
            className="absolute top-[7px] left-[26px] w-[121px] h-[26px]"
            alt="Logog"
            src="/figmaAssets/logog.png"
          />
        </div>

        {/* Nav items */}
        <div className="flex items-center gap-8 ml-[205px]">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-1.5 h-[25px] cursor-pointer bg-transparent border-none outline-none"
            >
              <span className="[-webkit-text-stroke:1px_#ffffff0d] [font-family:'Inter',Helvetica] font-medium text-white text-[16.8px] tracking-[0] leading-[normal] whitespace-nowrap">
                {item.label}
              </span>
              {item.hasDropdown && (
                <img
                  className="w-[25.17px] h-[25.17px]"
                  alt="Mingcute down line"
                  src="/figmaAssets/mingcute-down-line-1.svg"
                />
              )}
            </button>
          ))}
        </div>

        {/* Right side icons */}
        <div className="absolute right-[258px] top-[30px] flex items-center gap-4">
          <img
            className="w-9 h-9"
            alt="Line md phone filled"
            src="/figmaAssets/line-md-phone-filled.svg"
          />
          <img
            className="w-[69px] h-9"
            alt="Group"
            src="/figmaAssets/group-1.png"
          />
          <img
            className="w-[38px] h-[38px]"
            alt="Ix user profile"
            src="/figmaAssets/ix-user-profile-filled.svg"
          />
        </div>

        {/* CTA Button in nav */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+16px)] w-[193px] h-[51px] gap-[6.45px] p-[15.48px] rounded-[46.71px] border-[1.4px] border-solid flex items-center justify-center border-[#eb6906] cursor-pointer"
          style={{
            background:
              "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)",
          }}
        >
          <span className="[font-family:'Inter',Helvetica] font-black text-[#eb6906] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Підібрати навчання
          </span>
        </div>
      </nav>

      {/* Logo - standalone top left */}
      <div className="absolute top-[52px] left-10 w-[150px] h-[41px] bg-white rounded-3xl">
        <img
          className="absolute top-[7px] left-[26px] w-[121px] h-[26px]"
          alt="Logog"
          src="/figmaAssets/logog.png"
        />
        <img
          className="absolute top-1.5 left-1 w-6 h-[29px]"
          alt="Image"
          src="/figmaAssets/image-1.png"
        />
      </div>

      {/* Left decorative character */}
      <img
        className="absolute top-40 left-0 w-[328px] h-[444px] object-cover"
        alt="Chatgpt image oct"
        src="/figmaAssets/chatgpt-image-oct-27--2025--04-43-37-pm-1.png"
      />

      {/* Right decorative character */}
      <img
        className="absolute top-[647px] left-[1136px] w-[304px] h-[308px] object-cover"
        alt="Image"
        src="/figmaAssets/image-2.png"
      />

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-start pt-[175px] pb-0 min-h-[955px]">
        {/* Blurred heading (shadow layer) */}
        <div className="[text-shadow:1px_1px_4px_#00000045] blur-[5.55px] [font-family:'Days-Regular',Helvetica] font-normal text-[#ffffffc2] text-[110px] text-center tracking-[0] leading-[110.8px] absolute top-[175px] left-1/2 -translate-x-1/2 w-[946px]">
          Дитяча школа <br />
          програмування
        </div>

        {/* Main heading */}
        <div className="[text-shadow:1px_1px_4px_#00000045] [font-family:'Days-Regular',Helvetica] font-normal text-white text-[110px] text-center tracking-[0] leading-[110.8px] absolute top-[175px] left-1/2 -translate-x-1/2 w-[946px]">
          Дитяча школа <br />
          програмування
        </div>

        {/* KidScope Logo */}
        <img
          className="absolute top-[429px] left-1/2 -translate-x-1/2 w-[560px] h-[184px]"
          alt="Logo"
          src="/figmaAssets/logo.png"
        />

        {/* Subtitle */}
        <div className="absolute top-[636px] left-1/2 -translate-x-1/2 w-[1160px] [font-family:'Montserrat',Helvetica] text-[44.2px] text-center leading-[61.1px] font-semibold text-white tracking-[0]">
          Змінюємо дитячий досуг с ігор, YouTube i Tik Tok
          <br />
          на програмуваня та розвиток
        </div>

        {/* CTA Button */}
        <div
          className="absolute top-[818px] left-1/2 -translate-x-1/2 w-[398px] h-[105px] flex items-center justify-center gap-[13.81px] p-[33.14px] rounded-[100px] border-[3px] border-solid border-[#eb6906] cursor-pointer"
          style={{
            background:
              "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)",
          }}
        >
          <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[27.6px] tracking-[0] leading-[normal] whitespace-nowrap">
            Підібрати навчання
          </span>
        </div>
      </div>
    </section>
  );
};
