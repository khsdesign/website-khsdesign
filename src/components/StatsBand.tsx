import imolaSanPe from "../assets/imola-san-pe.jpg";
import iconCustomer from "../assets/icon-customer.png";
import iconSupport from "../assets/icon-support.png";
import iconExperience from "../assets/icon-experience.png";
import { useScreen } from "../hooks/useScreen";

export const StatsBand = () => {
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
        src={imolaSanPe}
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
            src={iconCustomer}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>Consiliere</p>
            <p>avansată</p>
          </div>
        </div>
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconSupport}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>200+</p>
            <p>Proiecte</p>
          </div>
        </div>
        <div className="flex items-center" style={{ gap: itemGap }}>
          <img
            src={iconExperience}
            alt=""
            style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
          />
          <div className="leading-tight" style={{ fontSize: textSize }}>
            <p>20+ Ani</p>
            <p>Experiență</p>
          </div>
        </div>
      </div>
    </section>
  );
};
