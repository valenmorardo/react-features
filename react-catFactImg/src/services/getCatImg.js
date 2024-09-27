export const getCatImg = ({ fact }) => {
  const firstWord = fact.split(" ", 1);
  const imgSrc = `https://cataas.com/cat/says/${firstWord}`;
  return imgSrc;
};
