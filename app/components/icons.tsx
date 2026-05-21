export type IconName =
  | "home"
  | "compass"
  | "plus"
  | "user"
  | "heart"
  | "comment"
  | "search"
  | "camera"
  | "guitar"
  | "amp"
  | "pedal"
  | "bass"
  | "more"
  | "chevron-left"
  | "chevron-right"
  | "check"
  | "close"
  | "bookmark"
  | "share"
  | "sparkle";

type IconProps = {
  name: IconName;
  size?: number;
  stroke?: string;
  filled?: boolean;
};

export function Icon({
  name,
  size = 24,
  stroke = "currentColor",
  filled = false,
}: IconProps) {
  const s = stroke;
  const sw = 1.6;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: s,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "home":
      return filled ? (
        <svg {...common} fill={s}>
          <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
        </svg>
      ) : (
        <svg {...common}>
          <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path
            d="M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5z"
            fill={filled ? s : "none"}
          />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "user":
      return filled ? (
        <svg {...common} fill={s}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="none" />
        </svg>
      ) : (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      );
    case "heart":
      return filled ? (
        <svg {...common} fill="#059669" stroke="#059669">
          <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5c2 0 3.5 1.2 4.5 2.5C12 6.2 13.5 5 15.5 5c4 0 5.5 4 4 7-2.5 4.5-7.5 9-7.5 9z" />
        </svg>
      ) : (
        <svg {...common}>
          <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5c2 0 3.5 1.2 4.5 2.5C12 6.2 13.5 5 15.5 5c4 0 5.5 4 4 7-2.5 4.5-7.5 9-7.5 9z" />
        </svg>
      );
    case "comment":
      return (
        <svg {...common}>
          <path d="M4 5h16v11H8l-4 4z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M16 16l4 4" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 7h3l2-2h6l2 2h3v12H4z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case "guitar":
      return (
        <svg {...common}>
          <path d="M14.5 3.5L20 9l-1.5 1.5-2-.5-1 1 .5 2L14 14l-2-.5-3.5 3.5a3 3 0 1 1-3-3L9 10l-.5-2L10 6.5l2 .5 1-1-.5-2z" />
        </svg>
      );
    case "amp":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <circle cx="8" cy="13" r="2.5" />
          <circle cx="16" cy="13" r="2.5" />
          <path d="M5 7h14" />
        </svg>
      );
    case "pedal":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <circle cx="12" cy="10" r="1.2" />
          <path d="M8 16h8" />
        </svg>
      );
    case "bass":
      return (
        <svg {...common}>
          <path d="M14.5 3.5L20 9l-1.5 1.5-2-.5-1 1 .5 2L14 14l-2-.5-3.5 3.5a3 3 0 1 1-3-3L9 10l-.5-2L10 6.5l2 .5 1-1-.5-2z" />
          <path d="M9 14l2 2" />
        </svg>
      );
    case "more":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="1.2" fill={s} />
          <circle cx="12" cy="12" r="1.2" fill={s} />
          <circle cx="19" cy="12" r="1.2" fill={s} />
        </svg>
      );
    case "chevron-left":
      return (
        <svg {...common}>
          <path d="M15 6l-6 6 6 6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M4 12l5 5 11-11" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "bookmark":
      return (
        <svg {...common}>
          <path d="M6 4h12v17l-6-4-6 4z" />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <path d="M12 4v12M7 9l5-5 5 5M5 20h14" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 4v6M12 14v6M4 12h6M14 12h6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
