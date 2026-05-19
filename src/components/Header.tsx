import khsLogo from "../assets/khs-logo.webp";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.webp";
export const Header = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);
  const fluid = (mobile: string, tablet: string, laptop: string) =>
    isMobile ? mobile : isTablet ? tablet : laptop;

  return (
    <header
      className="fixed z-50 overflow-hidden rounded-[5px] flex items-center justify-between"
      style={{
        top: v("12px", "20px", "30px"),
        left: v("10px", "18px", "40px"),
        right: v("10px", "18px", "40px"),
        minHeight: isMobile ? "48px" : "clamp(48px, 4.5vw, 72px)",
        paddingLeft: fluid(
          "10px",
          "clamp(10px, 1.2vw, 14px)",
          "clamp(12px, 1.6vw, 24px)",
        ),
        paddingRight: fluid(
          "10px",
          "clamp(10px, 1.2vw, 14px)",
          "clamp(12px, 1.6vw, 24px)",
        ),
        paddingTop: isMobile ? undefined : "clamp(2px, 0.4vw, 4px)",
        paddingBottom: isMobile ? undefined : "clamp(2px, 0.4vw, 4px)",
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
              "clamp(28px, 2.8vw, 34px)",
              "clamp(36px, 4vw, 52px)",
            ),
          }}
        />
      </a>
      <nav
        className="flex items-center whitespace-nowrap text-white relative"
        style={{
          gap: fluid(
            "10px",
            "clamp(10px, 1.2vw, 18px)",
            "clamp(12px, 1.6vw, 28px)",
          ),
          fontSize: fluid(
            "11px",
            "clamp(12px, 1.1vw, 14px)",
            "clamp(13px, 1.4vw, 18px)",
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
          href="#echipa-noastra"
          className="hover:opacity-70 transition-opacity text-black"
        >
          ECHIPA
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
