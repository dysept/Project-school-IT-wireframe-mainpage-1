const menuItems = [
  { label: "Школа", hasDropdown: false },
  { label: "Програма навчання", hasDropdown: true },
  { label: "Викладачі", hasDropdown: false },
  { label: "Вартість", hasDropdown: false },
  { label: "Контакти", hasDropdown: true },
];

const contactItems = [
  {
    icon: "/figmaAssets/icon-mobile.svg",
    alt: "Icon mobile",
    text: "+38(067) 676-67-67",
  },
  {
    icon: "/figmaAssets/icon-email-outline.svg",
    alt: "Icon email outline",
    text: "kidscopeacademy@gmail.com",
  },
  {
    icon: "/figmaAssets/icon-location-line.svg",
    alt: "Icon location line",
    text: "с.Зимна Вода, вул.Івана Сірка,75",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-transparent pt-10 pb-10">
      {/* Three-column layout */}
      <div className="w-full px-[62px] flex flex-row justify-between items-start gap-4">
        {/* Left column - Contacts */}
        <div className="flex flex-col items-start gap-0 min-w-[260px]">
          <h3 className="[font-family:'Days-Regular',Helvetica] font-normal text-[#fffffd] text-[32px] tracking-[0] leading-[27.5px] whitespace-nowrap mb-6">
            контакти
          </h3>
          <div className="flex flex-col items-start gap-7 mt-4">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
              >
                <img
                  className="relative w-[30px] h-[30px]"
                  alt={item.alt}
                  src={item.icon}
                />
                <span className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#fffffd] text-xl tracking-[0] leading-[27.5px] whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          {/* Privacy policy */}
          <div className="mt-8 w-[306px] [font-family:'Inter',Helvetica] font-medium text-[#b0c1c199] text-[19.9px] tracking-[0] leading-[27.5px]">
            ПРАВИЛА КОНФІДЕНЦІЙНОСТІ
          </div>
        </div>

        {/* Center column - Menu */}
        <div className="flex flex-col items-center gap-0">
          <h3 className="[font-family:'Days-Regular',Helvetica] font-normal text-[#ed6905] text-[32px] tracking-[0] leading-[27.5px] whitespace-nowrap mb-4">
            меню
          </h3>
          <div className="flex flex-col items-center justify-center mt-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-2.5 px-0 py-2.5 relative flex-[0_0_auto] -mt-2 first:mt-0 cursor-pointer"
              >
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <span className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-[#fffffd] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <img
                      className="relative w-[30px] h-[30px]"
                      alt="Mingcute down line"
                      src="/figmaAssets/mingcute-down-line.svg"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Social networks */}
        <div className="flex flex-col items-end gap-0 min-w-[260px]">
          <h3 className="[font-family:'Days-Regular',Helvetica] font-normal text-[#feca00] text-[32px] tracking-[0] leading-[27.5px] whitespace-nowrap mb-6 self-end">
            соціальні мережі
          </h3>
          {/* Social media icons */}
          <img
            className="w-[258px] h-[68px] mt-4"
            alt="Social media icons"
            src="/figmaAssets/social-media-icons.svg"
          />
          {/* Logo badge */}
          <div className="relative w-[205px] h-14 bg-white rounded-[32.2px] border-2 border-solid border-[#eb6906] mt-6">
            <img
              className="absolute top-[9px] left-[35px] w-[162px] h-[35px]"
              alt="Logog"
              src="/figmaAssets/logog-1.png"
            />
            <img
              className="absolute top-2 left-[5px] w-8 h-[39px]"
              alt="Image"
              src="/figmaAssets/image-1-1.png"
            />
          </div>
          {/* All rights reserved */}
          <div className="mt-6 [font-family:'Inter',Helvetica] font-medium text-[#b0c1c199] text-[19.9px] tracking-[0] leading-[27.5px] whitespace-nowrap">
            Всі права застережено, 2025
          </div>
        </div>
      </div>

      {/* Bottom license text */}
      <div className="w-full flex justify-center mt-8 px-4">
        <p className="w-[392px] [font-family:'Inter',Helvetica] font-medium text-[#b0c1c199] text-[19.9px] text-center tracking-[0] leading-[27.5px]">
          Ліцензія на провадження освітньої діяльності у сфері позашкільної
          освіти
        </p>
      </div>
    </footer>
  );
};
