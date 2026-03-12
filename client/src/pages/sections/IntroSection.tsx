import { useState } from "react";

const navItems = [
  { label: "Програми навчання", hasDropdown: true },
  { label: "Набір дітей", hasDropdown: true },
  { label: "Вартість навчання", hasDropdown: true },
  { label: "Курси", hasDropdown: true },
];

export const IntroSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(1,99,166,1)_17%,rgba(0,60,101,1)_100%)] min-h-screen lg:min-h-[955px]"
    >
      {/* Space background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
        src="/figmaAssets/32284648-vs78413-2-1.png"
      />

      {/* Left vector decoration (desktop only) */}
      <img
        className="absolute top-[109px] left-[-652px] w-[893px] h-[855px] pointer-events-none hidden lg:block"
        alt="Vector"
        src="/figmaAssets/vector-1-2.svg"
      />

      {/* Left 3D sun character */}
      <img
        className="absolute pointer-events-none
          top-auto bottom-0 left-[-20px] w-[140px] h-auto
          lg:top-40 lg:bottom-auto lg:left-0 lg:w-[328px] lg:h-[444px] lg:object-cover"
        alt="Sun character"
        src="/figmaAssets/chatgpt-image-oct-27--2025--04-43-37-pm-1.png"
      />

      {/* Right pink character (desktop only) */}
      <img
        className="absolute top-[647px] left-[1136px] w-[304px] h-[308px] object-cover pointer-events-none hidden lg:block"
        alt="Pink character"
        src="/figmaAssets/image-2.png"
      />

      {/* ── DESKTOP NAV ── */}
      <nav className="hidden lg:flex absolute top-0 left-0 w-full h-[129px] items-center px-10 gap-0 z-10">
        {/* Logo pill */}
        <div className="relative w-[150px] h-[41px] bg-white rounded-3xl flex-shrink-0">
          <img className="absolute top-[7px] left-[26px] w-[121px] h-[26px]" alt="KidScope" src="/figmaAssets/logog.png" />
          <img className="absolute top-1.5 left-1 w-6 h-[29px]" alt="Icon" src="/figmaAssets/image-1.png" />
        </div>

        {/* Glassmorphism card */}
        <div className="flex-1 mx-6 h-[105px] bg-[#caf7ff26] rounded-[16.78px] border border-solid border-[#ffffff0d] flex items-center px-8">
          <div className="flex items-center gap-8 flex-1">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(["programs","enrollment","pricing","courses"][i])}
                className="flex items-center gap-1.5 cursor-pointer bg-transparent border-none outline-none"
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[16.8px] whitespace-nowrap">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <img className="w-[25.17px] h-[25.17px]" alt="▾" src="/figmaAssets/mingcute-down-line-1.svg" />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <img className="w-9 h-9" alt="Phone" src="/figmaAssets/line-md-phone-filled.svg" />
            <img className="w-[69px] h-9" alt="Language" src="/figmaAssets/group-1.png" />
            <img className="w-[38px] h-[38px]" alt="Profile" src="/figmaAssets/ix-user-profile-filled.svg" />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("enrollment")}
          className="flex-shrink-0 w-[193px] h-[51px] rounded-[46.71px] border-[1.4px] border-solid flex items-center justify-center border-[#eb6906] cursor-pointer"
          style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
        >
          <span className="[font-family:'Inter',Helvetica] font-black text-[#eb6906] text-base whitespace-nowrap">
            Підібрати навчання
          </span>
        </button>
      </nav>

      {/* ── MOBILE NAV ── */}
      <nav className="lg:hidden relative z-20 flex items-center justify-between px-4 py-4">
        {/* Mobile logo */}
        <div className="relative w-[120px] h-[34px] bg-white rounded-3xl flex-shrink-0">
          <img className="absolute top-[6px] left-[22px] w-[95px] h-[22px]" alt="KidScope" src="/figmaAssets/logog.png" />
          <img className="absolute top-1 left-1 w-5 h-[26px]" alt="Icon" src="/figmaAssets/image-1.png" />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 bg-[#ffffff20] rounded-xl border border-white/20"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-[#0163a6f5] flex flex-col px-6 pt-6 pb-10">
          <div className="flex items-center justify-between mb-10">
            <div className="relative w-[120px] h-[34px] bg-white rounded-3xl">
              <img className="absolute top-[6px] left-[22px] w-[95px] h-[22px]" alt="KidScope" src="/figmaAssets/logog.png" />
              <img className="absolute top-1 left-1 w-5 h-[26px]" alt="Icon" src="/figmaAssets/image-1.png" />
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-white text-3xl font-light w-10 h-10 flex items-center justify-center">
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(["programs","enrollment","pricing","courses"][i])}
                className="flex items-center justify-between w-full py-3 border-b border-white/20 bg-transparent"
              >
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <img className="w-6 h-6" alt="▾" src="/figmaAssets/mingcute-down-line-1.svg" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-8">
            <img className="w-8 h-8" alt="Phone" src="/figmaAssets/line-md-phone-filled.svg" />
            <img className="w-[60px] h-8" alt="Language" src="/figmaAssets/group-1.png" />
            <img className="w-[34px] h-[34px]" alt="Profile" src="/figmaAssets/ix-user-profile-filled.svg" />
          </div>

          <button
            onClick={() => scrollTo("enrollment")}
            className="mt-10 w-full py-4 rounded-[50px] border-[2px] border-[#eb6906] text-[#eb6906] font-extrabold text-lg [font-family:'Inter',Helvetica]"
            style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
          >
            Підібрати навчання
          </button>
        </div>
      )}

      {/* ── HERO CONTENT ── */}
      {/* Desktop layout */}
      <div className="hidden lg:block relative min-h-[955px]">
        <div className="[text-shadow:1px_1px_4px_#00000045] blur-[5.55px] [font-family:'Days-Regular',Helvetica] font-normal text-[#ffffffc2] text-[110px] text-center leading-[110.8px] absolute top-[175px] left-1/2 -translate-x-1/2 w-[946px] pointer-events-none">
          Дитяча школа <br />програмування
        </div>
        <div className="[text-shadow:1px_1px_4px_#00000045] [font-family:'Days-Regular',Helvetica] font-normal text-white text-[110px] text-center leading-[110.8px] absolute top-[175px] left-1/2 -translate-x-1/2 w-[946px]">
          Дитяча школа <br />програмування
        </div>
        <img className="absolute top-[429px] left-1/2 -translate-x-1/2 w-[560px] h-[184px]" alt="KidScope Logo" src="/figmaAssets/logo.png" />
        <div className="absolute top-[636px] left-1/2 -translate-x-1/2 w-[1160px] [font-family:'Montserrat',Helvetica] text-[44.2px] text-center leading-[61.1px] font-semibold text-white">
          Змінюємо дитячий досуг с ігор, YouTube i Tik Tok
          <br />на програмуваня та розвиток
        </div>
        <button
          onClick={() => scrollTo("enrollment")}
          className="absolute top-[818px] left-1/2 -translate-x-1/2 w-[398px] h-[105px] flex items-center justify-center rounded-[100px] border-[3px] border-solid border-[#eb6906] cursor-pointer"
          style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
        >
          <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[27.6px] whitespace-nowrap">
            Підібрати навчання
          </span>
        </button>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden relative z-10 flex flex-col items-center text-center px-5 pt-8 pb-36 min-h-[85vh] justify-center">
        <h1 className="[font-family:'Days-Regular',Helvetica] font-normal text-white text-[52px] leading-[1.05] mb-6" style={{ textShadow: "1px 1px 4px #00000045" }}>
          Дитяча школа програмування
        </h1>

        <img className="w-[280px] h-auto mb-5" alt="KidScope Logo" src="/figmaAssets/logo.png" />

        <p className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[18px] leading-[1.5] mb-8 max-w-[340px]">
          Змінюємо дитячий досуг с ігор, YouTube і Tik Tok на програмування та розвиток
        </p>

        <button
          onClick={() => scrollTo("enrollment")}
          className="w-full max-w-[320px] py-5 rounded-[100px] border-[3px] border-solid border-[#eb6906] cursor-pointer flex items-center justify-center"
          style={{ background: "url(/figmaAssets/frame-3-5.png) 50% 50% / cover, linear-gradient(0deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.9) 100%)" }}
        >
          <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[20px] whitespace-nowrap">
            Підібрати навчання
          </span>
        </button>
      </div>
    </section>
  );
};
