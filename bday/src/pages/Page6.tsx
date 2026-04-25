import { useEffect, useState } from "react";
import TenorGif from "../components/TenorGif";
import config from "../config";

const Page6 = () => {
  const [stage, setStage] = useState(0);
  const [address, setAddress] = useState("");
  const [typedText, setTypedText] = useState("");

  const fullText = "Where should I send your Gift 🎁 ?";

  // ✨ typing effect
  useEffect(() => {
    if (stage !== 0) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [stage]);

  const handleSubmit = () => {
    if (!address.trim()) return;

    setStage(1);

    // 📩 send to WhatsApp (replace with your number)
    const message = encodeURIComponent(`Address:\n${address}`);
    window.open(
      `https://wa.me/${config.whatsappNumber}?text=${message}`,
      "_blank",
    );

    setTimeout(() => setStage(2), 2500);
  };

  return (
    <div className="scene">
      <div className="glow">
        <TenorGif
          url="https://c.tenor.com/fLfRTACXL2cAAAAC/tenor.gif"
          width={280}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          maxWidth: 520,
          margin: "0 auto",
          padding: 20,
        }}
      >
        {/* 💌 STAGE 0 */}
        {stage === 0 && (
          <div style={{ animation: "fadeIn .6s ease both" }}>
            <h2
              className="t-title"
              style={{
                minHeight: 60,
                marginBottom: 20,
                color: "#e91e8c",
              }}
            >
              {typedText}
              <span className="cursor">|</span>
            </h2>

            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Type your address here..."
              style={{
                width: "100%",
                minHeight: 110,
                borderRadius: 16,
                padding: 14,
                border: "2px solid #f8bbd0",
                outline: "none",
                fontSize: "1rem",
                marginBottom: 16,
                resize: "none",
                fontFamily: "inherit",
                boxShadow: "0 4px 14px rgba(233,30,140,.12)",
              }}
            />

            <button
              className="btn byes"
              disabled={!address.trim()}
              onClick={handleSubmit}
              style={{
                opacity: address.trim() ? 1 : 0.5,
                cursor: address.trim() ? "pointer" : "not-allowed",
                transition: "all .3s",
              }}
            >
              Send 🎁
            </button>
          </div>
        )}

        {/* 🎁 STAGE 1 — LOADING */}
        {stage === 1 && (
          <div style={{ animation: "fadeIn .5s ease both" }}>
            <h2 className="t-title" style={{ marginBottom: 16 }}>
              Got it… give me a moment 🎁
            </h2>

            {/* smoother loader */}
            <div className="loader" />
          </div>
        )}

        {/* 🎂 STAGE 2 — FINAL */}
        {stage === 2 && (
          <div style={{ animation: "fadeIn .7s ease both" }}>
            <h2
              className="t-title"
              style={{
                marginBottom: 16,
                animation: "popIn .6s ease",
                color: "#e91e8c",
              }}
            >
              Something sweet is on the way 🎂
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: "1.2rem",
                color: "#7a2a42",
                fontFamily: "'Caveat',cursive",
              }}
            >
              Sending this to myself so I don’t mess it up 😄 <br />
              Just wait for it… 💖
            </p>
          </div>
        )}
      </div>

      {/* ✨ styles */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .loader {
          width: 40px;
          height: 40px;
          margin: 20px auto;
          border: 4px solid #f8bbd0;
          border-top: 4px solid #e91e8c;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .glow {
          animation: glowPulse 2.5s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        `}
      </style>
    </div>
  );
};

export default Page6;
