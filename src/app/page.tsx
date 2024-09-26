import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Report from "@/components/home/Report";
import Tracking from "@/components/home/Tracking";

export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden relative">
      <Hero />
      <Features />
      <Tracking />
      <Report />
    </div>
  );
}
