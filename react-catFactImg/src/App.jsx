import { useFact } from "./hooks/useFact";
import { useImgUrl } from "./hooks/useImgUrl";

import "./App.css";

const App = () => {
  const { fact, refreshFact } = useFact();
  const { imgUrl } = useImgUrl({ fact });

  const handleClick = () => {
    refreshFact();
  };
  return (
    <div className="page">
      <h1>React - Cat Fact Image</h1>
      <main>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} />}
        <button onClick={handleClick}>Other Fact</button>
      </main>
    </div>
  );
};

export default App;
