import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import LiveSection from "@/components/LiveSection";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Suspense fallback={<Loading>Loading news...</Loading>}>
        <NewsSection />
      </Suspense>
      <Suspense fallback={<Loading>Loading live dates...</Loading>}>
        <LiveSection size={5} />
      </Suspense>
      <Suspense fallback={<Loading>Loading discography...</Loading>}>
        <MusicSection />
      </Suspense>
      <Footer />
    </main>
  );
}
