import { memo, useMemo, useCallback } from "react";
import Card from "../../components/Card";
import i18nEN from "./i18n/en";
import Css from "./style.module.css";

type TProps = {
  characters: TCharacters[];
}

type TCharacters = {
  id?: string;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  image?: string;
};

const Main = memo<TProps>(({ characters }) => {
  const mapCharacters = useMemo(
    () => characters.map((character) => {
      const { id, name, status, species, gender, image } = character;
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
    }),
    [characters]
  );

  return (
    <main className={Css["main"]}>
      <h1 className={Css["title"]}>{i18nEN.title}</h1>
      <div className={Css["content"]}>{mapCharacters}</div>
    </main>
  );
});

export default Main;
