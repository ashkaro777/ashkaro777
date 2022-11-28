import { useCallback, useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollCallback = useCallback((e) => {
    if (typeof window !== "undefined") {
      const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;

      const h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      const scrollPercentage =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

      setScrollY(scrollY);
      setScrollPercentage(scrollPercentage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollCallback);
    }

    return () => {
      window.addEventListener("scroll", scrollCallback);
    };
  }, [scrollCallback]);

  return {
    scrollY,
    scrollPercentage,
  };
};

export default useScroll;
