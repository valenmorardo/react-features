import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import './Filters.css'

export function Filters() {
  const categoryFilterId = useId();
  const minPriceCategoryFilterId = useId();

  const { setFilters, filters } = useFilters();

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
    <section className="filters-container">
      <div className="range-filter">
        <label htmlFor={minPriceCategoryFilterId}>Precio a partir de: </label>
        <input
          id={minPriceCategoryFilterId}
          type="range"
          min="0"
          max="5000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        ></input>
        <span>${filters.minPrice}</span>
      </div>

      <div className="category-filter">
        <label htmlFor={categoryFilterId}>Categoria: </label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todo</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="vehicle">Vehicle</option>
        </select>
      </div>
    </section>
  );
}
