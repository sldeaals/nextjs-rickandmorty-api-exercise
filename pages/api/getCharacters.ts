const getCharacters = async () => {
  try {
    const url = "https://rickandmortyapi.com/api/character/?page=42";
    const res = await fetch(url);
    const data = await res.json();
    return data?.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getCharacters;
