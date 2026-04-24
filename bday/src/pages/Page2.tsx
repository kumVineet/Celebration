import { useEffect } from "react";
import type { PageProps } from "../types/pageProps";
import TenorGif from "../components/TenorGif";

const Page2 = ({ onBack }: PageProps) => {
  // Optional: slight delay refresh (helps on slow loads)
  useEffect(() => {
    const t = setTimeout(() => {
      // @ts-ignore
      window.Tenor?.Embed?.refresh();
    }, 300);

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="scene">
      <div
        style={{
          textAlign: "center",
          animation: "bounceIn .7s ease both",
        }}
      >
        <div
          className="glass"
          style={{
            maxWidth: 420,
            padding: "24px 40px",
          }}
        >
          {/* Title */}
          <p
            style={{
              fontFamily: "'Dancing Script',cursive",
              fontSize: "clamp(1.8rem,4vw,2.4rem)",
              color: "#c41236",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            How dare you click No!
          </p>

          {/* 🧸 Tenor GIF */}
          <TenorGif
            url="https://media.tenor.com/8GCu2NPPLocAAAAj/%E5%B0%8F%E7%86%8A%E4%B8%8E%E5%B0%8F%E7%86%8A%E7%8C%AB.gif"
            width={260}
            height={260}
            clean
          />

          {/* Button */}
          <button
            className="btn byes"
            onClick={onBack}
            style={{ marginTop: 24 }}
          >
            GO BACKKK!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
