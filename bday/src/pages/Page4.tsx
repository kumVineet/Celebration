import { useState } from "react";
import { BowDecoration, Lily, Rose, Tulip } from "../components/svg";
import type { PageProps } from "../types/pageProps";
import config from "../config";
import content from "../content";
import ClothesLine from "../components/ClothesLine";
import pics from "../pics";

const Page4 = ({ onNext }: PageProps) => {
  const [phase, setPhase] = useState(0);

  const openEnv = () => {
    if (phase !== 0) return;
    setPhase(1);
    setTimeout(() => setPhase(2), 700);
    setTimeout(() => setPhase(3), 1400);
  };

  return (
    <div
      className="scene"
      style={{
        padding: "clamp(12px, 3vw, 24px)",
      }}
    >
      {/* ── Envelope phase ── */}
      {phase < 2 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            animation: "bounceIn .7s ease both",
            marginTop: -60,
          }}
        >
          {/* Flower row */}
          <div style={{ display: "flex", gap: 10 }}>
            <Rose size={36} color="#e91e8c" />
            <Lily size={32} />
            <Tulip size={30} color="#ff80ab" />
            <Lily size={32} />
            <Rose size={36} color="#c2185b" />
          </div>

          <p
            className="t-script"
            style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "#b5174b" }}
          >
            waiting for you to open it…
          </p>

          {/* Envelope SVG */}
          <div
            onClick={openEnv}
            style={{
              cursor: phase === 0 ? "pointer" : "default",
              display: "inline-block",
              textAlign: "center",
              transform: phase === 0 ? "scale(1)" : "scale(1.02)",
              transition: "transform .25s ease",
            }}
          >
            <svg
              width="min(320px, 75vw)" // 🔥 bigger
              height="auto"
              viewBox="0 0 250 190"
              style={{
                overflow: "visible",
                filter: "drop-shadow(0 12px 30px rgba(233,30,140,.25))", // ✨ depth
                animation:
                  phase === 0 ? "giftFloat 3s ease-in-out infinite" : "none",
              }}
            >
              {/* Envelope body */}
              <rect
                x="10"
                y="62"
                width="230"
                height="120" // ✅ fixed proportions
                rx="12"
                fill="#fff5f8"
                stroke="#f48fb1"
                strokeWidth="2"
              />

              {/* Bottom fold */}
              <path
                d="M 10 182 L 125 120 L 240 182 Z"
                fill="#fce4ec"
                stroke="#f8bbd0"
                strokeWidth="1.5"
              />

              {/* Side folds */}
              <line x1="10" y1="62" x2="125" y2="120" stroke="#f8bbd0" />
              <line x1="240" y1="62" x2="125" y2="120" stroke="#f8bbd0" />

              {/* Flap */}
              <path
                d="M 10 62 L 125 132 L 240 62 Z"
                fill="#f8bbd0"
                stroke="#f48fb1"
                strokeWidth="1.5"
                style={{
                  transformOrigin: "125px 62px",
                  transform:
                    phase >= 1
                      ? "perspective(500px) rotateX(-170deg)"
                      : "rotateX(0deg)",
                  transition: "transform .9s cubic-bezier(.22,1,.36,1)",
                }}
              />

              {/* Heart seal */}
              {phase === 0 && (
                <text
                  x="125"
                  y="105"
                  textAnchor="middle"
                  fontSize="28"
                  fill="#e91e8c"
                  style={{
                    filter: "drop-shadow(0 2px 6px rgba(233,30,140,.4))",
                  }}
                >
                  ♥
                </text>
              )}
            </svg>

            {/* 💌 CTA */}
            {phase === 0 && (
              <p
                className="t-script"
                style={{
                  marginTop: 12,
                  animation: "pulse 1.5s infinite",
                  fontSize: "1.4rem",
                  textAlign: "center",
                  color: "#c2185b",
                  letterSpacing: "0.5px",
                }}
              >
                Tap to open 💌
              </p>
            )}
          </div>
        </div>
      )}

      <ClothesLine
        visible={phase < 2}
        leftImage={
          <img
            src={pics.img6}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
        rightImage={
          <img
            src={pics.img7}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      <ClothesLine
        visible={phase >= 2}
        leftImage={
          <img
            src={pics.img8}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
        rightImage={
          <img
            src={pics.img9}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      {/* ── Letter phase ── */}
      {phase >= 2 && (
        <div
          className="letter-wrap"
          style={{
            width: "80%",
            maxWidth: 700,
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            gap: "clamp(12px, 2vw, 24px)",
            animation: "letterRise .9s cubic-bezier(.22,1,.36,1) both",
          }}
        >
          {/* ── Left: letter ── */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Letter card */}
            <div
              className="letter-card"
              style={{
                flex: 1,
                minHeight: 0,
                background: "white",
                borderRadius: "clamp(16px, 3vw, 28px)",
                boxShadow: "0 12px 48px rgba(233,30,140,.18)",
                border: "1.5px solid #f8bbd0",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                marginTop: 22,
                marginBottom: 8,
              }}
            >
              {/* Bow */}
              <div
                style={{ position: "absolute", top: -20, left: 12, zIndex: 2 }}
              >
                <BowDecoration />
              </div>

              {/* Header */}
              <div
                style={{
                  padding: "clamp(28px,4vw,44px) clamp(20px,5vw,52px) 0",
                  flexShrink: 0,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Dancing Script',cursive",
                    fontSize: "clamp(1.4rem,3vw,2rem)",
                    color: "#b5174b",
                    marginBottom: 8,
                    marginTop: 12,
                  }}
                >
                  Hey {config.recipientName},
                </h3>
              </div>

              {/* Scrollable body */}
              <div
                className="letter-body"
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "auto",
                  padding: "0 clamp(20px,5vw,52px) clamp(20px,3vw,32px)",
                  background:
                    "repeating-linear-gradient(transparent,transparent 31px,#fde8f0 32px)",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Dancing Script',cursive",
                    fontSize: "clamp(1rem,1.8vw,1.2rem)",
                    color: "#3a0c1e",
                    lineHeight: "32px",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                    margin: 0,
                    paddingTop: 8,
                  }}
                >
                  {content.letterText}
                </p>

                <p
                  style={{
                    fontFamily: "'Dancing Script',cursive",
                    fontSize: "clamp(1.1rem,2vw,1.4rem)",
                    color: "#e91e8c",
                    textAlign: "right",
                    marginTop: 24,
                    paddingBottom: 8,
                  }}
                >
                  — {config.senderName}
                </p>
              </div>
            </div>

            {/* Scroll hint */}
            {phase === 2 && (
              <p
                style={{
                  textAlign: "center",
                  color: "#f48fb1",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                  fontFamily: "'Caveat',cursive",
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }}
              >
                scroll to read ↓
              </p>
            )}
          </div>
        </div>
      )}

      {/* Memories button */}
      {phase >= 3 && (
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
          Surprise
        </button>
      )}
    </div>
  );
};

export default Page4;
