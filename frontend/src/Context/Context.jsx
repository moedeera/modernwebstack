import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const siteContext = createContext({});
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "light";
};
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

  const [searchPage, setSearchPage] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme());
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <siteContext.Provider
      value={{
        menuList,
        websiteInfo,
        searchPage,
        setSearchPage,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
