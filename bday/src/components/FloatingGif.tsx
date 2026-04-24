import { useEffect, useState } from "react";
import TenorGif from "./TenorGif";

const FloatingGif = () => {
  const [size, setSize] = useState(80);

  // 📱 responsive size
  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 480 ? 60 : 80);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      {/* 👉 Top Left */}
      <div
        style={{
          position: "fixed",
          top: 40,
          left: 120,
          zIndex: 9999,
          pointerEvents: "none",
          animation: "fadeIn .6s ease",
        }}
      >
        <TenorGif
          url="https://media.tenor.com/xsTmm-84W8MAAAAi/tkthao219-bubududu.gif"
          width={size}
          style={{
            animation: "floatSoft 3s ease-in-out infinite",
            opacity: 0.95,
          }}
          clean
        />
      </div>

      {/* 👉 Top Right (mirrored) */}
      <div
        style={{
          position: "fixed",
          top: 40,
          right: 120,
          zIndex: 9999,
          pointerEvents: "none",
          animation: "fadeIn .6s ease",
        }}
      >
        <TenorGif
          url="https://media.tenor.com/xsTmm-84W8MAAAAi/tkthao219-bubududu.gif"
          width={size}
          style={{
            transform: "scaleX(-1)", // 👈 mirror
            animation: "floatSoft 3.4s ease-in-out infinite", // slight variation
            opacity: 0.9,
          }}
          clean
        />
      </div>
    </>
  );
};

export default FloatingGif;
