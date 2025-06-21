import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { LogoAnimation } from "@/components/LogoAnimation";
import { KeyMetrics } from "@/components/KeyMetrics";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar/>
      <Hero/>
      <Stack/>
      <LogoAnimation/>
      <Portfolio/>
      <KeyMetrics/>
      <Contact/>
    </div>
  );
}
