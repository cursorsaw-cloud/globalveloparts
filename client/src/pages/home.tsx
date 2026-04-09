import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <BrandStrip />
      <Contact />
    </>
  );
}
