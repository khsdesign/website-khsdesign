import khsLogo from "../assets/khs-logo.png";
import footerBg from "../assets/footer-bg.png";
import footerMap from "../assets/footer-map.png";
import iconPhone from "../assets/icon-phone.svg";
import iconPin from "../assets/icon-pin.svg";
import iconTiktok from "../assets/social-tiktok.svg";
import iconInstagram from "../assets/social-instagram.svg";
import iconFacebook from "../assets/social-facebook.svg";
import { useScreen } from "../hooks/useScreen";

export const Footer = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => isMobile ? m : isTablet ? t : l;

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden text-white"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: v("343px", "500px", "700px"),
      }}
    >
      <div
        className="relative max-w-[1512px] mx-auto"
        style={{
          paddingLeft: v("27px", "48px", "80px"),
          paddingRight: v("27px", "48px", "80px"),
          paddingTop: v("15px", "32px", "64px"),
          paddingBottom: v("20px", "40px", "80px"),
        }}
      >
        {/* Logo & Tagline */}
        <div className="text-center" style={{ marginBottom: v("37px", "56px", "80px") }}>
          <img
            src={khsLogo}
            alt="KHS"
            className="mx-auto rounded-[5px]"
            style={{ height: v("43px", "83px", "137px"), width: "auto", marginBottom: v("9px", "16px", "28px") }}
          />
          <p style={{ fontSize: v("14px", "20px", "28px") }}>
            Transformăm spații în experiențe de neuitat.
          </p>
        </div>

        {/* Social Media */}
        <div
          className="flex justify-center"
          style={{ gap: v("24px", "40px", "64px"), marginBottom: v("37px", "56px", "80px") }}
        >
          <a
            href="https://www.tiktok.com/@khsdesign?_r=1&_t=ZN-954GpnASmjG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconTiktok}
              alt="TikTok"
              className="hover:opacity-70 transition-opacity"
              style={{ width: v("24px", "50px", "87px"), height: v("24px", "50px", "87px") }}
            />
          </a>
          <a
            href="https://www.instagram.com/_khsdesign/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconInstagram}
              alt="Instagram"
              className="hover:opacity-70 transition-opacity"
              style={{ width: v("24px", "50px", "87px"), height: v("24px", "50px", "87px") }}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100064758679069"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconFacebook}
              alt="Facebook"
              className="hover:opacity-70 transition-opacity"
              style={{ width: v("24px", "50px", "87px"), height: v("24px", "50px", "87px") }}
            />
          </a>
        </div>

        {/* Contact, Program, Map */}
        <div
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3"
          style={{ gap: v("30px", "48px", "80px"), marginBottom: v("20px", "36px", "60px") }}
        >
          {/* Contact */}
          <div>
            <h3
              className="text-[#aaa]"
              style={{ fontSize: v("20px", "32px", "48px"), marginBottom: v("12px", "20px", "32px") }}
            >
              CONTACT
            </h3>
            <div className="text-[#aaa]" style={{ fontSize: v("13px", "24px", "36px") }}>
              <div
                className="flex items-center"
                style={{ gap: v("14px", "20px", "32px"), marginBottom: v("10px", "16px", "24px") }}
              >
                <img
                  src={iconPhone}
                  alt=""
                  style={{ width: v("27px", "48px", "83px"), height: v("27px", "48px", "83px"), flexShrink: 0 }}
                />
                <p>0735450650 - Cristina (Achiziții)</p>
              </div>
              <div
                className="flex items-center"
                style={{ gap: v("14px", "20px", "32px"), marginBottom: v("10px", "16px", "24px") }}
              >
                <img
                  src={iconPhone}
                  alt=""
                  style={{ width: v("27px", "48px", "83px"), height: v("27px", "48px", "83px"), flexShrink: 0 }}
                />
                <p>0744158868 - Alexa (Design)</p>
              </div>
              <a
                href="https://maps.app.goo.gl/Y2s5uE81NCGY36St5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:opacity-70 transition-opacity"
                style={{ gap: v("14px", "20px", "32px") }}
              >
                <img
                  src={iconPin}
                  alt=""
                  style={{
                    width: v("27px", "48px", "83px"),
                    height: v("27px", "48px", "83px"),
                    flexShrink: 0,
                    marginTop: "0.25em",
                  }}
                />
                <div>
                  <p style={{ fontSize: v("15px", "26px", "40px"), marginBottom: "0.25em" }}>
                    Str. Aurel Vlaicu Nr. 100
                  </p>
                  <p style={{ fontSize: v("13px", "24px", "36px") }}>Deschide în Google Maps —</p>
                </div>
              </a>
            </div>
          </div>

          {/* Program */}
          <div>
            <h3
              className="text-[#aaa]"
              style={{ fontSize: v("20px", "32px", "48px"), marginBottom: v("12px", "20px", "32px") }}
            >
              PROGRAM
            </h3>
            <div className="text-[#aaa]" style={{ fontSize: v("13px", "24px", "36px") }}>
              <p style={{ marginBottom: v("4px", "8px", "12px") }}>Luni - Vineri: 08:00 - 17:00</p>
              <p style={{ marginBottom: v("4px", "8px", "12px") }}>Sâmbătă: închis</p>
              <p>Duminică: închis</p>
            </div>
          </div>

          {/* Map */}
          <div className="tablet:col-span-2 desktop:col-span-1">
            <a
              href="https://maps.app.goo.gl/Yg2NwVBxwf9EQRzq6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={footerMap}
                alt="Locație KHS"
                className="w-full rounded-[5px] hover:opacity-90 transition-opacity"
                style={{ aspectRatio: "332/201", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-[#aaa] border-t border-[#aaa]/20"
          style={{ fontSize: v("13px", "24px", "36px"), paddingTop: v("8px", "12px", "24px") }}
        >
          <p>© 2026 KHS. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};
