import { useEffect, useState } from "react";
import TenorGif from "./TenorGif";

const FloatingGif = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 700);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const size = isMobile ? 48 : 80;
  const top = isMobile ? 8 : 40;
  const sideOffset = isMobile ? 4 : 120;

  const wrapperBase = {
    position: "fixed" as const,
    top,
    width: size,
    height: size,
    zIndex: 9999,
    pointerEvents: "none" as const,
    animation: "fadeIn .6s ease",
  };

  return (
    <>
      <div style={{ ...wrapperBase, left: sideOffset }}>
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

      <div style={{ ...wrapperBase, right: sideOffset }}>
        <TenorGif
          url="https://media.tenor.com/xsTmm-84W8MAAAAi/tkthao219-bubududu.gif"
          width={size}
          style={{
            transform: "scaleX(-1)",
            animation: "floatSoft 3.4s ease-in-out infinite",
            opacity: 0.9,
          }}
          clean
        />
      </div>
    </>
  );
};

export default FloatingGif;
