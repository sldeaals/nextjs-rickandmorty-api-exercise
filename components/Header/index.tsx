import Head from "next/head";
import i18nEN from "./i18n/en";
import "./style.module.css";

const Header: React.FC = () => {
  return (
    <Head>
      <title>{i18nEN.title}</title>
      <meta
        name="description"
        content="Rick and Morty characters api exercise"
      />
      <link rel="icon" href="/logoicon.svg" />
    </Head>
  );
};

export default Header;
