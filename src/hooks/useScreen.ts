import { useEffect, useState } from "react";

// Standardized breakpoints: mobile < 768, tablet 768-1279, laptop >= 1280
const TABLET = 768;
const LAPTOP = 1024;

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
