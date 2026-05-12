import khsLogo from "../assets/khs-logo.png";
import { useScreen } from "../hooks/useScreen";

export const Header = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => isMobile ? m : isTablet ? t : l;

  return (
    <header
      className="fixed z-50 bg-khs-gray/85 backdrop-blur-sm rounded-[5px] flex items-center justify-between"
      style={{
        top: v("12px", "23px", "36px"),
        left: v("10px", "22px", "54px"),
        right: v("10px", "22px", "54px"),
        height: v("48px", "71px", "121px"),
        paddingLeft: v("10px", "22px", "54px"),
        paddingRight: v("10px", "22px", "54px"),
      }}
    >
      <img src={khsLogo} alt="KHS" className="w-auto" style={{ height: v("26px", "45px", "79px") }} />
      <nav
        className="flex text-khs-dark"
        style={{ gap: v("13px", "47px", "83px"), fontSize: v("11px", "20px", "36px"), letterSpacing: "0.03em" }}
      >
        <a href="#servicii" className="hover:opacity-70 transition-opacity">SERVICII</a>
        <a href="#showroom" className="hover:opacity-70 transition-opacity">SHOWROOM</a>
        <a href="#catalog" className="hover:opacity-70 transition-opacity">CATALOG</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
      </nav>
    </header>
  );
};
