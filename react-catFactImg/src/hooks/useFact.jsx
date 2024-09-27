import { useState, useEffect } from "react";
import { getFact } from "../services/getRandomFact";

export function useFact() {
  const [fact, setFact] = useState("");

  const refreshFact = () => {
    getFact().then((fact) => setFact(fact));
  };

  useEffect(() => {
    refreshFact();
  }, []);

  return { fact, refreshFact };
}
