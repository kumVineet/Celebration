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

// 👉 animation variants (Instagram-style)
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
  const [cur, setCur] = useState<number>(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    return page ? parseInt(page, 10) : 0;
  });

  const [direction, setDirection] = useState(1);
  const [busy, setBusy] = useState(false);

  // 👉 sync with URL
  useEffect(() => {
    window.history.replaceState({ page: cur }, "", `?page=${cur}`);
  }, []);

  const goTo = (n: number) => {
    if (busy || n < 0 || n >= PAGES.length) return;

    setDirection(n > cur ? 1 : -1);
    setBusy(true);

    setCur(n);
    window.history.pushState({ page: n }, "", `?page=${n}`);

    setTimeout(() => setBusy(false), 500);
  };

  // 👉 browser back/forward
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const page = e.state?.page;
      if (page !== undefined) {
        setDirection(page > cur ? 1 : -1);
        setCur(page);
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

      {/* 🔥 Story-like transitions */}
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
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}

          // 👉 swipe support (mobile feel)
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) goTo(cur + 1); // swipe left → next
            if (info.offset.x > 100) goTo(cur - 1);  // swipe right → back
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