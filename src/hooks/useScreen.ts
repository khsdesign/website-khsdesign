import { useEffect, useState } from "react";

const TABLET = 834;
const LAPTOP = 1512;

export const useScreen = () => {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return {
    isMobile: width < TABLET,
    isTablet: width >= TABLET && width < LAPTOP,
    isLaptop: width >= LAPTOP,
  };
};
