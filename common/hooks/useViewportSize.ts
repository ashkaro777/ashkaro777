import { useCallback, useEffect, useState } from "react";

const useViewportSize = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const resizeCallback = useCallback(() => {
    if (typeof window !== "undefined") {
      const viewportHeight = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const viewportWidth = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      setViewportHeight(viewportHeight);
      setViewportWidth(viewportWidth);
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
    viewportHeight,
    viewportWidth,
  };
};

export default useViewportSize;
