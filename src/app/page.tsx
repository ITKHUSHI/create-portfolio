"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/data/heroParallaxDemo.data";

export default function Home() {
  return (
   <>  
   <HeroParallax products={products} />
   </>
  );
}
