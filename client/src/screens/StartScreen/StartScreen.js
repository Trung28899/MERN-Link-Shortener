import React, { useEffect } from "react";
import classes from "./StartScreen.module.css";
import LinkBox from "../../components/LinkBox/LinkBox";
import { useSelector } from "react-redux";

const StartScreen = ({ history }) => {
  const { homeScreenStyle, linkContainer } = classes;
  const domainChosen = useSelector((state) => state.appReducer.domainName);
  const domainArray = [
    { name: "linker.link", url: "https://linker.link" },
    { name: "linker.live", url: "https://linker.live" },
    { name: "linkweb.link", url: "https://linkweb.link" },
    { name: "hosthub.live", url: "https://hosthub.live" },
    { name: "vietweb.site", url: "https://vietweb.site" },
    { name: "rutgon.live", url: "https://rutgon.live" },
  ];

  const linkList = domainArray.map((value, index) => (
    <LinkBox content={value.name} url={value.url} key={index} />
  ));

  useEffect(() => {
    domainChosen && history.push("/addlink");
  }, [domainChosen]);

  return (
    <div className={homeScreenStyle}>
      <h3>
        Welcome To TrungTrinh's <br /> Link Shortener!
      </h3>
      <h4>Choose the domain name to shorten you link</h4>
      <div className={linkContainer}>{linkList}</div>
    </div>
  );
};

export default StartScreen;
