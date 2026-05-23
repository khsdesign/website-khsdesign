import khsLogo from "../assets/khs-logo.png";
import iconPhone from "../assets/icon-phone.svg";
import iconPin from "../assets/icon-pin.svg";
import iconTiktok from "../assets/social-tiktok.svg";
import iconInstagram from "../assets/social-instagram.svg";
import iconFacebook from "../assets/social-facebook.svg";
import BlancoDark from "../assets/blanco6grm.png";
import { useScreen } from "../hooks/useScreen";

export const Footer = () => {
  const { isMobile, isTablet } = useScreen();
  const v = <T,>(m: T, t: T, l: T): T => (isMobile ? m : isTablet ? t : l);

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden text-black"
      style={{ minHeight: v("auto", "80vh", "80vh") }}
    >
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="relative mx-auto flex min-h-full max-w-[1512px] flex-col"
        style={{
          paddingLeft: v("27px", "42px", "64px"),
          paddingRight: v("27px", "42px", "64px"),
          paddingTop: v("14px", "20px", "28px"),
          paddingBottom: v("14px", "20px", "28px"),
        }}
      >
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-4 text-center md:gap-5">
            <div className="text-center">
              <img
                src={khsLogo}
                alt="KHS"
                className="mx-auto rounded-[5px]"
                style={{
                  height: v("26px", "34px", "42px"),
                  width: "auto",
                  marginBottom: v("4px", "6px", "8px"),
                }}
              />
              <p style={{ fontSize: v("13px", "15px", "16px") }}>
                Calitatea nu costă, ci lipsa ei.
              </p>
            </div>

            <div
              className="flex justify-center"
              style={{ gap: v("12px", "16px", "22px") }}
            >
              <a
                href="https://www.tiktok.com/@khsdesign?_r=1&_t=ZN-96J4oSlHExi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={iconTiktok}
                  alt="TikTok"
                  className="brightness-0 transition-opacity hover:opacity-70"
                  style={{
                    width: v("16px", "18px", "24px"),
                    height: v("16px", "18px", "24px"),
                  }}
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
                  className="brightness-0 transition-opacity hover:opacity-70"
                  style={{
                    width: v("16px", "18px", "24px"),
                    height: v("16px", "18px", "24px"),
                  }}
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
                  className="brightness-0 transition-opacity hover:opacity-70"
                  style={{
                    width: v("16px", "18px", "24px"),
                    height: v("16px", "18px", "24px"),
                  }}
                />
              </a>
            </div>
          </div>

          <div
            className="mt-auto grid grid-cols-1 items-end md:grid-cols-2 md:items-end"
            style={{
              gap: v("18px", "24px", "30px"),
              marginBottom: v("10px", "12px", "14px"),
            }}
          >
            <div
              className="flex w-full flex-col justify-end"
              style={{ gap: v("12px", "14px", "18px") }}
            >
              <div>
                <h3
                  className="text-black"
                  style={{
                    fontSize: v("15px", "18px", "24px"),
                    marginBottom: v("7px", "8px", "12px"),
                  }}
                >
                  CONTACT
                </h3>
                <div
                  className="text-black"
                  style={{ fontSize: v("11px", "13px", "16px") }}
                >
                  <a
                    href="tel:+40735450650"
                    aria-label="Call Cristina 0735450650"
                    className="flex items-center"
                    style={{
                      gap: v("9px", "10px", "14px"),
                      marginBottom: v("5px", "6px", "8px"),
                    }}
                  >
                    <img
                      src={iconPhone}
                      alt=""
                      className="brightness-0"
                      style={{
                        width: v("16px", "20px", "28px"),
                        height: v("16px", "20px", "28px"),
                        flexShrink: 0,
                      }}
                    />
                    <p>0735450650 - Cristina (Achiziții plăci ceramice)</p>
                  </a>
                  <a
                    href="tel:+40729400360"
                    aria-label="Call Nicoleta 0729400360"
                    className="flex items-center"
                    style={{
                      gap: v("9px", "10px", "14px"),
                      marginBottom: v("5px", "6px", "8px"),
                    }}
                  >
                    <img
                      src={iconPhone}
                      alt=""
                      className="brightness-0"
                      style={{
                        width: v("16px", "20px", "28px"),
                        height: v("16px", "20px", "28px"),
                        flexShrink: 0,
                      }}
                    />
                    <p>
                      0729400360 - Nicoleta (Achiziții materiale de construcție)
                    </p>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/Y2s5uE81NCGY36St5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start transition-opacity hover:opacity-70"
                    style={{ gap: v("9px", "10px", "14px") }}
                  >
                    <img
                      src={iconPin}
                      alt=""
                      className="brightness-0"
                      style={{
                        width: v("14px", "18px", "24px"),
                        height: v("16px", "20px", "28px"),
                        flexShrink: 0,
                        marginTop: "0.25em",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: v("11px", "13px", "16px"),
                          marginBottom: "0.25em",
                        }}
                      >
                        Str. Aurel Vlaicu Nr. 100
                      </p>
                      <p style={{ fontSize: v("11px", "13px", "16px") }}>
                        Deschide în Google Maps —
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3
                  className="text-black"
                  style={{
                    fontSize: v("15px", "18px", "24px"),
                    marginBottom: v("7px", "8px", "12px"),
                  }}
                >
                  PROGRAM
                </h3>
                <div
                  className="text-black"
                  style={{ fontSize: v("11px", "13px", "16px") }}
                >
                  <p style={{ marginBottom: v("3px", "4px", "6px") }}>
                    Luni - Vineri: 08:00 - 17:00
                  </p>
                  <p style={{ marginBottom: v("3px", "4px", "6px") }}>
                    Sâmbătă: închis
                  </p>
                  <p>Duminică: închis</p>
                </div>
              </div>
            </div>

            <div className="w-full md:h-full md:self-end">
              <div
                className="relative overflow-hidden rounded-[5px]"
                style={{
                  height: v("234px", "180px", "220px"),
                  minHeight: v("234px", "180px", "220px"),
                }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Str.+Aurel+Vlaicu+Nr.+100,+Satu+Mare,+Romania&output=embed"
                  width="100%"
                  height="100%"
                  className="block w-full"
                  style={{
                    border: 0,
                    height: v("246px", "180px", "220px"),
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KHS Design Location"
                />
              </div>
            </div>
          </div>

          <div
            className="border-t border-[#231f20]/20 text-center text-black"
            style={{
              fontSize: v("11px", "12px", "14px"),
              paddingTop: v("6px", "8px", "10px"),
            }}
          >
            <p>© 2026 KHS. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
