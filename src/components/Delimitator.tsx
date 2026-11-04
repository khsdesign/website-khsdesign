// import iconCustomer from "../assets/icon-customer.webp";
// import iconSupport from "../assets/icon-support.webp";
// import iconExperience from "../assets/icon-experience.webp";
import { useScreen } from "../hooks/useScreen";
import BlancoDark from "../assets/blanco6grm.webp";

export const Delimitator = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  //   const iconSize = v("31px", "42px", "64px");
  //   const textSize = v("12px", "13px", "16px");
  //   const itemGap = v("9px", "12px", "16px");

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{ height: v("75px", "95px", "95px") }}
    >
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="relative z-10 h-full grid grid-cols-3 items-center text-[#231f20]"
        style={{
          paddingLeft: v("20px", "40px", "80px"),
          paddingRight: v("20px", "40px", "80px"),
        }}
      >
        {/* <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconCustomer}
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
            <p>Consiliere</p>
            <p>avansată</p>
          </div>
        </div>
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconSupport}
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
            <p>200+</p>
            <p>Proiecte</p>
          </div>
        </div>
        <div
          className="flex items-center justify-self-center"
          style={{ gap: itemGap }}
        >
          <img
            src={iconExperience}
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
            <p>20+ Ani</p>
            <p>Experiență</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
