import LaFanezaBlancoW from "../assets/lafaenza-blanco-w.png";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import design3dImg from "../assets/service-design3d.png";
import transportImg from "../assets/service-transport.png";
import cncImg from "../assets/service-cnc.png";
import { useScreen } from "../hooks/useScreen";

export const Services = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  return (
    <section id="servicii" className="relative w-full overflow-hidden">
      <img
        src={LaFanezaBlancoW}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div
        className="relative max-w-[1512px] mx-auto"
        style={{
          paddingLeft: v("8px", "20px", "40px"),
          paddingRight: v("8px", "20px", "40px"),
          paddingTop: v("10px", "24px", "48px"),
          paddingBottom: v("40px", "80px", "160px"),
        }}
      >
        <h2
          className="text-[#231f20]"
          style={{
            fontSize: v("32px", "40px", "64px"),
            marginBottom: v("36px", "60px", "100px"),
          }}
        >
          Serviciile Noastre
        </h2>

        {/* Design 3D Card */}
        <div
          className="relative rounded-[10px] overflow-hidden"
          style={{
            aspectRatio: "378/253",
            marginBottom: v("60px", "100px", "160px"),
          }}
        >
          <img
            src={design3dImg}
            alt="Design 3D & Consultanță"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex justify-center"
            style={{
              padding: v("20px", "36px", "60px"),
              alignItems: "flex-start",
            }}
          >
            <h3
              className="text-[#231f20] text-center leading-tight"
              style={{ fontSize: v("40px", "64px", "96px") }}
            >
              Design 3D & Consultanță
            </h3>
          </div>
        </div>

        <p
          className="text-[#231f20] leading-relaxed"
          style={{
            fontSize: v("16px", "24px", "36px"),
            marginBottom: v("40px", "60px", "100px"),
          }}
        >
          Transformăm viziunea ta în realitate digitală prin servicii de
          proiectare personalizată. Oferim consultanță specializată în alegerea
          materialelor și generăm randări 3D fotorealiste care îți permit să
          vizualizezi cu precizie amenajarea finală înainte de execuție. Este
          soluția ideală pentru a asigura un design armonios și pentru a elimina
          orice incertitudine tehnică.
        </p>

        <BeforeAfterSlider marginBottom={v("40px", "60px", "100px")} />

        {/* Transport & CNC Cards */}
        <div
          className="grid grid-cols-2"
          style={{
            gap: v("8px", "16px", "24px"),
            marginBottom: v("24px", "40px", "60px"),
          }}
        >
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{ aspectRatio: "186/127" }}
          >
            <img
              src={transportImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(217,217,217,0.25)] flex items-center justify-center">
              <h3
                className="text-white text-center leading-tight"
                style={{ fontSize: v("24px", "40px", "40px") }}
              >
                Transport
                <br />
                Materiale
              </h3>
            </div>
          </div>
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{ aspectRatio: "186/127" }}
          >
            <img
              src={cncImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(217,217,217,0.25)] flex items-center justify-center">
              <h3
                className="text-white text-center leading-tight"
                style={{ fontSize: v("24px", "40px", "40px") }}
              >
                Prelucrare CNC
              </h3>
            </div>
          </div>
        </div>

        <ul
          className="text-[#231f20] list-disc leading-relaxed"
          style={{
            fontSize: v("16px", "24px", "36px"),
            paddingLeft: v("24px", "40px", "60px"),
          }}
        >
          <li>
            Transport Materiale: Livrare promptă și sigură pentru plăci ceramice
            și obiecte voluminoase, garantând integritatea produselor până la
            șantier.
          </li>
          <li>
            Prelucrare CNC: Debitare de precizie și finisaje complexe pentru
            personalizarea materialelor la orice dimensiuni sau forme atipice.
          </li>
        </ul>
      </div>
    </section>
  );
};
