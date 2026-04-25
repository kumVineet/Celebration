import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FloatingBg from "./components/FloatingBg";
import HeartCursor from "./components/HeartCursor";
import FloralStrip from "./components/FloralStrip";
import FloatingGif from "./components/FloatingGif";
import PAGES from "./pages";

type PageProps = {
  onYes?: () => void;
  onNo?: () => void;
  onBack?: () => void;
  onNext?: () => void;
};

// ✅ MUST match PAGES length
const ROUTES = ["hello", "oops", "yay", "letter", "hug", "gift"];

// 👉 animation variants
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

function App() {
  // ✅ Read from URL path instead of query
  const [cur, setCur] = useState<number>(() => {
    const path = window.location.pathname.replace("/", "");
    const index = ROUTES.indexOf(path);
    return index !== -1 ? index : 0;
  });

  const [direction, setDirection] = useState(1);
  const [busy, setBusy] = useState(false);

  // ✅ Set initial URL (no ?page=)
  useEffect(() => {
    window.history.replaceState({ page: cur }, "", `/${ROUTES[cur]}`);
  }, []);

  const goTo = (n: number) => {
    if (busy || n < 0 || n >= PAGES.length) return;

    setDirection(n > cur ? 1 : -1);
    setBusy(true);

    setCur(n);

    // ✅ push clean route
    window.history.pushState({ page: n }, "", `/${ROUTES[n]}`);

    setTimeout(() => setBusy(false), 500);
  };

  // ✅ browser back/forward support
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace("/", "");
      const index = ROUTES.indexOf(path);

      if (index !== -1) {
        setDirection(index > cur ? 1 : -1);
        setCur(index);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [cur]);

  // 👉 props for pages
  const props: PageProps[] = [
    { onYes: () => goTo(2), onNo: () => goTo(1) },
    { onBack: () => goTo(0) },
    { onNext: () => goTo(3) },
    { onNext: () => goTo(4) },
    { onNext: () => goTo(5) },
    { onNext: () => goTo(6) },
    { onNext: () => goTo(7) },
    {},
  ];

  const Cur = PAGES[cur];

  return (
    <div
      className="app-shell"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <FloatingBg />
      <HeartCursor />
      <FloatingGif />

      {/* 🔥 Story transitions */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={cur}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="page-motion"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) goTo(cur + 1);
            if (info.offset.x > 100) goTo(cur - 1);
          }}
        >
          {Cur && <Cur {...props[cur]} />}
        </motion.div>
      </AnimatePresence>

      <FloralStrip />
    </div>
  );
}

export default App;
