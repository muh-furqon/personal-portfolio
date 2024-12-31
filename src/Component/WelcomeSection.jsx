import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Images } from "../assets";

const WelcomeSection = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [introTypingIndex, setIntroTypingIndex] = useState(0);

  const message = "Hello There!";
  const introduction = "My name is Furqon, a full-stack developer.";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingIndex < message.length) {
        setTypingIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setShowIntro(true);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [typingIndex]);

  useEffect(() => {
    if (showIntro) {
      const introTypingInterval = setInterval(() => {
        if (introTypingIndex < introduction.length) {
          setIntroTypingIndex((prev) => prev + 1);
        } else {
          clearInterval(introTypingInterval);
        }
      }, 100);
      return () => clearInterval(introTypingInterval);
    }
  }, [showIntro, introTypingIndex]);

  return (
    <div id="welcome" className="section bg-cover bg-center flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url(${Images.welcome})` }}>
      <h1 className="text-6xl font-extrabold font-mono text-[#30c6a3]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {message.slice(0, typingIndex)}
          {typingIndex < message.length && <span className="inline-block blink">_</span>}
        </motion.span>
      </h1>
      {showIntro && (
        <motion.p
          className="text-3xl mt-4 font-mono text-[#37fcce]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {introduction.slice(0, introTypingIndex)}
          {introTypingIndex < introduction.length && <span className="inline-block blink">_</span>}
        </motion.p>
      )}
    </div>
  );
};

export default WelcomeSection;
