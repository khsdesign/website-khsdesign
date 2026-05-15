import iconTick from "../assets/icon-tick.png";
import iconCoin from "../assets/icon-coin.png";
import iconDesign from "../assets/icon-design.png";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.png";

export const FeaturesBand = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  const iconSize = v("31px", "54px", "85px");
  const textSize = v("12px", "16px", "24px");
  const itemGap = v("4px", "12px", "28px");

  return (
    <section
      className="relative w-full border-t border-[#231f20]/15"
      style={{ height: v("75px", "109px", "149px") }}
    >
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative h-full flex items-center justify-around px-5 tablet:px-10 desktop:px-20 text-[#231f20]">
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconTick}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>Calitate</p>
            <p>înaltă</p>
          </div>
        </div>
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconCoin}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>Prețuri</p>
            <p>accesibile</p>
          </div>
        </div>
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconDesign}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>Design în</p>
            <p>72 de ore</p>
          </div>
        </div>
      </div>
    </section>
  );
};
