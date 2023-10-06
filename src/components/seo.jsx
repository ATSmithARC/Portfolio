import * as React from "react";
import SEO from "../data/seo.json";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import projectList from "../data/project-list.json";

const Seo = () => {
  const [location] = useLocation();
  
  function getPageTitle(location) {
  const locationParts = location.split("/").filter(Boolean);
  const currentPage =
    locationParts.length > 0 ? locationParts[locationParts.length - 1] : "";

  function matchProject(currentPage) {
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].href === currentPage) {
        return projectList[i].name;
      }
    }
    return SEO.title;
  }

  if (currentPage) {
    const prefix = "Andrew Smith | ";
    switch (currentPage) {
      case "about":
        return prefix + "About";
      case "contact":
        return prefix + "Contact";
      case "projects":
        return prefix + "Projects";
      case "undergraduate":
        return prefix + "Projects - Undergraduate";
      case "graduate":
        return prefix + "Projects - Graduate";
      case "pro-bono":
        return prefix + "Projects - Pro Bono";
      case "professional":
        return prefix + "Projects - Professional";
      default:
        return matchProject(currentPage);
    }
  } else {
    return SEO.title;
  }
}
  
  const pageTitle = getPageTitle(location);

  return (
    <Helmet>
      <title>{`${pageTitle}`}</title>
      <meta name="description" content={SEO.description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={SEO.url} />
      <meta property="og:title" content={`${pageTitle}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={SEO.url} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={SEO.image} />
      <link
        rel="preload"
        href={SEO.font}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default Seo;
