import { createContext } from "react";

export const siteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const websiteInfo = {
    title: "",
    custom: true,
    modified: true,
    logo: null,
    largeLogo: null,
    tagline: "",
    menuList: [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "Templates", link: "/templates" },
      { id: 3, name: "Docs", link: "/docs" },
      { id: 4, name: "Blog", link: "/blog" },
      { id: 5, name: "About", link: "/about" },
      { id: 6, name: "Contact", link: "/contact" },
    ],
    menuButtons: [{ name: "contact", link: "contact" }],
    menuExpanded: [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "Templates", link: "/templates" },
      { id: 3, name: "Docs", link: "/docs" },
      { id: 4, name: "About", link: "/about" },
      { id: 5, name: "Blog", link: "/blog" },
    ],
    about: "",
    aboutExpanded: "",
    footer: "",
  };

  const menuList = [
    {
      name: "Free Code Camp",
      link: "https://www.freecodecamp.org/news",
    },
    {
      name: "Code Academy",
      link: "https://www.codecademy.com/",
    },
    {
      name: "Lighthouse Labs",
      link: "https://www.lighthouselabs.ca/",
    },
  ];

  return (
    <siteContext.Provider
      value={{
        menuList,
        websiteInfo,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
