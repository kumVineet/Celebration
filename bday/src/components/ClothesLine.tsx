import type { ReactNode } from "react";

const PW = 180;
const PH = 300;

// String y at left/right anchor points (in the 1000×60 viewBox)
const STRING_Y_LEFT = 18;
const STRING_Y_RIGHT = 20;
// Approximate y where the string dips near the polaroid positions (~8% and ~92% x)
// Left polaroid hangs at ~8% x → string y ≈ 10 (see path control points)
// Right polaroid hangs at ~92% x → string y ≈ 12
// We'll use the anchor y values since polaroids sit near the walls

const Clip = () => (
  <svg
    width="14"
    height="28"
    viewBox="0 0 14 28"
    style={{ display: "block", margin: "0 auto", flexShrink: 0 }}
  >
    {/* outer body */}
    <rect
      x="3"
      y="0"
      width="8"
      height="18"
      rx="2.5"
      fill="#b03020"
      opacity=".9"
    />
    {/* inner highlight */}
    <rect
      x="4.5"
      y="1.5"
      width="5"
      height="13"
      rx="1.5"
      fill="#e05040"
      opacity=".55"
    />
    {/* jaw bottom bar */}
    <rect
      x="2"
      y="16"
      width="10"
      height="4"
      rx="1.5"
      fill="#7a1f14"
      opacity=".95"
    />
    {/* spring coil suggestion */}
    <ellipse cx="7" cy="9" rx="1.5" ry="1.5" fill="#fff" opacity=".18" />
    {/* pin that pierces the string — rendered below the jaw */}
    <line
      x1="7"
      y1="20"
      x2="7"
      y2="28"
      stroke="#c0392b"
      strokeWidth="1.5"
      opacity=".6"
    />
  </svg>
);

const StringLine = ({ fromY, toY }: { fromY: number; toY: number }) => (
  <line
    x1="7"
    y1={fromY}
    x2="7"
    y2={toY}
    stroke="#c0392b"
    strokeWidth="1.2"
    opacity=".5"
    strokeDasharray="2 2"
  />
);

const Polaroid = ({
  image,
  label,
  rot,
  delay,
}: {
  image: ReactNode;
  label: string;
  rot: number;
  delay: string;
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
      {/* clip body */}
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
      {/* thread from clip jaw to polaroid top */}
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

    {/* Polaroid card */}
    <div
      style={{
        width: PW,
        height: PH, // ✅ IMPORTANT: parent must have height
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
      {/* photo area */}
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
      {/* caption */}
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
  /** Whether to show the clothesline (e.g. tie to a phase state) */
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
      {/* ── Desktop clothesline ── */}
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
        {/* Wavy string — sits at ~30% from top of the available area */}
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
          {/* Catenary string */}
          <path
            d="M0,18 C80,8 180,40 300,28 C420,16 460,12 500,20 C540,28 580,44 700,32 C820,20 920,8 1000,20"
            fill="none"
            stroke="#e91e8c"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".6"
            filter="url(#stringShadow)"
          />
          {/* Wall anchors */}
          <circle cx="0" cy="18" r="5" fill="#f48fb1" opacity=".8" />
          <circle cx="1000" cy="20" r="5" fill="#f48fb1" opacity=".8" />
          {/* Tiny hearts along string */}
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

        {/* Left polaroid — anchored so clip top aligns with string */}
        <div
          className="clothesline-left"
          style={{
            position: "absolute",
            top: "clamp(80px, 28vh, 220px)",
            left: "clamp(16px, 7vw, 120px)",
            // shift up by clip height (44px) so clip top = string top
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

        {/* Right polaroid */}
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

      {/* ── Mobile: stacked polaroids (no string) ── */}
      <div
        className="clothesline-mobile-left"
        style={{ animation: "slideUp .7s .1s ease both" }}
      >
        <Polaroid
          image={leftImage}
          label={leftLabel ?? ""}
          rot={-3}
          delay="0s"
        />
      </div>
      <div
        className="clothesline-mobile-right"
        style={{ animation: "slideUp .7s .3s ease both" }}
      >
        <Polaroid
          image={rightImage}
          label={rightLabel ?? ""}
          rot={3}
          delay="0.5s"
        />
      </div>

      <style>{`
        .clothesline-left, .clothesline-right { display: block; }
        .clothesline-mobile-left, .clothesline-mobile-right { display: none; }

        @media (max-width: 700px) {
          .clothesline-wrap { display: none; }
          .clothesline-mobile-left {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
          }
          .clothesline-mobile-right {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default ClothesLine;
