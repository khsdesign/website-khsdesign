import { useState } from "react";
import { useScreen } from "../hooks/useScreen";
import img1 from "../assets/before-after-7.webp";
import img2 from "../assets/before-after-8.webp";
import img3 from "../assets/before-after-9.webp";
import img4 from "../assets/before-after-10.webp";
import img5 from "../assets/before-after-11.webp";
import img6 from "../assets/before-after-12.webp";

const images = [img1, img2, img3, img4, img5, img6];

const tagBase =
  "absolute bottom-4 text-[10px] tablet:text-[11px] desktop:text-[12px] tracking-[0.14em] uppercase px-3 py-1.5 tablet:px-3.5 tablet:py-2 desktop:px-4 desktop:py-2.5 rounded-full backdrop-blur-sm select-none";

export const BeforeAfterSlider = ({
  marginBottom,
}: {
  marginBottom: string;
}) => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const slider = (
    <div
      className="relative rounded-[10px] overflow-hidden"
      style={{
        height: v("40vh", "420px", "500px"),
        maxHeight: v("40vh", "420px", "500px"),
        width: "100%",
      }}
    >
      <img
        src={images[current]}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <span
        className={`${tagBase} left-4 bg-[#231f20]/65 text-white`}
        style={{
          fontSize: v("10px", "12px", "14px"),
          padding: v("6px 12px", "8px 14px", "10px 16px"),
        }}
      >
        Randare
      </span>
      <span
        className={`${tagBase} right-4 bg-white/80 text-[#231f20]`}
        style={{
          fontSize: v("10px", "12px", "14px"),
          padding: v("6px 12px", "8px 14px", "10px 16px"),
        }}
      >
        Realitate
      </span>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/55 text-white rounded-full flex items-center justify-center transition-colors w-8 h-8 tablet:w-10 tablet:h-10 desktop:w-12 desktop:h-12"
        aria-label="Înapoi"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6"
        >
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/55 text-white rounded-full flex items-center justify-center transition-colors w-8 h-8 tablet:w-10 tablet:h-10 desktop:w-12 desktop:h-12"
        aria-label="Înainte"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 tablet:gap-2.5 desktop:gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? "bg-white w-3 h-3 tablet:w-3.5 tablet:h-3.5 desktop:w-4 desktop:h-4" : "bg-white/50 w-2 h-2 tablet:w-2.5 tablet:h-2.5 desktop:w-3 desktop:h-3"}`}
            aria-label={`Imaginea ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full" style={{ marginBottom }}>
      {isMobile ? (
        slider
      ) : (
        <div
          className="relative max-w-[1512px] mx-auto grid items-center"
          style={{ gridTemplateColumns: "30% 70%", gap: "24px" }}
        >
          <div className="h-full flex items-center px-4 tablet:px-6 desktop:px-8">
            <p
              className="text-[#231f20] leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.7vw, 20px)" }}
            >
              În versiunea „Before”, designul propus și rezultatul final „After”
              sunt strâns corelate: forma, cromatica și atmosfera imaginată se
              regăsesc foarte clar în execuția reală. Comparația dintre cele
              două evidențiază cât de fidel poate fi transpus conceptul inițial
              în spațiul realizat.
            </p>
          </div>

          <div
            style={{
              padding: "clamp(36px, 3.2vw, 48px)",
            }}
          >
            {slider}
          </div>
        </div>
      )}
    </div>
  );
};
