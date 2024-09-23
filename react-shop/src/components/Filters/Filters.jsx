import { useId } from "react";

import { useContext } from "react";

import { FiltersContext } from "../../context/filtersContext";

export function Filters() {
  const priceFilterId = useId();
  const cateoryFilterId = useId();

  const { filters, setFilters } = useContext(FiltersContext);

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section>
      <div>
        <label htmlFor={priceFilterId}>Precio a partir de: </label>
        <input
          id={priceFilterId}
          type="range"
          min="0"
          max="35000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={cateoryFilterId}>Categoria:</label>
        <select id={cateoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="smartphones">Smartphones</option>
          <option value="vehicle">Vehicle</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  );
}
