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
      { name: "Blog", link: "/blog" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
    menuButtons: [
      { name: "Join", link: "join" },
      { name: "Sign", link: "login" },
    ],
    menuExpanded: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },

      { name: "Blog", link: "/blog" },
      { name: "Sign", link: "/login" },
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
        images,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
