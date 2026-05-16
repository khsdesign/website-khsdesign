import { useState, useEffect } from "react";
import LaFanezaBlancoW from "../assets/lafaenza-blanco-w.webp";
import backgroundLaptop from "../assets/background-laptop.webp";
import { useScreen } from "../hooks/useScreen";

// Gresie logos
import logoImola from "../assets/Parteneri gresii/Imola.webp";
import logoLaFaenza from "../assets/Parteneri gresii/La Faenza.webp";
import logoSerenissima from "../assets/Parteneri gresii/Serenissima.webp";
import logoCir from "../assets/Parteneri gresii/Cir Ceramiche.webp";
import logoLeonardo from "../assets/Parteneri gresii/Leonardo Ceramica.webp";
import logoMuseum from "../assets/Parteneri gresii/Museum by Perdona.webp";
import logoCasalgrande from "../assets/Parteneri gresii/Casalgrande Padana.webp";
import logoStargres from "../assets/Parteneri gresii/Stargres.webp";
import logoColorker from "../assets/Parteneri gresii/Colorker.webp";
import logoNatucer from "../assets/Parteneri gresii/Natucer.webp";
import logoPanaria from "../assets/Parteneri gresii/Panaria.webp";
import logoAtlasConcorde from "../assets/Parteneri gresii/Atlas Concorde.webp";
import logoCerrad from "../assets/Parteneri gresii/Cerrad.webp";
import logoGardenia from "../assets/Parteneri gresii/Gardenia Orchidea.webp";
import logoGranitoForte from "../assets/Parteneri gresii/Granito Forte.webp";
import logoVersace from "../assets/Parteneri gresii/Versace Ceramics.webp";

// Sanitare logos
import logoVilleroy from "../assets/Parteneri sanitare/Villeroy & Boch.webp";
import logoHansgrohe from "../assets/Parteneri sanitare/Hans Grohe.webp";
import logoGrohe from "../assets/Parteneri sanitare/Grohe.webp";
import logoBathco from "../assets/Parteneri sanitare/Bathco.webp";
import logoKludi from "../assets/Parteneri sanitare/Kludi.webp";
import logoFima from "../assets/Parteneri sanitare/Fima Carlo Frattini.webp";
import logoGeberit from "../assets/Parteneri sanitare/Geberit.webp";
import logoWellis from "../assets/Parteneri sanitare/Wellis.webp";
import logoFluminia from "../assets/Parteneri sanitare/Fluminia.webp";
import logoFerro from "../assets/Parteneri sanitare/Ferro.webp";
import logoKolpa from "../assets/Parteneri sanitare/Kolpasan.webp";

type Partner = {
  name: string;
  url: string;
  logo?: string;
  selectie?: boolean;
  collections?: string[];
};

const gresiiBestSellers: Partner[] = [
  {
    name: "CERAMICA IMOLA",
    url: "https://imolaceramica.com/en/",
    logo: logoImola,
  },
  {
    name: "LAFAENZA CERAMICA",
    url: "https://lafaenzaceramica.com/",
    logo: logoLaFaenza,
  },
  {
    name: "SERENISSIMA",
    url: "https://www.serenissima.re.it/",
    logo: logoSerenissima,
  },
  {
    name: "CIR MANIFATTURE CERAMICHE",
    url: "https://www.cir.it/?lang=en",
    logo: logoCir,
  },
  {
    name: "LEONARDO CERAMICA",
    url: "https://leonardoceramica.com/en/",
    logo: logoLeonardo,
  },
  {
    name: "MUSEUM BY PERONDA",
    url: "https://museumsurfaces.com/",
    logo: logoMuseum,
  },
  {
    name: "CASALGRANDE PADANA",
    url: "https://www.casalgrandepadana.com/",
    logo: logoCasalgrande,
  },
  { name: "STARGRES", url: "https://stargres.pl/", logo: logoStargres },
  { name: "COLORKER", url: "https://www.colorker.com/en/", logo: logoColorker },
  {
    name: "NATUCER",
    url: "https://www.natucer.es/en/index",
    logo: logoNatucer,
  },
];

