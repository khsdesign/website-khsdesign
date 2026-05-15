import iconRarity from "../assets/rarity-icon.png";
import iconAdaptability from "../assets/adaptability-icon.png";
import iconTrend from "../assets/trend-icon.png";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.png";

export const LastBand = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  const iconSize = v("31px", "54px", "85px");
  const textSize = v("12px", "16px", "24px");
  const itemGap = v("9px", "16px", "28px");

  return (
    <section
      className="relative w-full"
      style={{ height: v("75px", "109px", "149px") }}
    >
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="relative h-full flex items-center justify-around text-[#231f20]"
        style={{
          paddingLeft: v("20px", "40px", "80px"),
          paddingRight: v("20px", "40px", "80px"),
        }}
      >
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconRarity}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0, filter: "brightness(0) invert(1)" }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>Design</p>
            <p>unicat</p>
          </div>
        </div>
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconAdaptability}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0, filter: "brightness(0) invert(1)" }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>Soluții</p>
            <p>adaptabile</p>
          </div>
        </div>
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconTrend}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0, filter: "brightness(0) invert(1)" }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>Trenduri</p>
            <p>actuale</p>
          </div>
        </div>
      </div>
    </section>
  );
};
