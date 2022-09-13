import Image from "next/image";
import "./style.module.css";
import i18nEN from "./i18n/en";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {i18nEN.poweredBy}
        <span className="logo">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
