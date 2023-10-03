import * as React from "react";
import SEO from "../data/seo.json";
import { Helmet } from "react-helmet-async";

const Seo = () => {
  const url = SEO.url;
  return (
    <Helmet>
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={SEO.image} />
      <link rel="preload" href={SEO.font} as="font" type="font/woff2" crossorigin/>
    </Helmet>
  );
};

export default Seo;
