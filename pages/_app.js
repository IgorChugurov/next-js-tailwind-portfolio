import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Frontend developer in Ukraine"
        titleTemplate="Igor Chugurov | %s"
        defaultTitle="Software Engineer Igor Chugurov"
        description="I'm frontend developer in Ukraine. I love to build web applications with modern technologies like  TypeScript, Next.js, React,
        Tailwind, Express, Nestjs, MongoDB"
        openGraph={{
          title: "Frontend developer in Ukraine",
          description:
            "I'm frontend developer in Ukraine. I love to build web applications with modern technologies like  TypeScript, Next.js, React, Tailwind, Express, Nestjs, MongoDB",
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          site_name: "Igor Chugurov",
          images: [
            {
              url: ``,
              width: 1200,
              height: 1200,
              alt: "Igor Chugurov Frontend Fullstack Developer",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
