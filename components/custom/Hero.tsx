import Logo from './Logo';

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-screen w-full bg-transparent flex justify-center items-center gap-8 md:flex-row flex-col max-lg:px-6"
    >
      <Logo className="w-[180px] h-[180px] lg:w-[256px] lg:h-[256px]" />

      <div className="flex items-center justify-center rounded-xl border-4 border-[#57463F] px-2 md:px-4 gap-4 py-2 outline-[3px] outline-[#110d0c] bg-white">
        <div className="size-2 md:block hidden bg-[#57463F] rounded-full" />
        <div className="flex flex-col gap-0">
          <h1 className="text-lg lg:text-3xl font-semibold text-gray-700">
            Residenza Sanitaria Assistenziale
          </h1>
          <p className="text-xl lg:text-4xl max-md:text-center font-bold text-[#57463F] italic">
            &quot;Ca&apos; Mia&quot;
          </p>
        </div>
        <div className="size-2 md:block hidden bg-[#57463F] rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
