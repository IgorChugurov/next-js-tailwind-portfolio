import Image from "next/image";

const About = ({ profile, pofileAlt, subtitle, title, description, technologies, quickLinks }) => {
  return (
    <div>
      <section className=" bg-zinc-800 p-10  lg:p-20 ">
        <header className="flex w-full flex-wrap">
          <div className="relative mr-8 mb-8 h-32 w-32">
            <Image src={profile} alt={pofileAlt} layout="fill" objectFit="cover" />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              {subtitle}
            </p>
            <h1 className="lg:text-6lg font-serif text-4xl text-zinc-50">{title}</h1>
          </div>
        </header>
      </section>
    </div>
  );
};
export default About;
