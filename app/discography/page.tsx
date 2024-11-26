import Loading from "@/components/Loading";
import MusicSection from "@/components/MusicSection";
import { Suspense } from "react";

export default function Discography() {
  return (
    <Suspense fallback={
      <Loading>
        Loading..
      </Loading>
    
    }>
      <MusicSection />
    </Suspense>
  );
}
