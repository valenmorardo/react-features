import "./Header.css";

import { Filters } from "../Filters/Filters";

const Header = () => {
  return (
    <header className="header">
      <h1>React Shop</h1>
      <Filters />
    </header>
  );
};

export default Header;
