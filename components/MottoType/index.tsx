import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const MottoType = () => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const typed = useRef<any>(null);

  const onceAgain = () => {
    setTimeout(() => {
      typed.current?.reset();
      typed.current?.start();
    }, 5000);
  };

  useEffect(() => {
    const options = {
      strings: ["The most regretful thing in life is that I could have been"],
      typeSpeed: 60,
      showCursor: true,
      cursorChar: "_",
      backSpeed: 60,
      backDelay: 8000,
      loop: true,
      // onComplete: onceAgain,
    };

    if (pRef.current) {
      typed.current = new Typed(pRef.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return <p className="inline-block" ref={pRef} />;
};

export default MottoType;
