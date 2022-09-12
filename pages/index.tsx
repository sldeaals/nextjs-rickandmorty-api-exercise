import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import { Card } from "../components";

const Character: NextPage = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const url = "https://rickandmortyapi.com/api/character/?page=42";
    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data?.results);
  };

  const drawCards = (data: any) => {
    const { id, name, status, species, gender, image } = data;
    return (
      <Card
        key={id}
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        image={image}
      />
    );
  };

  const mapCharacters = () =>
    characters.map((character) => drawCards(character));

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Head>
        <title>Rick and Morty characters</title>
        <meta
          name="description"
          content="Rick and Morty characters api exercise"
        />
        <link rel="icon" href="/logoicon.svg" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Rick and Morty characters</h1>
        <div className={styles.content}>{mapCharacters()}</div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Character;
