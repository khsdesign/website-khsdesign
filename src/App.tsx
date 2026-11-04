import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturesBand } from "./components/FeaturesBand";
import { Services } from "./components/Services";
import { StatsBand } from "./components/StatsBand";
import { Showroom } from "./components/Showroom";
import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { LastBand } from "./components/LastBand";
// import { OurTeam } from "./components/OurTeam";
// import { Delimitator } from "./components/Delimitator";
// import { useScreen } from "./hooks/useScreen";

const App = () => {
  // const { isMobile, isTablet } = useScreen();
  // const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  return (
    <div className="bg-white w-full font-alike">
      <Header />
      <Hero />
      <FeaturesBand />
      <Services />
      <StatsBand />
      <Showroom />
      <LastBand />

      {/* Delimiter */}
      {/* <div
        className="bg-white flex items-center justify-center w-full"
        style={{ height: v("95px", "109px", "153px") }}
      >
        <h2
          className="text-[#231f20]"
          style={{ fontSize: v("24px", "32px", "48px"), letterSpacing: "0.03em" }}
        >
          DELIMITARE
        </h2>
      </div> */}

      <Catalog />
      {/* <Delimitator />
        <OurTeam /> */}
      <Footer />
    </div>
  );
};

export default App;
