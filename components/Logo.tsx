import Image from "next/image";

export default function Logo({
  className = "",
  variant = "dark",
  height = 32,
}: {
  className?: string;
  variant?: "dark" | "white";
  height?: number;
}) {
  const src = variant === "white" ? "/imho-logo-white.png" : "/imho-logo-dark.png";
  const aspect = 3.45;
  const width = Math.round(height * aspect);

  return (
    <Image
      src={src}
      alt="IMHO"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
