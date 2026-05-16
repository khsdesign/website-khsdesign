import khsLogo from "../assets/khs-logo.png";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.png";
export const Header = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);
  const fluid = (mobile: string, tablet: string, laptop: string) =>
    isMobile ? mobile : isTablet ? tablet : laptop;

  return (
    <header
      className="fixed z-50 overflow-hidden rounded-[5px] flex items-center justify-between"
      style={{
        top: v("12px", "23px", "36px"),
        left: v("10px", "22px", "54px"),
        right: v("10px", "22px", "54px"),
        minHeight: isMobile ? "48px" : "clamp(48px, 5.5vw, 90px)",
        paddingLeft: fluid(
          "10px",
          "clamp(12px, 1.8vw, 18px)",
          "clamp(16px, 2.2vw, 36px)",
        ),
        paddingRight: fluid(
          "10px",
          "clamp(12px, 1.8vw, 18px)",
          "clamp(16px, 2.2vw, 36px)",
        ),
        paddingTop: isMobile ? undefined : "clamp(3px, 0.5vw, 6px)",
        paddingBottom: isMobile ? undefined : "clamp(3px, 0.5vw, 6px)",
      }}
    >
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="relative"
      >
        <img
          src={khsLogo}
          alt="KHS"
          className="w-auto"
          style={{
            height: fluid(
              "26px",
              "clamp(32px, 3.5vw, 40px)",
              "clamp(44px, 4.5vw, 64px)",
            ),
          }}
        />
      </a>
      <nav
        className="flex items-center whitespace-nowrap text-white relative"
        style={{
          gap: fluid(
            "10px",
            "clamp(12px, 1.6vw, 28px)",
            "clamp(16px, 2.4vw, 48px)",
          ),
          fontSize: fluid(
            "11px",
            "clamp(13px, 1.4vw, 16px)",
            "clamp(14px, 1.6vw, 20px)",
          ),
          letterSpacing: "0.03em",
        }}
      >
        <a
          href="#servicii"
          className="hover:opacity-70 transition-opacity text-black"
        >
          SERVICII
        </a>
        <a
          href="#showroom"
          className="hover:opacity-70 transition-opacity text-black"
        >
          SHOWROOM
        </a>
        <a
          href="#catalog"
          className="hover:opacity-70 transition-opacity text-black"
        >
          CATALOG
        </a>
        <a
          href="#contact"
          className="hover:opacity-70 transition-opacity text-black"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};
