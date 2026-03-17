export default function Logo({
  className = "",
  color = "#0F0F0F",
  height = 32,
}: {
  className?: string;
  color?: string;
  height?: number;
}) {
  const aspect = 3.2;
  const width = height * aspect;

  return (
    <svg
      viewBox="0 0 320 100"
      width={width}
      height={height}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IMHO"
    >
      {/* I */}
      <rect x="0" y="8" width="22" height="84" rx="2" />
      {/* M */}
      <path d="M42 8h22l24 50 24-50h22v84h-22V44l-18 38h-12L64 44v48H42V8z" />
      {/* H */}
      <path d="M152 8h22v34h30V8h22v84h-22V62h-30v30h-22V8z" />
      {/* O — tilted ellipse */}
      <ellipse
        cx="272"
        cy="52"
        rx="36"
        ry="42"
        fill="none"
        stroke={color}
        strokeWidth="20"
        transform="rotate(-12, 272, 52)"
      />
    </svg>
  );
}
