import { useCallback, useEffect, useState } from "react";

const usePageHeight = () => {
  const [pageHeight, setPageHeight] = useState(0);

  const resizeCallback = useCallback(() => {
    if (typeof window !== "undefined") {
      const body = document.body,
        html = document.documentElement;

      const pageHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      setPageHeight(pageHeight);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resizeCallback);
    }

    return () => {
      window.addEventListener("resize", resizeCallback);
    };
  }, [resizeCallback]);

  useEffect(() => {
    resizeCallback();
  }, [resizeCallback]);

  return {
    pageHeight,
  };
};

export default usePageHeight;
