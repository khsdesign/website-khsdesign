import iconRarity from "../assets/rarity-icon.webp";
import iconAdaptability from "../assets/adaptability-icon.webp";
import iconTrend from "../assets/trend-icon.webp";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.webp";

export const LastBand = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  const iconSize = v("31px", "42px", "64px");
  const textSize = v("12px", "13px", "16px");
  const itemGap = v("9px", "12px", "16px");

  return (
    <section
      className="relative w-full"
      style={{ height: v("75px", "95px", "95px") }}
    >
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="relative h-full grid grid-cols-3 items-center text-[#231f20]"
        style={{
          paddingLeft: v("20px", "40px", "80px"),
          paddingRight: v("20px", "40px", "80px"),
        }}
      >
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconRarity}
            alt=""
            style={{
              width: iconSize,
              height: iconSize,
              flexShrink: 0,
              filter: "brightness(0)",
            }}
          />
          <div
            className="leading-tight font-bold"
            style={{ fontSize: textSize }}
          >
            <p>Design</p>
            <p>unicat</p>
          </div>
        </div>
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconAdaptability}
            alt=""
            style={{
              width: iconSize,
              height: iconSize,
              flexShrink: 0,
              filter: "brightness(0)",
            }}
          />
          <div
            className="leading-tight font-bold"
            style={{ fontSize: textSize }}
          >
            <p>Soluții</p>
            <p>adaptabile</p>
          </div>
        </div>
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconTrend}
            alt=""
            style={{
              width: iconSize,
              height: iconSize,
              flexShrink: 0,
              filter: "brightness(0)",
            }}
          />
          <div
            className="leading-tight font-bold"
            style={{ fontSize: textSize }}
          >
            <p>Trenduri</p>
            <p>actuale</p>
          </div>
        </div>
      </div>
    </section>
  );
};
