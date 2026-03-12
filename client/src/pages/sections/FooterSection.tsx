const menuItems = [
  { label: "Школа", id: "home" },
  { label: "Програма навчання", id: "programs" },
  { label: "Викладачі", id: "instructors" },
  { label: "Вартість", id: "pricing" },
  { label: "Контакти", id: "contacts" },
];

const contactItems = [
  { icon: "/figmaAssets/icon-mobile.svg", alt: "Phone", text: "+38(067) 676-67-67" },
  { icon: "/figmaAssets/icon-email-outline.svg", alt: "Email", text: "kidscopeacademy@gmail.com" },
  { icon: "/figmaAssets/icon-location-line.svg", alt: "Location", text: "с.Зимна Вода, вул.Івана Сірка,75" },
];

export const FooterSection = (): JSX.Element => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contacts" className="w-full bg-transparent pt-10 pb-10">
      {/* Three-column layout → stacks on mobile */}
      <div className="w-full px-5 lg:px-[62px] flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4">

        {/* Contacts */}
        <div className="flex flex-col items-start">
          <h3 className="[font-family:'Days-Regular',Helvetica] font-normal text-[#fffffd] text-[28px] lg:text-[32px] leading-tight mb-4">
            контакти
          </h3>
          <div className="flex flex-col items-start gap-5 mt-2">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <img className="w-[26px] h-[26px] lg:w-[30px] lg:h-[30px]" alt={item.alt} src={item.icon} />
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#fffffd] text-base lg:text-xl leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 [font-family:'Inter',Helvetica] font-medium text-[#b0c1c199] text-sm lg:text-[19.9px] leading-snug">
            ПРАВИЛА КОНФІДЕНЦІЙНОСТІ
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-start lg:items-center">
          <h3 className="[font-family:'Days-Regular',Helvetica] font-normal text-[#ed6905] text-[28px] lg:text-[32px] leading-tight mb-4">
            меню
          </h3>
          <div className="flex flex-col items-start lg:items-center gap-1 mt-1">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(item.id)}
                className="py-2 bg-transparent border-none cursor-pointer"
              >
                <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#fffffd] text-base lg:text-xl whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col items-start lg:items-end">
          <h3 className="[font-family:'Days-Regular',Helvetica] font-normal text-[#feca00] text-[28px] lg:text-[32px] leading-tight mb-4">
            соціальні мережі
          </h3>
          <img className="w-[220px] lg:w-[258px] h-auto mt-2" alt="Social media" src="/figmaAssets/social-media-icons.svg" />
          <div className="relative w-[180px] lg:w-[205px] h-12 lg:h-14 bg-white rounded-[32.2px] border-2 border-solid border-[#eb6906] mt-5">
            <img className="absolute top-[8px] left-[30px] w-[142px] lg:w-[162px] h-[28px] lg:h-[35px]" alt="Logo" src="/figmaAssets/logog-1.png" />
            <img className="absolute top-1.5 left-[4px] w-7 lg:w-8 h-[34px] lg:h-[39px]" alt="Icon" src="/figmaAssets/image-1-1.png" />
          </div>
          <div className="mt-4 [font-family:'Inter',Helvetica] font-medium text-[#b0c1c199] text-sm lg:text-[19.9px] leading-snug">
            Всі права застережено, 2025
          </div>
        </div>
      </div>

      {/* License text */}
      <div className="w-full flex justify-center mt-8 px-4">
        <p className="max-w-[392px] [font-family:'Inter',Helvetica] font-medium text-[#b0c1c199] text-sm lg:text-[19.9px] text-center leading-snug">
          Ліцензія на провадження освітньої діяльності у сфері позашкільної освіти
        </p>
      </div>
    </footer>
  );
};
