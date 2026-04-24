import React from "react";

type GifProps = {
  url: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;

  // 👇 NEW
  clean?: boolean; // no border / shadow
};

const TenorGif = ({
  url,
  width = 260,
  height,
  className,
  style,
  clean = false,
}: GifProps) => {
  return (
    <img
      src={url}
      alt="gif"
      draggable={false}
      className={className}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: height
          ? typeof height === "number"
            ? `${height}px`
            : height
          : "auto",

        display: "block",
        margin: "0 auto",
        objectFit: "contain", // 👈 better for transparent GIFs
        pointerEvents: "none",
        userSelect: "none",

        // 👇 conditional styling
        borderRadius: clean ? 0 : 20,
        boxShadow: clean ? "none" : "0 6px 20px rgba(233,30,140,.25)",

        ...style,
      }}
    />
  );
};

export default TenorGif;