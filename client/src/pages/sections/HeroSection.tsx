export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[718px]">
      {/* Background container with group image */}
      <div className="relative w-full min-h-[718px] flex justify-center bg-[url(/figmaAssets/group.png)] bg-[100%_100%]">
        {/* CTA Badge / Button - positioned in lower-left area of the background */}
        <div className="absolute bottom-[199px] left-[calc(50%_-_555px)] w-[398px] h-[105px] gap-[13.81px] p-[33px] rounded-[100px] border-[3px] border-solid rotate-[2.68deg] flex items-center justify-center border-[#eb6906] [background:url(/figmaAssets/frame-3-5.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_100%)]">
          <span className="relative w-fit [font-family:'Inter',Helvetica] font-extrabold text-[#eb6906] text-[27.6px] tracking-[0] leading-[normal] whitespace-nowrap">
            Запис на навчання
          </span>
        </div>

        {/* Main headline text */}
        <div className="absolute top-[211px] left-[149px] w-[658px] rotate-[2.40deg] [font-family:'Days-Regular',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[57px]">
          у 97% батьків позитивні відгуки про школу вже після першого заняття
        </div>

        {/* Mascot / character image */}
        <img
          className="absolute top-[148px] left-[720px] w-[441px] h-[441px] object-cover"
          alt="Image"
          src="/figmaAssets/image-8.png"
        />
      </div>
    </section>
  );
};
