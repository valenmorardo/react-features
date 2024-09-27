import { useFact } from "./hooks/useFact";
import { useImgUrl } from "./hooks/useImgUrl";

const App = () => {
  const { fact, refreshFact } = useFact();
  const { imgUrl } = useImgUrl({ fact });

  const handleClick = () => {
    refreshFact();
  };
  return (
    <div>
      <h3>React - Cat Fact Image</h3>
      <section>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} />}
        <button onClick={handleClick}>Other Fact</button>
      </section>
    </div>
  );
};

export default App;
