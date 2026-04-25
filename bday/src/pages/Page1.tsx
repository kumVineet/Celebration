import { useEffect, useRef, useState } from "react";
import { Lily, Rose, Tulip } from "../components/svg";
import type { PageProps } from "../types/pageProps";
import TenorGif from "../components/TenorGif";
import config from "../config";
import ClothesLine from "../components/ClothesLine";
import pics from "../pics";

// Initial position: below-right of center (matches the old CSS calc values)
const getInitialPos = () => ({
  x: window.innerWidth / 2 + 90,
  y: window.innerHeight / 2 + 108,
});

const Page1 = ({ onYes, onNo }: PageProps) => {
  const animFrameRef = useRef<number | null>(null);
  const posRef = useRef(getInitialPos());
  const targetRef = useRef(getInitialPos());
  const hasMovedRef = useRef(false);

  const [noPos, setNoPos] = useState(getInitialPos);
  const [yesExpanded, setYesExpanded] = useState(false);
  const [hideNo, setHideNo] = useState(false);

  // On reload, clear the flag so button reappears
  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (nav?.type === "reload") {
      sessionStorage.removeItem("cameFromNo");
    }
  }, []);

  // Hide No if user came back from the No page without reloading
  useEffect(() => {
    if (sessionStorage.getItem("cameFromNo") === "true") {
      setHideNo(true);
    }
  }, []);

  // Smooth rAF loop: lerp current position toward target
  useEffect(() => {
    if (hideNo) return;

    const LERP = 0.12;

    const tick = () => {
      const cur = posRef.current;
      const tgt = targetRef.current;
      const dx = tgt.x - cur.x;
      const dy = tgt.y - cur.y;

      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
        const next = { x: cur.x + dx * LERP, y: cur.y + dy * LERP };
        posRef.current = next;
        setNoPos({ ...next });
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [hideNo]);

  // Proximity escape logic
  useEffect(() => {
    if (hideNo) return;

    const BW = 110;
    const BH = 46;
    const TRIGGER = 110;
    const STEP = 60;
    const MARGIN = 16;

    const onMouseMove = (e: MouseEvent) => {
      const p = posRef.current;
      const cx = p.x + BW / 2;
      const cy = p.y + BH / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < TRIGGER) {
        const angle = Math.atan2(dy, dx);
        let nx = p.x - Math.cos(angle) * STEP;
        let ny = p.y - Math.sin(angle) * STEP;

        nx = Math.max(MARGIN, Math.min(window.innerWidth - BW - MARGIN, nx));
        ny = Math.max(
          MARGIN,
          Math.min(window.innerHeight - 168 - BH - MARGIN, ny),
        );

        targetRef.current = { x: nx, y: ny };

        if (!hasMovedRef.current) {
          hasMovedRef.current = true;
          setYesExpanded(true);
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [hideNo]);

  const handleNoClick = () => {
    sessionStorage.setItem("cameFromNo", "true");
    onNo?.();
  };

  return (
    <div className="scene">
      {/* Decorations */}
      <div style={{ position: "absolute", left: 32, top: "18%" }}>
        <Rose size={64} color="#e91e8c" />
      </div>
      <div style={{ position: "absolute", right: 32, top: "22%" }}>
        <Lily size={60} />
      </div>
      <div style={{ position: "absolute", left: 80, bottom: "18%" }}>
        <Tulip size={52} color="#ff80ab" />
      </div>
      <div style={{ position: "absolute", right: 80, bottom: "20%" }}>
        <Rose size={52} color="#c2185b" />
      </div>

      <ClothesLine
        visible={true}
        leftImage={
          <img
            src={pics.img1}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        rightImage={
          <img
            src={pics.img2}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />

      {/* Card */}
      <div
        className="glass"
        style={{
          maxWidth: 480,
          animation: "bounceIn .85s ease both",
          position: "relative",
          zIndex: 20,
          textAlign: "center",
        }}
      >
        <TenorGif
          url="https://media.tenor.com/wJr9kQAbw7QAAAAi/pawsum-playpawsum.gif"
          width={260}
          height={260}
          clean
        />

        <h1 className="t-hero" style={{ marginTop: 20 }}>
          Hey {config.recipientName}!!
        </h1>
        <p className="t-script" style={{ fontSize: "1.8rem", marginTop: 10 }}>
          I made something for you.
        </p>
        <p className="t-body" style={{ marginBottom: 30 }}>
          Do you want to see?
        </p>

        <button
          className="btn byes"
          onClick={onYes}
          style={{
            width: yesExpanded ? "65%" : "160px",
            transition: "all .3s ease",
          }}
        >
          Yes!!
        </button>
      </div>

      {/* NO button — always visible on fresh load, hidden after No+back without reload */}
      {!hideNo && (
        <button
          className="btn bno"
          onClick={handleNoClick}
          style={{
            position: "fixed",
            left: noPos.x,
            top: noPos.y,
            zIndex: 9999,
            whiteSpace: "nowrap",
            padding: "10px 18px",
            transition: "none",
          }}
        >
          No 😏
        </button>
      )}
    </div>
  );
};

export default Page1;
