import { useState } from "react";
import Confetti from "../components/Confetti";
import ClothesLine from "../components/ClothesLine";
import type { PageProps } from "../types/pageProps";
import TenorGif from "../components/TenorGif";
import config from "../config";
import pics from "../pics";

const Page3 = ({ onNext }: PageProps) => {
  const [phase, setPhase] = useState(0);

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
        visible={phase >= 0}
        leftImage={
          <img
            src={pics.img1527}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
        rightImage={
          <img
            src={pics.img1529}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      <ClothesLine
        visible={phase >= 1}
        leftImage={
          <img
            src={pics.img1481}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
        rightImage={
          <img
            src={pics.img1528}
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
          {/* 🐼 PHASE 0 */}
          {phase === 0 && (
            <div style={{ animation: "slideUp .7s ease both" }}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginBottom: 12,
                }}
              >
                <svg width="140" height="82" viewBox="0 0 140 82">
                  <rect
                    x="15"
                    y="24"
                    width="110"
                    height="60"
                    rx="6"
                    fill="#e8d5b7"
                    stroke="#8b6444"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="70"
                    y1="24"
                    x2="70"
                    y2="84"
                    stroke="#8b6444"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="10"
                    y="17"
                    width="120"
                    height="14"
                    rx="4"
                    fill="#c8a882"
                    stroke="#8b6444"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="glass" style={{ padding: "22px 52px" }}>
                <p
                  className="t-script"
                  style={{
                    fontSize: "2rem",
                    marginBottom: 18,
                    animation: "pulse 2s infinite",
                  }}
                >
                  Yayyyy!! Good girl!! 🐾
                </p>

                <button
                  className="btn byes"
                  onClick={() => setPhase(1)}
                  style={{ animation: "pulse 1.8s infinite" }}
                >
                  Continue 💕
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
          className="btn bnext"
          onClick={onNext}
          style={{ animation: "fadeIn .6s ease" }}
        >
          Next →
        </button>
      )}
    </div>
  );
};

export default Page3;
