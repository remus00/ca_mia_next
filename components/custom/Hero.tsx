import Logo from './Logo';

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-screen w-full bg-transparent flex justify-center items-center gap-8"
    >
      <Logo className="w-[256px] h-[256px]" />
      <div className="flex items-center justify-center rounded-xl border-4 border-[#57463F] px-4 gap-4 py-2 outline-[3px] outline-[#110d0c] bg-white">
        <div className="size-2 bg-[#57463F] rounded-full" />
        <div className="flex flex-col gap-0">
          <h1 className="text-3xl font-semibold text-gray-700">
            Residenza Sanitaria Assistenziale
          </h1>
          <p className="text-4xl font-bold text-[#57463F] italic">&quot;Ca&apos; Mia&quot;</p>
        </div>
        <div className="size-2 bg-[#57463F] rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
