import iconTick from "../assets/icon-tick.webp";
import iconCoin from "../assets/icon-coin.webp";
import iconDesign from "../assets/icon-design.webp";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.webp";

export const FeaturesBand = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  const iconSize = v("31px", "42px", "64px");
  const textSize = v("12px", "13px", "16px");
  const itemGap = v("4px", "8px", "16px");

  return (
    <section
      className="relative w-full border-t border-[#231f20]/15"
      style={{ height: v("75px", "95px", "95px") }}
    >
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative h-full grid grid-cols-3 items-center px-5 tablet:px-10 desktop:px-20 text-[#231f20]">
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconTick}
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
            <p>Calitate</p>
            <p>înaltă</p>
          </div>
        </div>
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconCoin}
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
            <p>Prețuri</p>
            <p>accesibile</p>
          </div>
        </div>
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconDesign}
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
            <p>Design în</p>
            <p>72 de ore</p>
          </div>
        </div>
      </div>
    </section>
  );
};
