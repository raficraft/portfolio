import React, { createContext, useState, useEffect, useCallback } from "react";

export const ScrollContext = createContext();

export default function ScrollProvider({ children }) {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = useCallback((e) => {
    const bodyOffset = document.body.getBoundingClientRect();

    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  });

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollX, scrollY, scrollDirection }}>
      {children}
    </ScrollContext.Provider>
  );
}