const gresiiMore: Partner[] = [
  { name: "PANARIA", url: "https://www.panaria.net/", logo: logoPanaria },
  {
    name: "ATLAS CONCORDE",
    url: "https://www.atlasconcorde.com/en",
    logo: logoAtlasConcorde,
    selectie: true,
    collections: ["Exigo", "Factor", "Impact", "Ultrablock", "Yacht"],
  },
  {
    name: "CERRAD",
    url: "https://cerrad.com/us/",
    logo: logoCerrad,
    selectie: true,
    collections: ["Distinct", "Identity", "Palette", "Marmo"],
  },
  {
    name: "GARDENIA ORCHIDEA",
    url: "https://www.gardenia.it/en/",
    logo: logoGardenia,
    selectie: true,
    collections: [
      "Patagonia",
      "Pure Onyx",
      "Statuario Premium",
      "Cosmic",
      "Travertino",
      "Origini",
      "Pietra Viva",
    ],
  },
  {
    name: "GRANITO FORTE",
    url: "https://www.granitoforte.it/en/",
    logo: logoGranitoForte,
    selectie: true,
    collections: [
      "Fiordi",
      "Fusion",
      "Luxor",
      "Maeva",
      "Marble (Cave)",
      "Rock Valley",
      "Supreme",
    ],
  },
  {
    name: "VERSACE CERAMICS",
    url: "https://www.versace-ceramics.com/en/",
    logo: logoVersace,
  },
];

const sanitareBestSellers: Partner[] = [
  {
    name: "VILLEROY & BOCH",
    url: "https://www.villeroy-boch.eu/c/bathroom-ceramic/",
    logo: logoVilleroy,
  },
  { name: "HANSGROHE", url: "https://www.hansgrohe.ro/", logo: logoHansgrohe },
  { name: "GROHE", url: "https://www.grohe.ro/ro_ro/", logo: logoGrohe },
  {
    name: "BATHCO",
    url: "https://www.thebathcollection.com/en/",
    logo: logoBathco,
  },
  { name: "KLUDI", url: "https://www.kludi.com/hr", logo: logoKludi },
  {
    name: "FIMA CARLO FRATTINI",
    url: "https://fimacf.com/en/",
    logo: logoFima,
  },
  { name: "GEBERIT", url: "https://www.geberit.ro/acasa/", logo: logoGeberit },
  { name: "WELLIS", url: "https://wellis.com/", logo: logoWellis },
];

const sanitareMore: Partner[] = [
  { name: "FLORIDA", url: "https://www.jollycluj.ro/Brand_Florida_46.html" },
  {
    name: "FLUMINIA",
    url: "https://www.jollycluj.ro/Brand_Fluminia_87.html",
    logo: logoFluminia,
  },
  { name: "FERRO", url: "https://www.ferro.ro/", logo: logoFerro },
  { name: "KOLPA SAN", url: "https://www.kolpa.si/en", logo: logoKolpa },
];

const SelectieModal = ({
  partner,
  onClose,
}: {
  partner: Partner;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const manyCollections = (partner.collections?.length ?? 0) > 4;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[10px] w-full max-w-[380px] relative"
        style={{ padding: "28px 24px 24px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#231f20]/30 hover:text-[#231f20] transition-colors"
          aria-label="Închide"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 3L15 15M15 3L3 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {partner.logo && (
          <div className="flex justify-center mb-5">
            <img
              src={partner.logo}
              alt={partner.name}
              className="object-contain"
              style={{ maxHeight: "48px", maxWidth: "150px" }}
            />
          </div>
        )}

        <p className="text-[#231f20]/40 text-[10px] tracking-widest uppercase mb-3">
          Colecțiile disponibile
        </p>

        <ul
          className={`mb-6 ${manyCollections ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}`}
        >
          {partner.collections?.map((col) => (
            <li
              key={col}
              className="text-[#231f20] text-sm flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[#231f20]/30 flex-shrink-0" />
              {col}
            </li>
          ))}
        </ul>

        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#231f20] text-white text-[11px] tracking-widest uppercase py-3 rounded-[5px] hover:bg-[#231f20]/80 transition-colors"
        >
          Vizitează site-ul
        </a>
      </div>
    </div>
  );
};

const CardInner = ({ partner }: { partner: Partner }) => (
  <>
    {partner.selectie && (
      <span className="absolute top-0 right-0 bg-[#231f20]/8 text-[#231f20]/40 text-[9px] tracking-widest uppercase px-2 py-1 rounded-bl-[8px]">
        Selecție
      </span>
    )}
    <div
      className="w-4/5 flex items-center justify-center"
      style={{ aspectRatio: "3/2" }}
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <div className="w-full h-full rounded-[5px] bg-[#e8e8e8] flex items-center justify-center">
          <span className="text-[#bbb] text-xs tracking-widest">LOGO</span>
        </div>
      )}
    </div>
    <p className="text-[#231f20] font-medium text-xs text-center leading-tight">
      {partner.name}
    </p>
  </>
);

