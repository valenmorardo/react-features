import { useEffect, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");

  useEffect(() => { // errores
    if (search.length < 3) {
        return
    }
    return
  }, [search]);

  return {search, updateSearch}
}
