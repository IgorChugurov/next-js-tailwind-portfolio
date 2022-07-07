import { Layout, About, PortfolioSection } from "./components";
const Homepage = () => {
  const technologies = [
    "TypeScript",
    "JavaScript",
    "React, Next.js",
    "CSS, SCSS",
    "Tailwindcss",
    "MongoDB",
    "NodeJS",
    "Express, Nest.js",
    ,
  ];
  const quickLinks = [
    { text: "GitHub", href: "https://github.com/IgorChugurov" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/chugurovigor/" },
    { text: "Email", href: "mailto:igorchugurov@gmail.com" },
  ];
  const portfolioItems = [
    {
      title: "Sebo-Ukraine",
      logo: "/sebo-logo.svg",
      color: "#002a5b",

      description: "Online store for a regional representative of the Sebo brand.",
      technologies: ["TypeScript", "JavaScript", "React, Next.js", "CSS, SCSS", "Tailwindcss"],
      links: [{ text: "Site", href: "http://sebo-ukraine.com" }],
    },

    {
      title: "Mebelmag",
      logo: "/mebelmag.svg",
      color: "#561824",

      description: `Marketplace for manufacturers and sellers of furniture. Close the dialog
        The goal of the project is to create a trading platform where Ukrainian furniture manufacturers will be represented. Creation of a unified catalog with a standard set of characteristics and characteristics for each category of goods.`,
      technologies: ["TypeScript", "JavaScript", "React, Next.js", "CSS, SCSS", "Tailwindcss"],
      links: [{ text: "Site", href: "https://mebel-mag.com.ua/" }],
    },

    {
      title: "Blockbustermall",
      logo: "/blockbastermall.svg",
      color: "#eb3c27",

      description:
        "Corporate website for the largest shopping and entertainment center in Ukraine.",
      technologies: ["TypeScript", "JavaScript", "React, Next.js", "CSS, SCSS", "Tailwindcss"],
      links: [{ text: "Site", href: "https://blockbustermall.com.ua/" }],
    },

    {
      title: "Detonate",
      logo: "/detonate.png",
      color: "#3d3d3d",

      description: "Online store for branded clothing.",
      technologies: ["TypeScript", "JavaScript", "React, Next.js", "CSS, SCSS", "Tailwindcss"],
      links: [{ text: "Site", href: "https://dtn8store.com/" }],
    },
  ];

  return (
    <Layout>
      <About
        profile="/igorchugurov.jpg"
        pofileAlt="Igor Chugurov"
        subtitle="Software Engineer"
        title="Igor Chugurov"
        description={`I'm a full-stack developer in Ukrain. I have created and designed professional websites for clients ranging from big interprises, Photographers, entrepreneurs, and small businesses. I specialize in keeping visitors focused and interested. I have excellent knowledge of software development methodologies, frameworks, and Software Development Life Cycle.`}
        technologies={technologies}
        quickLinks={quickLinks}
      />
      {portfolioItems.map(({ title, logo, description, technologies, links, color }, i) => {
        return (
          <PortfolioSection
            key={`title${i}`}
            title={title}
            color={color}
            description={description}
            links={links}
            technologies={technologies}
            logo={logo}
          />
        );
      })}
    </Layout>
  );
};

export default Homepage;
