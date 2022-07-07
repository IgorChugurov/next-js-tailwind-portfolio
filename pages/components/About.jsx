import Image from "next/image";

const About = ({ profile, pofileAlt, subtitle, title, description, technologies, quickLinks }) => {
  return (
    <div>
      <section className=" bg-zinc-800 p-10  lg:p-20">
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
        <div className="my-12 grid grid-cols-7 gap-8">
          <div className="col-span-7 flex max-w-xl flex-col lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50">
              About
            </h3>
            <p className="text-sm text-zinc-400">{description}</p>
          </div>
          <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50">
              Technologies
            </h3>
            <ul className="list-none space-y-1">
              {technologies &&
                technologies.map &&
                technologies.map((tech) => {
                  return (
                    <li key={tech} className="text-sm text-zinc-400">
                      {tech}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50">
              Quick Links
            </h3>
            <ul className="list-none space-y-1">
              {quickLinks &&
                quickLinks.map &&
                quickLinks.map((link) => {
                  return (
                    <li key={link.text} className="text-sm text-[#fbbf24]">
                      <a
                        className="hover:underline"
                        href={link.href}
                        target="_blank"
                        title="Link to this page"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
