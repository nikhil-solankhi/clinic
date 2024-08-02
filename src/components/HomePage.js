import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Footer from "./Footer";

function HomePage() {
  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div>
      <animated.section
        id="home"
        style={fadeInProps}
        className="flex flex-col items-center justify-center h-screen text-center px-4"
      >
        <h1 className="text-5xl font-bold text-primary-dark mb-6">
          Welcome to Dr. Sheetal's Spandan Clinic
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Experience personalized dermatological care for your skin's health and
          beauty.
        </p>
      </animated.section>
    </div>
  );
}

export default HomePage;
