export const getFact = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  const Fact = data.fact;
  return Fact;
};
