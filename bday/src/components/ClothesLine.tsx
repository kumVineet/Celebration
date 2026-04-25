import type { ReactNode } from "react";

const PW = 180;
const PH = 300;
const PW_MOBILE = 120;
const PH_MOBILE = 200;

const Polaroid = ({
  image,
  label,
  rot,
  delay,
  width = PW,
  height = PH,
}: {
  image: ReactNode;
  label: string;
  rot: number;
  delay: string;
  width?: number;
  height?: number;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      animation: `sway 4.5s ${delay} ease-in-out infinite`,
      transformOrigin: "top center",
    }}
  >
    {/* Clip + connecting thread as one SVG so they align perfectly */}
    <svg
      width="14"
      height="44"
      viewBox="0 0 14 44"
      style={{ display: "block", margin: "0 auto", flexShrink: 0 }}
    >
      <rect
        x="3"
        y="0"
        width="8"
        height="18"
        rx="2.5"
        fill="#b03020"
        opacity=".9"
      />
      <rect
        x="4.5"
        y="1.5"
        width="5"
        height="13"
        rx="1.5"
        fill="#e05040"
        opacity=".55"
      />
      <rect
        x="2"
        y="16"
        width="10"
        height="4"
        rx="1.5"
        fill="#7a1f14"
        opacity=".95"
      />
      <ellipse cx="7" cy="9" rx="1.5" ry="1.5" fill="#fff" opacity=".18" />
      <line
        x1="7"
        y1="20"
        x2="7"
        y2="44"
        stroke="#c0392b"
        strokeWidth="1.2"
        opacity=".5"
        strokeDasharray="2 2"
      />
    </svg>

    <div
      style={{
        width,
        height,
        background: "white",
        borderRadius: 3,
        boxShadow: "0 8px 32px rgba(0,0,0,.20), 0 2px 6px rgba(0,0,0,.12)",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        transform: `rotate(${rot}deg)`,
        transformOrigin: "top center",
      }}
    >
      <div
        style={{
          flex: "0 0 90%",
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
          fontSize: 36,
        }}
      >
        {image ?? "📸"}
      </div>
      <p
        style={{
          flex: "0 0 10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Dancing Script',cursive",
          fontSize: "0.85rem",
          color: "#7a2a42",
          textAlign: "center",
          marginTop: 6,
          lineHeight: 1.2,
        }}
      >
        {label}
      </p>
    </div>
  </div>
);

export type ClothesLineProps = {
  visible: boolean;
  leftImage?: ReactNode;
  leftLabel?: string;
  rightImage?: ReactNode;
  rightLabel?: string;
};

const ClothesLine = ({
  visible,
  leftImage,
  leftLabel,
  rightImage,
  rightLabel,
}: ClothesLineProps) => {
  if (!visible) return null;

  return (
    <>
      {/* ── Desktop: horizontal wavy string with two polaroids ── */}
      <div
        className="clothesline-wrap"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          animation: "fadeIn .9s .2s ease both",
        }}
      >
        <svg
          style={{
            position: "absolute",
            top: "clamp(80px, 28vh, 220px)",
            left: 0,
            width: "100%",
            height: 60,
          }}
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="stringShadow"
              x="-20%"
              y="-50%"
              width="140%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                floodColor="#c2185b"
                floodOpacity=".18"
              />
            </filter>
          </defs>
          <path
            d="M0,18 C80,8 180,40 300,28 C420,16 460,12 500,20 C540,28 580,44 700,32 C820,20 920,8 1000,20"
            fill="none"
            stroke="#e91e8c"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".6"
            filter="url(#stringShadow)"
          />
          <circle cx="0" cy="18" r="5" fill="#f48fb1" opacity=".8" />
          <circle cx="1000" cy="20" r="5" fill="#f48fb1" opacity=".8" />
          {[170, 370, 620, 830].map((x, i) => (
            <text
              key={i}
              x={x}
              y={i % 2 === 0 ? 13 : 27}
              fontSize="9"
              fill="#f48fb1"
              opacity=".5"
            >
              ♥
            </text>
          ))}
        </svg>

        <div
          className="clothesline-left"
          style={{
            position: "absolute",
            top: "clamp(80px, 28vh, 220px)",
            left: "clamp(16px, 7vw, 120px)",
            marginTop: -2,
          }}
        >
          <Polaroid
            image={leftImage}
            label={leftLabel ?? ""}
            rot={-6}
            delay="0s"
          />
        </div>

        <div
          className="clothesline-right"
          style={{
            position: "absolute",
            top: "clamp(80px, 28vh, 220px)",
            right: "clamp(16px, 7vw, 120px)",
            marginTop: -2,
          }}
        >
          <Polaroid
            image={rightImage}
            label={rightLabel ?? ""}
            rot={5}
            delay="0.8s"
          />
        </div>
      </div>

      {/* ── Mobile: vertical wavy string overlay (full page height) with polaroids stuck to it ── */}
      <div
        className="clothesline-vertical"
        style={{
          animation: "fadeIn .9s .2s ease both",
        }}
      >
        <svg
          className="clothesline-vertical-string"
          viewBox="0 0 60 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="vStringShadow"
              x="-50%"
              y="-20%"
              width="200%"
              height="140%"
            >
              <feDropShadow
                dx="2"
                dy="0"
                stdDeviation="2"
                floodColor="#c2185b"
                floodOpacity=".18"
              />
            </filter>
          </defs>
          <path
            d="M30,0 C20,200 40,400 30,500 C20,600 40,800 30,1000"
            fill="none"
            stroke="#e91e8c"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".6"
            filter="url(#vStringShadow)"
          />
          <circle cx="30" cy="0" r="5" fill="#f48fb1" opacity=".8" />
          <circle cx="30" cy="1000" r="5" fill="#f48fb1" opacity=".8" />
        </svg>

        {/* Top polaroid: clip touches the very top of the string */}
        <div className="clothesline-vertical-top">
          <Polaroid
            image={leftImage}
            label={leftLabel ?? ""}
            rot={-3}
            delay="0s"
            width={PW_MOBILE}
            height={PH_MOBILE}
          />
        </div>
        {/* Bottom polaroid: clip touches near the bottom of the string */}
        <div className="clothesline-vertical-bottom">
          <Polaroid
            image={rightImage}
            label={rightLabel ?? ""}
            rot={3}
            delay="0.6s"
            width={PW_MOBILE}
            height={PH_MOBILE}
          />
        </div>
      </div>

      <style>{`
        .clothesline-left, .clothesline-right { display: block; }
        .clothesline-vertical { display: none; }

        @media (max-width: 700px) {
          .clothesline-wrap { display: none; }
          .clothesline-vertical {
            display: block;
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
          }
          .clothesline-vertical-string {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 100%;
          }
          /* Polaroid wrapper is a flex column with the clip + photo both centered.
             So horizontally centering the wrapper puts the clip pin on the string. */
          .clothesline-vertical-top,
          .clothesline-vertical-bottom {
            position: absolute;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
          }
          .clothesline-vertical-top { top: 16px; }
          .clothesline-vertical-bottom { bottom: 30px; }
        }
      `}</style>
    </>
  );
};

export default ClothesLine;
