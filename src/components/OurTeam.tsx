import { useState } from "react";
import { useScreen } from "../hooks/useScreen";
import LaFanezaBlancoW from "../assets/lafaenza-blanco-w.webp";
import backgroundLaptop from "../assets/background-laptop.webp";
import BlancoDark from "../assets/blanco6grm.webp";

type TeamMember = {
  name: string;
  role: string;
  phone: string;
  photo?: string;
  isContact?: boolean;
};

const contacts: TeamMember[] = [
  {
    name: "Andrei Popescu",
    role: "Director general",
    phone: "+40 721 000 001",
    isContact: true,
  },
  {
    name: "Ioana Dumitrescu",
    role: "Consultant proiecte",
    phone: "+40 721 000 002",
    isContact: true,
  },
  {
    name: "Mihai Stan",
    role: "Coordonator vânzări",
    phone: "+40 721 000 003",
    isContact: true,
  },
];

const otherWorkers: TeamMember[] = [
  {
    name: "Elena Marin",
    role: "Consilier showroom",
    phone: "+40 721 000 004",
  },
  {
    name: "Radu Ionescu",
    role: "Specialist logistică",
    phone: "+40 721 000 005",
  },
  {
    name: "Anca Petrescu",
    role: "Responsabil comenzi",
    phone: "+40 721 000 006",
  },
  {
    name: "Vlad Georgescu",
    role: "Montaj și suport tehnic",
    phone: "+40 721 000 007",
  },
  {
    name: "Diana Rusu",
    role: "Recepție și programări",
    phone: "+40 721 000 008",
  },
];

const TeamPhoto = ({ member }: { member: TeamMember }) => {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#ece8e3]">
      <span className="text-[10px] tracking-[0.28em] text-[#231f20]/30 uppercase">
        Foto
      </span>
    </div>
  );
};

const TeamCard = ({
  member,
  isMobile,
}: {
  member: TeamMember;
  isMobile: boolean;
}) => {
  return (
    <article className="relative overflow-hidden rounded-[14px] border border-[#231f20]/10 bg-white shadow-[0_10px_30px_rgba(35,31,32,0.04)]">
      <img
        src={BlancoDark}
        alt=""
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
        <div
          className={`${isMobile ? "aspect-[4/3] w-full" : "w-[170px] min-h-[170px]"} shrink-0`}
        >
          <TeamPhoto member={member} />
        </div>

        <div className="relative flex flex-1 flex-col justify-between gap-4 p-4 tablet:p-5">
          <div className="space-y-2">
            <div>
              <h3 className="text-[18px] font-medium leading-tight text-[#231f20] tablet:text-[20px]">
                {member.name}
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[#231f20]/70 tablet:text-[15px]">
                {member.role}
              </p>
            </div>
          </div>

          <a
            href={`tel:${member.phone.replace(/\s+/g, "")}`}
            className="inline-flex w-fit items-center rounded-full border border-[#231f20]/10 px-4 py-2 text-[12px] tracking-[0.12em] text-[#231f20] transition-colors hover:bg-[#231f20] hover:text-white"
          >
            {member.phone}
          </a>
        </div>
      </div>
    </article>
  );
};

export const OurTeam = () => {
  const { isMobile, isTablet } = useScreen();
  const [showMore, setShowMore] = useState(false);

  const titleSize = isMobile ? "32px" : isTablet ? "38px" : "46px";
  const subtitleSize = isMobile ? "14px" : isTablet ? "16px" : "20px";
  const sectionPaddingTop = isMobile ? "40px" : isTablet ? "72px" : "120px";
  const sectionPaddingBottom = isMobile ? "48px" : isTablet ? "80px" : "140px";
  const contentGap = isMobile ? "28px" : isTablet ? "40px" : "56px";

  return (
    <section
      id="echipa-noastra"
      className="relative isolate w-full overflow-hidden bg-[#f7f3ee]"
      style={{
        paddingTop: sectionPaddingTop,
        paddingBottom: sectionPaddingBottom,
        scrollMarginTop: isMobile ? "72px" : isTablet ? "92px" : "120px",
      }}
    >
      <img
        src={isMobile ? LaFanezaBlancoW : backgroundLaptop}
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover pointer-events-none"
      />
      <div className="relative z-10 mx-auto max-w-[1512px] px-[10px] tablet:px-6 laptop:px-12">
        <div
          className="relative z-10 max-w-[980px]"
          style={{ marginBottom: contentGap }}
        >
          <h2
            className="text-[#231f20]"
            style={{
              fontSize: titleSize,
              marginBottom: isMobile ? "10px" : "14px",
            }}
          >
            ECHIPA NOASTRĂ
          </h2>

          <p
            className="max-w-[760px] leading-relaxed text-[#231f20]/70"
            style={{ fontSize: subtitleSize }}
          >
            Oamenii care fac lucrurile să se întâmple în fiecare zi. Descoperă
            echipa noastră mai jos.
          </p>
        </div>

        <div className="relative z-10">
          <div
            className="grid"
            style={{
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "repeat(2, minmax(0, 1fr))"
                  : "repeat(3, minmax(0, 1fr))",
              gap: isMobile ? "16px" : isTablet ? "20px" : "24px",
            }}
          >
            {contacts.map((member) => (
              <TeamCard key={member.name} member={member} isMobile={isMobile} />
            ))}

            {showMore &&
              otherWorkers.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  isMobile={isMobile}
                />
              ))}
          </div>
        </div>

        {otherWorkers.length > 0 && (
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            className="relative z-10 mt-5 flex items-center gap-2 text-[#231f20]/60 transition-colors hover:text-[#231f20]"
            style={{ fontSize: isMobile ? "13px" : isTablet ? "14px" : "16px" }}
          >
            {showMore ? "Arată mai puțin" : "Arată mai mult"}
            <span
              className="inline-block transition-transform duration-300"
              style={{
                transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▾
            </span>
          </button>
        )}
      </div>
    </section>
  );
};
