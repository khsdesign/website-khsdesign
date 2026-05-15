import heroBg from "../assets/hero-background.jpeg";
import { useScreen } from "../hooks/useScreen";

export const Hero = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  return (
    <section className="relative w-full">
      <img src={heroBg} alt="" className="w-full h-auto block" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-black text-center leading-normal"
          style={{
            fontSize: v("40px", "64px", "96px"),
            maxWidth: v("304px", "514px", "930px"),
          }}
        >
          Inspirăm spații, construim vise.
        </h1>
      </div>
    </section>
  );
};
