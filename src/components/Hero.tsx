import heroBg from "../assets/hero-background.jpeg";
import heroBgDesktop from "../assets/hero-background-laptop.png";
import { useScreen } from "../hooks/useScreen";

export const Hero = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  return (
    <section
      className="relative w-full"
      style={{ minHeight: v("auto", "80vh", "100vh") }}
    >
      <img
        src={isMobile ? heroBg : heroBgDesktop}
        alt=""
        className={
          isMobile
            ? "w-full h-auto block"
            : "absolute inset-0 w-full h-full object-cover"
        }
      />
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
