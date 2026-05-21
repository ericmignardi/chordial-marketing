import type { CSSProperties, ReactNode } from "react";

export type PhotoTint =
  | "walnut"
  | "cream"
  | "sunburst"
  | "emerald"
  | "black"
  | "blonde"
  | "blue"
  | "rust"
  | "smoke"
  | "silver"
  | "amp"
  | "pedal";

export const PHOTO_TINTS: Record<PhotoTint, [string, string]> = {
  walnut: ["#3a2a22", "#1e1612"],
  cream: ["#e8e0d2", "#cfc6b3"],
  sunburst: ["#4a2a15", "#1c0e07"],
  emerald: ["#1a3a2e", "#0a1f18"],
  black: ["#2a2a2a", "#0a0a0a"],
  blonde: ["#d8c89a", "#a7926b"],
  blue: ["#1d3247", "#0c1a26"],
  rust: ["#5a2a1a", "#2a1108"],
  smoke: ["#3a3a3a", "#161616"],
  silver: ["#c9c9c5", "#9a9a95"],
  amp: ["#2d2620", "#100c08"],
  pedal: ["#3b2b50", "#170e22"],
};

type PhotoProps = {
  tint?: PhotoTint;
  label?: string;
  ratio?: string;
  height?: number | string;
  width?: number | string;
  radius?: number;
  style?: CSSProperties;
  children?: ReactNode;
};

export function Photo({
  tint = "walnut",
  label,
  ratio,
  height,
  width = "100%",
  radius = 0,
  style,
  children,
}: PhotoProps) {
  const [a, b] = PHOTO_TINTS[tint] ?? PHOTO_TINTS.walnut;
  const h = height ?? (ratio ? undefined : 180);
  return (
    <div
      style={{
        position: "relative",
        width,
        height: h,
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: "hidden",
        background: `radial-gradient(120% 80% at 30% 20%, ${a} 0%, ${b} 70%)`,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 4px)",
          mixBlendMode: "overlay",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(60% 60% at 100% 0%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />
      {label && (
        <div
          style={{
            position: "absolute",
            left: 10,
            bottom: 10,
            fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
            fontSize: 10,
            letterSpacing: "0.06em",
            color: "rgba(255,255,255,0.55)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

type AvatarProps = {
  size?: number;
  initial?: string;
  src?: PhotoTint;
  dark?: boolean;
  ring?: boolean;
};

export function Avatar({
  size = 40,
  initial = "M",
  src,
  dark = false,
  ring = false,
}: AvatarProps) {
  if (src) {
    const [a, b] = PHOTO_TINTS[src] ?? PHOTO_TINTS.walnut;
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 9999,
          background: `radial-gradient(120% 80% at 30% 20%, ${a}, ${b})`,
          boxShadow: ring
            ? "0 0 0 2px #059669"
            : dark
              ? "0 0 0 1px rgba(255,255,255,0.08)"
              : "0 0 0 1px rgba(0,0,0,0.06)",
          flex: "0 0 auto",
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 9999,
        background: "#059669",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--serif)",
        fontWeight: 500,
        fontSize: size * 0.42,
        flex: "0 0 auto",
      }}
    >
      {initial}
    </div>
  );
}
