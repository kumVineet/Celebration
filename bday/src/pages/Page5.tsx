import { useState } from "react";
import { Lily, Rose, GiftBoxSvg } from "../components/svg";
import Confetti from "../components/Confetti";
import TenorGif from "../components/TenorGif";
import type { PageProps } from "../types/pageProps";
import config from "../config";
import pics from "../pics";
import ClothesLine from "../components/ClothesLine";

const Page5 = ({ onNext }: PageProps) => {
  const [stage, setStage] = useState(0);

  const handleTap = () => {
    if (stage !== 0) return;

    setStage(1);

    setTimeout(() => setStage(2), 1200); // show hug
    setTimeout(() => setStage(3), 2500); // hearts + confetti
  };

  return (
    <div className="scene">
      <Confetti active={stage >= 3} />

      <ClothesLine
        visible={stage < 2}
        leftImage={
          <img
            src={pics.img1531}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
        rightImage={
          <img
            src={pics.img1530}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      <ClothesLine
        visible={stage >= 2}
        leftImage={
          <img
            src={pics.img1532}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
        rightImage={
          <img
            src={pics.img1523}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      <div style={{ textAlign: "center", maxWidth: 900, padding: 20 }}>
        {/* 🎁 STEP 1 — GIFT */}
        {stage < 2 && (
          <div style={{ animation: "slideUp .7s ease both" }}>
            <h2
              className="t-title"
              style={{
                marginBottom: 20,
                animation: "heartbeat 2s infinite",
              }}
            >
              🎁 A little surprise for you!!
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 14,
                marginBottom: 8,
              }}
            >
              <div style={{ animation: "floatBob 2s infinite" }}>
                <Rose size={48} color="#e91e8c" />
              </div>

              <div
                onClick={handleTap}
                style={{
                  cursor: stage === 0 ? "pointer" : "default",
                  animation:
                    stage === 0
                      ? "giftFloat 2.5s ease-in-out infinite"
                      : "none",
                }}
              >
                <GiftBoxSvg open={stage >= 1} />
              </div>

              <div style={{ animation: "floatBob 2.2s .4s infinite" }}>
                <Lily size={48} />
              </div>
            </div>

            {stage === 0 && (
              <p
                className="t-script"
                style={{
                  marginTop: 8,
                  animation: "pulse 1.5s infinite",
                  fontSize: "1.4rem",
                }}
              >
                Tap to open 🎀
              </p>
            )}

            {stage === 1 && (
              <p
                className="t-script"
                style={{
                  marginTop: 8,
                  color: "#e91e8c",
                  animation: "bounceIn .5s ease both",
                  fontSize: "1.6rem",
                }}
              >
                🎉 Yayyyy!!!
              </p>
            )}
          </div>
        )}

        {/* 💖 STEP 2 — HUG */}
        {stage >= 2 && (
          <div
            style={{
              animation: "fadeIn .8s ease forwards",
              marginTop: 20,
            }}
          >
            {/* Title */}
            <div
              className="glass"
              style={{
                marginBottom: 20,
                padding: "22px 44px",
                animation: "slideUp .6s ease both",
              }}
            >
              <h2
                className="t-title"
                style={{
                  animation: "heartbeat 2s infinite",
                }}
              >
                A virtual hug for you!! 🤗
              </h2>
            </div>

            {/* GIF */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 420,
                  height: 340,
                  margin: "0 auto",
                  borderRadius: 28,
                  overflow: "hidden",
                  animation: "popIn .6s ease",
                }}
              >
                <TenorGif
                  url="https://media.tenor.com/_1xqhO5RzVYAAAAj/i-miss-you-bear-milk-and-mocha.gif"
                  width="100%"
                  height="100%"
                />
              </div>

              {/* Floating hearts */}
              {stage >= 3 &&
                ["♥", "💕", "♡", "💖"].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      left: `${25 + i * 12}%`,
                      bottom: 180,
                      fontSize: 22 + i * 6,
                      color: ["#f48fb1", "#e91e8c", "#ff9eb5", "#c2185b"][i],
                      animation: `heartPop 1.6s ${i * 0.2}s ease-out infinite`,
                    }}
                  >
                    {h}
                  </span>
                ))}
            </div>

            {/* Birthday tag */}
            {stage >= 3 && (
              <div style={{ marginTop: 20 }}>
                <div
                  style={{
                    background: "linear-gradient(135deg,#f48fb1,#e91e8c)",
                    color: "white",
                    padding: "16px 48px",
                    borderRadius: 50,
                    display: "inline-block",
                    fontFamily: "'Dancing Script',cursive",
                    fontSize: "1.69rem",
                    fontWeight: 700,
                  }}
                >
                  🎂 Happy Birthday {config.recipientName}!! 🎂
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {stage >= 3 && (
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
          One more thing... 💌
        </button>
      )}
    </div>
  );
};

export default Page5;
