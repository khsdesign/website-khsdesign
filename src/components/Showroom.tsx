import LaFanezaBlancoW from "../assets/lafaenza-blanco-w.png";
import backgroundLaptop from "../assets/background-laptop.png";
import backgroundShowroomMobile from "../assets/background-showroom-mobile.png";
import showroom1 from "../assets/Poze showroom/1.jpeg";
import showroom2 from "../assets/Poze showroom/2.jpeg";
import showroom3 from "../assets/Poze showroom/3.jpeg";
import showroom4 from "../assets/Poze showroom/4.jpeg";
import showroom5 from "../assets/Poze showroom/5.jpeg";
import showroom6 from "../assets/Poze showroom/6.jpeg";
import showroom7 from "../assets/Poze showroom/7.jpeg";
import showroom8 from "../assets/Poze showroom/8.jpeg";
import showroom9 from "../assets/Poze showroom/9.jpeg";
import { useScreen } from "../hooks/useScreen";
import type { ReactElement } from "react";

const showroomPhotos = [
  { src: showroom9, alt: "Showroom imagine 9" },
  { src: showroom1, alt: "Showroom KHS cu panouri ceramice expuse" },
  { src: showroom3, alt: "Panouri decorative și obiecte de prezentare" },
  { src: showroom4, alt: "Aleea principală din showroom" },
  { src: showroom5, alt: "Colț de relaxare în showroom" },
  { src: showroom6, alt: "Plăci și finisaje expuse lângă vegetație" },
  { src: showroom7, alt: "Selecție de finisaje și panouri ceramice" },
  { src: showroom8, alt: "Showroom imagine 8" },
  { src: showroom2, alt: "Mostre de plăci ceramice în showroom" },
];

const mobileShowroomPhotos = [
  showroom2,
  showroom1,
  showroom3,
  showroom4,
  showroom5,
  showroom6,
  showroom7,
  showroom8,
];

export const Showroom = () => {
  const { isMobile, isTablet, isLaptop } = useScreen();

  function v<T>(m: T, t: T, l: T): T {
    return isMobile ? m : isTablet ? t : l;
  }

  const desktopFigures: ReactElement[] = [];
  {
    const colRowPointer = [1, 1, 1];
    for (let i = 0; i < showroomPhotos.length; i++) {
      const p = showroomPhotos[i];

      const colIndex = Math.floor(i / 3); // 0..2
      const colStart = colIndex * 4 + 1;
      const posInCol = (i % 3) + 1;

      let rowSpan = 2;
      if (colIndex === 0 || colIndex === 2) {
        rowSpan = posInCol === 1 ? 1 : 2;
      } else {
        rowSpan = posInCol === 3 ? 1 : 2;
      }

      const rowStart = colRowPointer[colIndex];

      desktopFigures.push(
        <figure
          key={p.src}
          className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_18px_45px_rgba(35,31,32,0.08)]"
          style={{
            gridColumn: `${colStart} / span 4`,
            gridRow: `${rowStart} / span ${rowSpan}`,
            display: "block",
          }}
        >
          <img
            src={p.src as string}
            alt={p.alt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        </figure>,
      );

      colRowPointer[colIndex] += rowSpan;
    }
  }
  // build columns for stacked layout (ensures equal vertical gaps)
  const columns: { src: string; alt: string }[][] = [[], [], []];
  for (let i = 0; i < showroomPhotos.length; i++) {
    const colIndex = Math.floor(i / 3); // 0..2
    columns[colIndex].push(showroomPhotos[i] as { src: string; alt: string });
  }

  return (
    <section id="showroom" className="relative w-full overflow-hidden">
      <img
        src={isMobile ? backgroundShowroomMobile : backgroundLaptop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="relative max-w-[1512px] mx-auto"
        style={{
          paddingLeft: v("10px", "24px", "48px"),
          paddingRight: v("10px", "24px", "48px"),
          paddingTop: v("10px", "24px", "48px"),
          paddingBottom: v("40px", "80px", "160px"),
        }}
      >
        <h2
          className="text-[#231f20]"
          style={{
            fontSize: v("32px", "34px", "44px"),
            marginBottom: v("36px", "44px", "64px"),
          }}
        >
          Showroom
        </h2>

        <div
          className="text-[#231f20] leading-relaxed"
          style={{
            fontSize: v("16px", "18px", "24px"),
            marginBottom: v("40px", "48px", "72px"),
          }}
        >
          <p style={{ marginBottom: v("16px", "18px", "24px") }}>
            Situat strategic la frontieră, KHS Design este poarta ta către
            inovație în amenajări interioare. Aducem ultimele tendințe
            internaționale direct de la cele mai mari expoziții din lume,
            oferindu-ți acces la colecții premium de ceramică și obiecte
            sanitare.
          </p>
          <ul
            className="list-disc"
            style={{ paddingLeft: v("48px", "56px", "72px") }}
          >
            <li>
              Calitate Premium: Materiale de înaltă calitate importate direct
              din Italia, Spania și Polonia.
            </li>
            <li>
              Selecție Vastă: Peste 50 de mărci internaționale de top
              disponibile pentru proiectul tău.
            </li>
            <li>
              Soluții Complete: Produse versatile, ideale pentru orice spațiu,
              de la rezidențial la comercial.
            </li>
          </ul>
          <p style={{ marginTop: v("16px", "18px", "24px") }}>
            Vino să descoperi calitatea fără granițe și inspirația necesară
            pentru a-ți transforma viziunea în realitate!
          </p>
        </div>

        <div style={{ marginBottom: v("16px", "20px", "28px") }}>
          {isMobile ? (
            <div className="space-y-3">
              {mobileShowroomPhotos.map((src, index) => {
                const photo = showroomPhotos.find((item) => item.src === src);

                return (
                  <figure
                    key={src}
                    className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_18px_45px_rgba(35,31,32,0.08)]"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <img
                      src={src as string}
                      alt={photo?.alt ?? `Showroom imagine ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </figure>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: isTablet ? "8px" : "10px",
                alignItems: "start",
              }}
            >
              {columns.map((col, ci) => {
                const colStart = ci * 4 + 1;
                // make the grid longer: larger base heights for tablet and laptop
                // reduce desktop (laptop) sizes by 50% per request
                const base = isTablet ? 380 : isLaptop ? 450 : 200;
                const big = Math.round(base * 1.2);
                const small = Math.round(big * 0.66);

                return (
                  <div
                    key={`col-${ci}`}
                    style={{
                      gridColumn: `${colStart} / span 4`,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {col.map((p, idx) => {
                      // pattern: columns 0 and 2 -> [small, big, big]
                      // column 1 -> [big, big, small]
                      let h = big;
                      if (ci === 0 || ci === 2) {
                        h = idx === 0 ? small : big;
                      } else {
                        h = idx === 2 ? small : big;
                      }

                      return (
                        <figure
                          key={p.src}
                          className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_18px_45px_rgba(35,31,32,0.08)]"
                          style={{ height: `${h}px`, display: "block" }}
                        >
                          <img
                            src={p.src as string}
                            alt={p.alt}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </figure>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
