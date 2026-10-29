"use client";
import { useEffect, useState } from "react";
import FluidGlass from "@/components/FluidGlass"

export default function PageHero() {
  const [size, setSize] = useState(460);

  useEffect(() => {
    const updateSize = () => {
      setSize(Math.min(window.innerWidth * 0.55, 460));
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="w-full h-32 md:h-72">
      <FluidGlass
        text="FELIPE BENINI"
        shape="diamond"
        size={size}
        refraction={0.15}
        dispersion={1}
        interaction="follow"
        frost={0.1}
        tint={0}
        reflection={1}
        shadow={0.5}
        elevation={2}
        smoothness={0.5}
        wobble={0}
        spin={0.3}
        idle={false}
        morphOnClick={false}
        intro
      />
    </div>
  )
}
