import LiveSection from "@/components/LiveSection";
import Loading from "@/components/Loading";
import { Suspense } from "react";


export default async function Live() {
  return (
    <Suspense fallback={
      <Loading>
        Loading..
      </Loading>
    
    }>
      <LiveSection size={20} />
    </Suspense>
  );
}
