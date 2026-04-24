import { useRef } from "react";
import TenorGif from "./TenorGif";

const FloatingBg = () => {
  const items = useRef(
    [...Array(28)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 8 + Math.random() * 20,
      dur: 8 + Math.random() * 14,
      delay: -Math.random() * 20,
      char: ["🌸", "✿", "♥", "✦", "🌺", "❀", "♡", "🌷", "·", "★"][
        Math.floor(Math.random() * 10)
      ],
      color: [
        "#f48fb1",
        "#e91e8c",
        "#f8bbd0",
        "#ff9eb5",
        "#c2185b",
        "#ff80ab",
        "#ffd6e7",
      ][Math.floor(Math.random() * 7)],
    }))
  );

  return (
    <>
      {/* 🌸 Floating background */}
      <div
        className="float-bg"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {items.current.map((h) => (
          <span
            key={h.id}
            style={{
              position: "absolute",
              animation: `floatUp ${h.dur}s ${h.delay}s linear infinite`,
              left: `${h.x}%`,
              fontSize: `${h.size}px`,
              color: h.color,
            }}
          >
            {h.char}
          </span>
        ))}
      </div>

    </>
  );
};

export default FloatingBg;