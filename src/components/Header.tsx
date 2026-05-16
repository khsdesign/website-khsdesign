import khsLogo from "../assets/khs-logo.png";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.png";
export const Header = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  return (
    <header
      className="fixed z-50 overflow-hidden rounded-[5px] flex items-center justify-between"
      style={{
        top: v("12px", "23px", "36px"),
        left: v("10px", "22px", "54px"),
        right: v("10px", "22px", "54px"),
        height: v("48px", "71px", "121px"),
        paddingLeft: v("10px", "22px", "54px"),
        paddingRight: v("10px", "22px", "54px"),
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
          style={{ height: v("26px", "45px", "79px") }}
        />
      </a>
      <nav
        className="flex text-white relative"
        style={{
          gap: v("13px", "47px", "83px"),
          fontSize: v("11px", "20px", "36px"),
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
