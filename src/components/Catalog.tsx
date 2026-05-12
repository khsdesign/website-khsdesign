import catalogGrid from "../assets/catalog-grid.png";
import { useScreen } from "../hooks/useScreen";

export const Catalog = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => isMobile ? m : isTablet ? t : l;

  return (
    <section
      id="catalog"
      className="w-full"
      style={{ paddingTop: v("40px", "80px", "160px"), paddingBottom: v("40px", "80px", "160px") }}
    >
      <div
        className="max-w-[1512px] mx-auto"
        style={{ paddingLeft: v("10px", "24px", "48px"), paddingRight: v("10px", "24px", "48px") }}
      >
        <h2
          className="text-[#231f20]"
          style={{ fontSize: v("32px", "40px", "64px"), marginBottom: v("36px", "60px", "100px") }}
        >
          CATALOG
        </h2>

        <p
          className="text-black leading-relaxed"
          style={{ fontSize: v("16px", "24px", "36px"), marginBottom: v("36px", "60px", "100px") }}
        >
          Explorează colecțiile complete ale partenerilor noștri internaționali. Selectează un brand pentru a accesa cele mai noi cataloage și a găsi inspirația pentru proiectul tău.
        </p>

        <div className="relative rounded-[10px] overflow-hidden" style={{ aspectRatio: "338/322" }}>
          <img src={catalogGrid} alt="Catalog parteneri" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <p className="text-black text-center leading-tight" style={{ fontSize: v("32px", "48px", "64px") }}>
              GRID CU PARTENERI<br />CU CLICK PE EI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
