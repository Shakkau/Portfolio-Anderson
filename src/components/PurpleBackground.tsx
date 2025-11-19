export default function PurpleBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.2) 25%, rgba(147, 51, 234, 0.05) 50%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0">
        <div
          className="absolute w-[200%] h-32 -left-[50%] top-[15%] rotate-12 opacity-5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.8), transparent)",
          }}
        />
        <div
          className="absolute w-[200%] h-40 -left-[50%] top-[45%] -rotate-6 opacity-5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.9), transparent)",
          }}
        />
        <div
          className="absolute w-[200%] h-36 -left-[50%] top-[75%] rotate-3 opacity-5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(126, 34, 206, 0.7), transparent)",
          }}
        />
      </div>
    </div>
  );
}