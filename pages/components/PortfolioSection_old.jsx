import Image from "next/image";

const PortfolioSection = ({ title, logo, description, technologies, links, color }) => {
  return (
    <section>
      <header
        className="flex justify-between pt-10 pr-10 pl-10 lg:pt-10 lg:pr-10 lg:pl-10"
        style={{ backgroundColor: color }}
      >
        <h2 className="mb-3 self-end font-serif text-2xl text-zinc-50 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="mb-3 flex h-32 w-32 items-center justify-center bg-zinc-700">
          <div className="relative h-20 w-20">
            <Image src={logo} alt={title} layout="fill" objectFit="container" />
          </div>
        </div>
      </header>
      <div className="grid grid-cols-7 gap-8 bg-zinc-800 p-10 lg:p-20">
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-3">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50">
            Description
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
              technologies.map(tech => {
                return (
                  <li key={tech} className="text-sm text-zinc-400">
                    {tech}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50">Links</h3>
          <ul className="list-none space-y-1">
            {links &&
              links.map &&
              links.map(link => {
                return (
                  <li key={link.text} className="text-sm" style={{ color }}>
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
  );
};
export default PortfolioSection;
