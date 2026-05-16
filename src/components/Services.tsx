import LaFanezaBlancoW from "../assets/lafaenza-blanco-w.webp";
import backgroundLaptop from "../assets/background-laptop.webp";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import design3dImg from "../assets/service-design3d.webp";
import transportImg from "../assets/service-transport.webp";
import cncImg from "../assets/service-cnc.webp";
import { useScreen } from "../hooks/useScreen";

export const Services = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  const design3DConsultanta = (
    <div
      className="relative rounded-[10px] overflow-hidden"
      style={{ aspectRatio: "378/253", width: "100%" }}
    >
      <img
        src={design3dImg}
        alt="Design 3D & Consultanță"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 flex justify-center"
        style={{
          padding: v(
            "20px",
            "clamp(24px, 2.5vw, 32px)",
            "clamp(36px, 3.2vw, 48px)",
          ),
          alignItems: "flex-start",
        }}
      >
        <h3
          className="text-[#231f20] text-center leading-tight"
          style={{
            fontSize: v(
              "40px",
              "clamp(36px, 3.8vw, 48px)",
              "clamp(48px, 4.6vw, 68px)",
            ),
          }}
        >
          Design 3D & Consultanță
        </h3>
      </div>
    </div>
  );

  return (
    <section id="servicii" className="relative w-full overflow-hidden">
      <img
        src={isMobile ? LaFanezaBlancoW : backgroundLaptop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div
        className="relative max-w-[1512px] mx-auto"
        style={{
          paddingLeft: v(
            "8px",
            "clamp(16px, 2vw, 20px)",
            "clamp(32px, 3vw, 40px)",
          ),
          paddingRight: v(
            "8px",
            "clamp(16px, 2vw, 20px)",
            "clamp(32px, 3vw, 40px)",
          ),
          paddingTop: v(
            "10px",
            "clamp(18px, 2vw, 24px)",
            "clamp(36px, 3vw, 48px)",
          ),
          paddingBottom: v(
            "40px",
            "clamp(56px, 6vw, 80px)",
            "clamp(120px, 10vw, 160px)",
          ),
        }}
      >
        <h2
          className="text-[#231f20]"
          style={{
            fontSize: v(
              "32px",
              "clamp(30px, 3.2vw, 38px)",
              "clamp(38px, 3.8vw, 52px)",
            ),
            marginBottom: v(
              "36px",
              "clamp(36px, 4vw, 48px)",
              "clamp(56px, 5vw, 76px)",
            ),
          }}
        >
          Serviciile Noastre
        </h2>

        {isMobile ? (
          <div className="flex flex-col mb-10 gap-4">
            {design3DConsultanta}

            <p
              className="text-[#231f20] leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.7vw, 20px)" }}
            >
              Transformăm viziunea ta în realitate digitală prin servicii de
              proiectare personalizată. Oferim consultanță specializată în
              alegerea materialelor și generăm randări 3D fotorealiste care îți
              permit să vizualizezi cu precizie amenajarea finală înainte de
              execuție. Este soluția ideală pentru a asigura un design armonios
              și pentru a elimina orice incertitudine tehnică.
            </p>
          </div>
        ) : (
          <div
            className="relative max-w-[1512px] mx-auto grid items-center"
            style={{ gridTemplateColumns: "50% 50%", gap: "24px" }}
          >
            <div
              style={{
                padding: "clamp(36px, 3.2vw, 48px)",
              }}
            >
              {design3DConsultanta}
            </div>

            <div className="h-full flex items-center px-4 tablet:px-6 desktop:px-8">
              <p
                className="text-[#231f20] leading-relaxed"
                style={{ fontSize: "clamp(16px, 1.7vw, 20px)" }}
              >
                Transformăm viziunea ta în realitate digitală prin servicii de
                proiectare personalizată. Oferim consultanță specializată în
                alegerea materialelor și generăm randări 3D fotorealiste care
                îți permit să vizualizezi cu precizie amenajarea finală înainte
                de execuție. Este soluția ideală pentru a asigura un design
                armonios și pentru a elimina orice incertitudine tehnică.
              </p>
            </div>
          </div>
        )}

        {/* Design 3D Card + description — side-by-side on desktop */}
        {/* <div
          // style={{
          //   display: isMobile ? "block" : "grid",
          //   gridTemplateColumns: isMobile
          //     ? "1fr"
          //     : "minmax(0, 1fr) minmax(0, 1fr)",
          //   alignItems: "flex-start",
          //   gap: v("0px", "clamp(16px, 2vw, 24px)", "clamp(24px, 3vw, 40px)"),
          //   marginBottom: v(
          //     "60px",
          //     "clamp(72px, 8vw, 100px)",
          //     "clamp(120px, 10vw, 160px)",
          //   ),
          //   width: "100%",
          // }}
          className="relative max-w-[1512px] mx-auto grid items-center"
          style={{
            gridTemplateColumns: "50% 50%",
            gap: "24px",
            marginBottom: v(
              "60px",
              "clamp(72px, 8vw, 100px)",
              "clamp(120px, 10vw, 160px)",
            ),
          }}
        >
          {design3DConsultanta}

          <div
            className="relative max-w-[1512px] mx-auto grid items-center"
            style={{ width: "100%" }}
          >
            <p
              className="text-[#231f20] leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.7vw, 20px)" }}
            >
              Transformăm viziunea ta în realitate digitală prin servicii de
              proiectare personalizată. Oferim consultanță specializată în
              alegerea materialelor și generăm randări 3D fotorealiste care îți
              permit să vizualizezi cu precizie amenajarea finală înainte de
              execuție. Este soluția ideală pentru a asigura un design armonios
              și pentru a elimina orice incertitudine tehnică.
            </p>
          </div>
        </div> */}

        <BeforeAfterSlider marginBottom={v("40px", "60px", "100px")} />

        {/* Transport & CNC Cards */}
        <div
          className="grid grid-cols-2"
          style={{
            gap: v("8px", "clamp(10px, 1.4vw, 16px)", "clamp(16px, 2vw, 24px)"),
            marginBottom: v(
              "24px",
              "clamp(32px, 4vw, 40px)",
              "clamp(48px, 5vw, 60px)",
            ),
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
                style={{
                  fontSize: v(
                    "24px",
                    "clamp(24px, 2.5vw, 30px)",
                    "clamp(28px, 2.8vw, 34px)",
                  ),
                }}
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
                style={{
                  fontSize: v(
                    "24px",
                    "clamp(24px, 2.5vw, 30px)",
                    "clamp(28px, 2.8vw, 34px)",
                  ),
                }}
              >
                Prelucrare CNC
              </h3>
            </div>
          </div>
        </div>

        <ul
          className="text-[#231f20] list-disc leading-relaxed"
          style={{
            fontSize: v(
              "16px",
              "clamp(16px, 1.7vw, 20px)",
              "clamp(20px, 2.1vw, 28px)",
            ),
            paddingLeft: v(
              "24px",
              "clamp(28px, 3vw, 40px)",
              "clamp(44px, 4vw, 60px)",
            ),
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
