import { useScreen } from "./useScreen";

export const useResponsiveValue = <T,>(mobile: T, tablet: T, laptop: T): T => {
  const { isMobile, isTablet } = useScreen();
  return isMobile ? mobile : isTablet ? tablet : laptop;
};