const PartnerCard = ({
  partner,
  onSelectie,
}: {
  partner: Partner;
  onSelectie: (p: Partner) => void;
}) => {
  const baseClass =
    "bg-white rounded-[10px] flex flex-col items-center justify-center gap-1.5 tablet:gap-3 p-2 tablet:p-4 hover:opacity-80 transition-opacity relative overflow-hidden";

  if (partner.selectie) {
    return (
      <button
        onClick={() => onSelectie(partner)}
        className={`${baseClass} w-full`}
        style={{ aspectRatio: "1/1" }}
      >
        <CardInner partner={partner} />
      </button>
    );
  }

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
      style={{ aspectRatio: "1/1" }}
    >
      <CardInner partner={partner} />
    </a>
  );
};

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-300"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path
      d="M2 5L7 10L12 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PartnerSection = ({
  title,
  bestSellers,
  more,
  gridCols,
  gridGap,
  titleSize,
  titleMargin,
  buttonSize,
  sectionMargin,
  onSelectie,
}: {
  title: string;
  bestSellers: Partner[];
  more: Partner[];
  gridCols: string;
  gridGap: string;
  titleSize: string;
  titleMargin: string;
  buttonSize: string;
  sectionMargin: string;
  onSelectie: (p: Partner) => void;
}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ marginBottom: sectionMargin }}>
      <h3
        className="text-[#231f20]"
        style={{ fontSize: titleSize, marginBottom: titleMargin }}
      >
        {title}
      </h3>
      <div
        style={{ display: "grid", gridTemplateColumns: gridCols, gap: gridGap }}
      >
        {bestSellers.map((p) => (
          <PartnerCard key={p.name} partner={p} onSelectie={onSelectie} />
        ))}
        {showMore &&
          more.map((p) => (
            <PartnerCard key={p.name} partner={p} onSelectie={onSelectie} />
          ))}
      </div>
      {more.length > 0 && (
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="mt-5 flex items-center gap-2 text-[#231f20]/60 hover:text-[#231f20] transition-colors"
          style={{ fontSize: buttonSize }}
        >
          {showMore ? "Arată mai puțin" : "Arată mai mult"}
          <ChevronIcon open={showMore} />
        </button>
      )}
    </div>
  );
};

export const Catalog = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);
  const [modalPartner, setModalPartner] = useState<Partner | null>(null);

  const gridCols = v("repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)");
  const gridGap = v("8px", "16px", "24px");
  const categoryTitleSize = v("20px", "24px", "32px");
  const categoryMargin = v("16px", "20px", "28px");
  const sectionMargin = v("40px", "56px", "80px");
  const buttonSize = v("13px", "14px", "16px");

  return (
    <>
      <section
        id="catalog"
        className="relative w-full overflow-hidden"
        style={{
          paddingTop: v("40px", "80px", "160px"),
          paddingBottom: v("40px", "80px", "160px"),
        }}
      >
        <img
          src={isMobile ? LaFanezaBlancoW : backgroundLaptop}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="relative max-w-[1512px] mx-auto"
          style={{
            paddingLeft: v("10px", "24px", "48px"),
            paddingRight: v("10px", "24px", "48px"),
          }}
        >
          <h2
            className="text-[#231f20]"
            style={{
              fontSize: v("32px", "34px", "44px"),
              marginBottom: v("12px", "16px", "22px"),
            }}
          >
            CATALOG
          </h2>

          <p
            className="text-[#231f20]/70 leading-relaxed"
            style={{
              fontSize: v("14px", "16px", "20px"),
              marginBottom: v("36px", "48px", "72px"),
            }}
          >
            Explorează colecțiile complete ale partenerilor noștri
            internaționali. Selectează un brand pentru a accesa cele mai noi
            cataloage și a găsi inspirația pentru proiectul tău.
          </p>

          <PartnerSection
            title="GRESII"
            bestSellers={gresiiBestSellers}
            more={gresiiMore}
            gridCols={gridCols}
            gridGap={gridGap}
            titleSize={categoryTitleSize}
            titleMargin={categoryMargin}
            buttonSize={buttonSize}
            sectionMargin={sectionMargin}
            onSelectie={setModalPartner}
          />

          <PartnerSection
            title="SANITARE"
            bestSellers={sanitareBestSellers}
            more={sanitareMore}
            gridCols={gridCols}
            gridGap={gridGap}
            titleSize={categoryTitleSize}
            titleMargin={categoryMargin}
            buttonSize={buttonSize}
            sectionMargin="0px"
            onSelectie={setModalPartner}
          />
        </div>
      </section>
      {modalPartner && (
        <SelectieModal
          partner={modalPartner}
          onClose={() => setModalPartner(null)}
        />
      )}
    </>
  );
};
