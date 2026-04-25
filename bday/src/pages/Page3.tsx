import { useState } from "react";
import Confetti from "../components/Confetti";
import ClothesLine from "../components/ClothesLine";
import type { PageProps } from "../types/pageProps";
import TenorGif from "../components/TenorGif";
import config from "../config";
import pics from "../pics";

const Page3 = ({ onNext }: PageProps) => {
  const [phase, setPhase] = useState(0);
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening || phase !== 0) return;
    setOpening(true);
    setTimeout(() => setPhase(1), 1100);
  };

  return (
    <div
      className="scene"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Confetti active={phase >= 1} />

      <ClothesLine
        visible={phase < 1}
        leftImage={
          <img
            src={pics.img3}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
        rightImage={
          <img
            src={pics.img4}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      <ClothesLine
        visible={phase >= 1}
        leftLabel="Happy Birthday 🎂 "
        rightLabel="Happy Birthday 🎂 "
        leftImage={
          <video
            src={pics.bdayVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        rightImage={
          <img
            src={pics.img5}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      {/* ✅ CENTERED CONTENT */}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div>
          {/* 🎁 PHASE 0 — animated gift box */}
          {phase === 0 && (
            <div style={{ animation: "slideUp .7s ease both" }}>
              <div
                onClick={handleOpen}
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginBottom: 18,
                  paddingTop: 100,
                  cursor: opening ? "default" : "pointer",
                  animation: opening
                    ? "none"
                    : "giftFloat 2.6s ease-in-out infinite",
                  filter: "drop-shadow(0 14px 28px rgba(233,30,140,.35))",
                }}
              >
                {/* sparkles around the box */}
                {["✨", "💖", "✨", "💕", "✨", "💖"].map((s, i) => {
                  const angle = (i / 6) * Math.PI * 2;
                  const r = 90;
                  return (
                    <span
                      key={i}
                      style={{
                        position: "absolute",
                        left: `calc(50% + ${Math.cos(angle) * r}px)`,
                        top: `calc(50% + ${Math.sin(angle) * r}px)`,
                        transform: "translate(-50%,-50%)",
                        fontSize: 18,
                        opacity: opening ? 1 : 0.85,
                        animation: opening
                          ? `confBurst .9s ${i * 0.04}s ease-out forwards`
                          : `pulse ${1.6 + i * 0.15}s ${i * 0.12}s ease-in-out infinite`,
                        // @ts-ignore - CSS vars for confBurst
                        "--cx": `${Math.cos(angle) * 80}px`,
                        "--cy": `${Math.sin(angle) * 80}px`,
                      }}
                    >
                      {s}
                    </span>
                  );
                })}

                <svg
                  width="180"
                  height="200"
                  viewBox="0 0 180 200"
                  style={{ overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="boxBody" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff5fa8" />
                      <stop offset="100%" stopColor="#c2185b" />
                    </linearGradient>
                    <linearGradient id="boxLid" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff7fbb" />
                      <stop offset="100%" stopColor="#e91e8c" />
                    </linearGradient>
                  </defs>

                  {/* glow behind box when opening */}
                  {opening && (
                    <circle
                      cx="90"
                      cy="120"
                      r="20"
                      fill="#fff7c2"
                      opacity=".9"
                      style={{ animation: "popIn .6s ease forwards" }}
                    />
                  )}

                  {/* box body */}
                  <rect
                    x="30"
                    y="90"
                    width="120"
                    height="100"
                    rx="6"
                    fill="url(#boxBody)"
                  />
                  {/* vertical ribbon on body */}
                  <rect x="82" y="90" width="16" height="100" fill="#ffd54f" />
                  {/* horizontal ribbon shimmer */}
                  <rect
                    x="30"
                    y="130"
                    width="120"
                    height="6"
                    fill="#fff"
                    opacity=".18"
                  />

                  {/* lid (rotates/lifts off when opening) */}
                  <g
                    style={{
                      transformOrigin: "90px 90px",
                      transform: opening
                        ? "translateY(-90px) rotate(-18deg)"
                        : "translateY(0) rotate(0)",
                      transition: "transform .9s cubic-bezier(.22,1.2,.36,1)",
                    }}
                  >
                    <rect
                      x="22"
                      y="74"
                      width="136"
                      height="28"
                      rx="4"
                      fill="url(#boxLid)"
                    />
                    <rect x="82" y="74" width="16" height="28" fill="#ffd54f" />

                    {/* bow */}
                    <ellipse cx="76" cy="66" rx="14" ry="10" fill="#ffd54f" />
                    <ellipse cx="104" cy="66" rx="14" ry="10" fill="#ffd54f" />
                    <circle cx="90" cy="66" r="6" fill="#f9a825" />
                    <path
                      d="M70 76 Q72 84 66 90"
                      stroke="#f9a825"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M110 76 Q108 84 114 90"
                      stroke="#f9a825"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* hearts popping out when opening */}
                  {opening &&
                    ["♥", "💖", "♡"].map((h, i) => (
                      <text
                        key={i}
                        x={70 + i * 20}
                        y="100"
                        fontSize="20"
                        fill="#e91e8c"
                        style={{
                          animation: `heartPop 1.1s ${0.1 + i * 0.12}s ease-out forwards`,
                          opacity: 0,
                        }}
                      >
                        {h}
                      </text>
                    ))}
                </svg>
              </div>

              <div className="glass" style={{ padding: "22px 52px" }}>
                <p
                  className="t-script"
                  style={{
                    fontSize: "1.6rem",
                    marginBottom: 14,
                    animation: opening ? "none" : "pulse 2s infinite",
                    color: "#b5174b",
                  }}
                >
                  {opening
                    ? "Opening… 💖"
                    : "A little celebration just for you 🎀"}
                </p>

                <button
                  className="btn byes"
                  onClick={handleOpen}
                  disabled={opening}
                  style={{
                    animation: opening ? "none" : "pulse 1.8s infinite",
                    opacity: opening ? 0.6 : 1,
                  }}
                >
                  {opening ? "✨ ✨ ✨" : "Tap to open 💕"}
                </button>
              </div>
            </div>
          )}

          {/* 🎉 PHASE 1 */}
          {phase >= 1 && (
            <div
              className="glass"
              style={{
                marginTop: 10,
                padding: "26px 52px",
                maxWidth: 540,
                animation: "slideUp .8s ease both",
              }}
            >
              <TenorGif
                url="https://media.tenor.com/bHha2gx1MXAAAAAi/tkthao219-bubududu.gif"
                width={260}
                height={260}
                clean
              />
              <h2
                className="t-title"
                style={{
                  marginBottom: 12,
                  animation: "heartbeat 2.5s infinite",
                  fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                }}
              >
                🎂 Happy Birthday {config.recipientName}!!!
              </h2>

              <p
                className="t-script"
                style={{
                  fontSize: "1.5rem",
                  color: "#b5174b",
                }}
              >
                You are my favourite notification!!
              </p>
              <p
                className="t-script"
                style={{
                  fontSize: "1.8rem",
                  color: "#b5174b",
                }}
              >
                Stay Cute, Stay Happy
              </p>
            </div>
          )}
        </div>
      </div>

      {phase >= 1 && (
        <button
          onClick={onNext}
          style={{
            position: "fixed",
            bottom: 170,
            right: 20,
            zIndex: 300,
            border: "none",
            padding: "clamp(10px,1.5vw,13px) clamp(22px,3vw,38px)",
            borderRadius: 50,
            fontFamily: "'Dancing Script',cursive",
            fontSize: "clamp(1rem,1.8vw,1.25rem)",
            fontWeight: 700,
            cursor: "pointer",
            background: "linear-gradient(135deg,#f9a825,#f57f17)",
            color: "#fff",
            boxShadow: "0 4px 22px rgba(245,127,23,.45)",
            animation: "slideUp .6s ease both, heartbeat 2.2s 0.7s infinite",
          }}
        >
          Next →
        </button>
      )}
    </div>
  );
};

export default Page3;
