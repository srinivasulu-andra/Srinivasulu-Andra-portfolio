import { useEffect, useState } from "react";

export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScroll((window.scrollY / total) * 100);
    });
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-purple-500 z-50"
      style={{ width: scroll + "%" }}
    />
  );
}