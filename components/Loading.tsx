export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="animate-pulse text-xl text-gray-400">{children}</div>
        </div>
      </div>
    </div>
  );
}
