type SectionGlowProps = {
  className?: string;
  size?: number;
  opacity?: number;
};

export function SectionGlow({
  className = "",
  size = 480,
  opacity = 0.15,
}: SectionGlowProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(124,92,252,${opacity}) 0%, transparent 70%)`,
      }}
    />
  );
}
