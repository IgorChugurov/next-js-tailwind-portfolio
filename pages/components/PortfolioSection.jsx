import Image from "next/image";

const PortfolioSection = ({ title, logo, description, technologies, links, color }) => {
  return (
    <section className="">
      <header
        className="flex h-screen justify-between pt-10 pr-10 pl-10 lg:pt-10 lg:pr-10 lg:pl-10"
        style={{ backgroundColor: color }}
      >
        <h2 className="mb-mb-2  mb-1 self-end font-serif text-2xl text-zinc-50 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="flex h-32 w-32 items-center justify-center bg-zinc-700">
          <div className="relative h-20 w-20">
            <Image src={logo} alt={title} layout="fill" objectFit="container" />
          </div>
        </div>
      </header>
    </section>
  );
};
export default PortfolioSection;
