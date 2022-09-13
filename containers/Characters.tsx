import { useState, useEffect } from "react";
import { Header, Footer } from "../components";
import Main from "./Main";

import { getCharacters } from "../pages/api";

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const data = await getCharacters();
    setCharacters(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main characters={characters}/>
      <Footer />
    </>
  );
};

export default Characters;
