import heroBg from "../assets/hero-bg.png";
import { useScreen } from "../hooks/useScreen";

export const Hero = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => isMobile ? m : isTablet ? t : l;

  return (
    <section className="relative w-full overflow-hidden" style={{ height: v("349px", "590px", "1068px") }}>
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-khs-dark text-center leading-normal"
          style={{ fontSize: v("40px", "64px", "96px"), maxWidth: v("304px", "514px", "930px") }}
        >
          Inspirăm spații, construim vise.
        </h1>
      </div>
    </section>
  );
};
