import { useState, useEffect } from "react";

import { getCatImg } from "../services/getCatImg";

export function useImgUrl({ fact }) {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setImgUrl(getCatImg({ fact }));
  }, [fact]);

  return { imgUrl };
}
