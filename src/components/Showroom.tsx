import showroomBg from "../assets/showroom-bg.png";
import showroomInnerBg from "../assets/showroom-inner-bg.png";
import { useScreen } from "../hooks/useScreen";

export const Showroom = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => isMobile ? m : isTablet ? t : l;

  return (
    <section id="showroom" className="relative w-full overflow-hidden">
      <img src={showroomBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

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
          style={{ fontSize: v("32px", "40px", "64px"), marginBottom: v("36px", "60px", "100px") }}
        >
          Showroom
        </h2>

        <div
          className="text-black leading-relaxed"
          style={{ fontSize: v("16px", "24px", "36px"), marginBottom: v("40px", "60px", "100px") }}
        >
          <p style={{ marginBottom: v("16px", "24px", "36px") }}>
            Situat strategic la frontieră, KHS Design este poarta ta către inovație în amenajări interioare. Aducem ultimele tendințe internaționale direct de la cele mai mari expoziții din lume, oferindu-ți acces la colecții premium de ceramică și obiecte sanitare.
          </p>
          <ul className="list-disc" style={{ paddingLeft: v("48px", "72px", "96px") }}>
            <li>Calitate Premium: Materiale de înaltă calitate importate direct din Italia, Spania și Polonia.</li>
            <li>Selecție Vastă: Peste 50 de mărci internaționale de top disponibile pentru proiectul tău.</li>
            <li>Soluții Complete: Produse versatile, ideale pentru orice spațiu, de la rezidențial la comercial.</li>
          </ul>
          <p style={{ marginTop: v("16px", "24px", "36px") }}>Vino să descoperi calitatea fără granițe și inspirația necesară pentru a-ți transforma viziunea în realitate!</p>
        </div>

        <div
          className="relative rounded-[5px] overflow-hidden"
          style={{ aspectRatio: "373/176", marginBottom: v("16px", "24px", "36px") }}
        >
          <img src={showroomInnerBg} alt="" className="w-full h-full object-cover" />
        </div>

        <div
          className="bg-white rounded-[10px] flex items-center justify-center"
          style={{ aspectRatio: "3/2" }}
        >
          <div className="text-black text-center leading-tight" style={{ fontSize: v("32px", "48px", "64px") }}>
            <p>POZE SHOWROOM</p>
            <p>TIP LAYOUT/GRID</p>
          </div>
        </div>
      </div>
    </section>
  );
};
