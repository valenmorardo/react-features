import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");

  const alreadySearched = useRef(false)
  

  useEffect(() => { // errores
    if (search.length < 3) {
        return
    }
    return
  }, [search]);

  return {search, updateSearch, alreadySearched}
}
