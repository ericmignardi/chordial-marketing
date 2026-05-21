import type { CSSProperties, ReactNode } from "react";
import { Avatar, Photo, type PhotoTint } from "./photos";
import { Icon, type IconName } from "./icons";
import { IOSDevice } from "./ios-frame";
import {
  EdHome,
  EdPostDetail,
  EdProfile,
  EdComposer,
} from "./direction-editorial";

const C = {
  surface: "#FAFAF7",
  surface2: "#F3F2EC",
  ink: "#111111",
  ink2: "#5A5A58",
  ink3: "#9A9A98",
  hair: "rgba(0,0,0,0.07)",
  hair2: "rgba(0,0,0,0.12)",
  accent: "#059669",
  dark: "#1a1612",
  darkInk: "#FAFAF7",
};

const MONO: CSSProperties = {
  fontFamily: "var(--mono)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

function PhoneInline({
  children,
  scale = 1,
  rotate = 0,
  shadow = "soft",
}: {
  children: ReactNode;
  scale?: number;
  rotate?: number;
  shadow?: "soft" | "dark";
}) {
  const shadowStyle =
    shadow === "soft"
      ? "0 30px 60px rgba(20,15,10,0.18), 0 8px 20px rgba(20,15,10,0.08)"
      : "0 50px 100px rgba(0,0,0,0.45), 0 16px 40px rgba(0,0,0,0.25)";
  return (
    <div
      style={{
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        transformOrigin: "center",
        filter: `drop-shadow(${shadowStyle.split(",")[0]})`,
      }}
    >
      <div style={{ boxShadow: shadowStyle, borderRadius: 48 }}>
        <IOSDevice width={390} height={844}>
          <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
            {children}
          </div>
        </IOSDevice>
      </div>
    </div>
  );
}

function Wordmark({ color = C.ink, size = 24 }: { color?: string; size?: number }) {
  return (
    <div
      style={{
        fontFamily: "var(--serif)",
        fontSize: size,
        fontWeight: 400,
        letterSpacing: "-0.02em",
        color,
        display: "inline-flex",
        alignItems: "baseline",
        gap: 6,
      }}
    >
      <span>Chordial</span>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: C.accent,
          display: "inline-block",
          alignSelf: "center",
        }}
      />
    </div>
  );
}

function AppleGlyph() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor">
      <path d="M11.6 9.5c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.4 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.2-2.3-.1 0-2.4-.9-2.4-3.4zM9.6 3.4c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.9 2.5.9.1 1.9-.4 2.5-1.1z" />
    </svg>
  );
}

function Nav() {
  const link: CSSProperties = {
    color: C.ink2,
    fontSize: 14,
    textDecoration: "none",
    fontWeight: 500,
  };
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,250,247,0.85)",
        backdropFilter: "blur(12px) saturate(180%)",
        WebkitBackdropFilter: "blur(12px) saturate(180%)",
        borderBottom: `1px solid ${C.hair}`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Wordmark />
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#feed" style={link}>
            The feed
          </a>
          <a href="#rig" style={link}>
            Your rig
          </a>
          <a href="#community" style={link}>
            Community
          </a>
          <a href="#download" style={link}>
            Download
          </a>
        </div>
        <a
          href="#download"
          style={{
            background: C.ink,
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            padding: "10px 18px",
            borderRadius: 9999,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Get the app
          <span style={{ fontSize: 11, opacity: 0.6 }}>iOS</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const avatarTints: PhotoTint[] = ["walnut", "sunburst", "blonde", "rust"];
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 32px 100px",
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 48,
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ ...MONO, fontSize: 11, color: C.ink2, marginBottom: 24 }}>
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: C.accent,
              marginRight: 8,
              verticalAlign: "middle",
            }}
          />
          For people who love the instrument
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--serif)",
            fontSize: 84,
            lineHeight: 0.98,
            fontWeight: 400,
            letterSpacing: "-0.025em",
            textWrap: "balance",
            fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}
        >
          A quieter place
          <br />
          to share the
          <br />
          <em style={{ fontStyle: "italic", color: C.ink }}>guitars</em> you love.
        </h1>

        <p
          style={{
            marginTop: 28,
            marginBottom: 36,
            maxWidth: 480,
            fontSize: 18,
            lineHeight: 1.55,
            color: C.ink2,
            textWrap: "pretty",
          }}
        >
          Chordial is a social app for guitarists, builders and collectors. Post the
          photo. Tag the rig. Read what other players say about the same vintage tone
          you&apos;re chasing — without the algorithm shouting over the music.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#download"
            style={{
              background: C.accent,
              color: "#fff",
              fontSize: 16,
              fontWeight: 500,
              padding: "14px 24px",
              borderRadius: 9999,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 4px 14px rgba(5,150,105,0.25)",
            }}
          >
            <AppleGlyph /> Download for iOS
          </a>
          <a
            href="#feed"
            style={{
              color: C.ink,
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "underline",
              textUnderlineOffset: 4,
              textDecorationColor: C.hair2,
            }}
          >
            Take the tour ↓
          </a>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            alignItems: "center",
            gap: 14,
            paddingTop: 28,
            borderTop: `1px solid ${C.hair}`,
          }}
        >
          <div style={{ display: "flex" }}>
            {avatarTints.map((t, i) => (
              <div
                key={t}
                style={{
                  marginLeft: i === 0 ? 0 : -10,
                  borderRadius: "50%",
                  boxShadow: `0 0 0 2px ${C.surface}`,
                }}
              >
                <Avatar size={32} src={t} />
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: C.ink2, lineHeight: 1.4 }}>
            <span style={{ color: C.ink, fontWeight: 600 }}>12,400+</span> players
            cataloguing their rigs.
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-40px -20px",
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(5,150,105,0.10), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <PhoneInline>
          <EdHome />
        </PhoneInline>
      </div>
    </section>
  );
}

function GearStrip() {
  const items = [
    "Gibson · ES-335 · 1965",
    "Fender · Stratocaster · 1962",
    "Martin · D-28 · 1958",
    "Gretsch · 6120 · 1959",
    "Rickenbacker · 360 · 1966",
    "Fender · Princeton Reverb · 1968",
    "Klon · Centaur · 1995",
    "Vox · AC30 · 1964",
    "Gibson · Les Paul · 1959",
  ];
  return (
    <div
      style={{
        borderTop: `1px solid ${C.hair}`,
        borderBottom: `1px solid ${C.hair}`,
        overflow: "hidden",
        background: C.surface,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          padding: "18px 0",
          animation: "chordial-marquee 60s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items, ...items].map((g, i) => (
          <span
            key={i}
            style={{
              ...MONO,
              fontSize: 12,
              color: C.ink2,
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            {g}
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: C.hair2,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <li
      style={{
        padding: "20px 0",
        borderTop: `1px solid ${C.hair}`,
        display: "flex",
        gap: 18,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: C.surface2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={18} stroke={C.ink} />
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: 19,
            fontWeight: 500,
            letterSpacing: "-0.005em",
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: 4, fontSize: 14, lineHeight: 1.5, color: C.ink2 }}>
          {body}
        </div>
      </div>
    </li>
  );
}

function FeedSection() {
  return (
    <section
      id="feed"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "120px 32px 80px",
        display: "grid",
        gridTemplateColumns: "0.95fr 1.05fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ ...MONO, fontSize: 11, color: C.ink3, marginBottom: 18 }}>
          01 — The Feed
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            textWrap: "balance",
          }}
        >
          A feed that reads
          <br />
          like a magazine.
        </h2>
        <p
          style={{
            marginTop: 24,
            fontSize: 17,
            lineHeight: 1.6,
            color: C.ink2,
            maxWidth: 460,
            textWrap: "pretty",
          }}
        >
          Big photos. Captions in serif. One post at a time, in chronological order. No
          vertical video, no creator economy, no &ldquo;stories&rdquo; that vanish before
          you&apos;ve finished reading the gear specs.
        </p>

        <ul
          style={{
            marginTop: 32,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <FeatureRow
            icon="camera"
            title="Full-bleed photography"
            body="Your photo is the post. Square crops are a setting, not a default."
          />
          <FeatureRow
            icon="guitar"
            title="Every post is a museum label"
            body="Tag the brand, model and year. Hover any spec to see who else is playing one."
          />
          <FeatureRow
            icon="bookmark"
            title="Save with intent"
            body="Bookmarks live in collections — “tones to chase,” “1959 acoustics,” your call."
          />
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.04), transparent 70%)",
          }}
        />
        <PhoneInline>
          <EdPostDetail />
        </PhoneInline>
      </div>
    </section>
  );
}

function RigSection() {
  const stats: [string, string][] = [
    ["41K+", "Guitars catalogued"],
    ["12K+", "Amps & cabs"],
    ["78K+", "Pedals tagged"],
  ];
  return (
    <section
      id="rig"
      style={{
        background: C.dark,
        color: C.darkInk,
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: "60%",
          height: "120%",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(184,120,60,0.18), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 32px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 80,
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PhoneInline shadow="dark">
            <EdProfile />
          </PhoneInline>
        </div>

        <div>
          <div
            style={{
              ...MONO,
              fontSize: 11,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 18,
            }}
          >
            02 — My Rig
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: 56,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Your rig, properly
            <br />
            <em style={{ fontStyle: "italic" }}>catalogued.</em>
          </h2>
          <p
            style={{
              marginTop: 24,
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 460,
              textWrap: "pretty",
            }}
          >
            Build a permanent home for the instruments you actually own — guitars,
            amps, pedals, the works. Tag a post and the gear remembers it. Sell a
            guitar and its history goes with it.
          </p>

          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {stats.map(([n, l]) => (
              <div key={l} style={{ padding: "22px 18px", background: C.dark }}>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 36,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    ...MONO,
                    fontSize: 10,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "52px 1fr",
        gap: 18,
        padding: "14px 0",
        borderTop: `1px solid ${C.hair}`,
      }}
    >
      <div
        style={{
          ...MONO,
          fontSize: 11,
          color: C.accent,
          fontWeight: 600,
          paddingTop: 3,
        }}
      >
        {n}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: 19,
            fontWeight: 500,
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: 2, fontSize: 14, lineHeight: 1.5, color: C.ink2 }}>
          {body}
        </div>
      </div>
    </div>
  );
}

function ComposeSection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "120px 32px",
        display: "grid",
        gridTemplateColumns: "0.95fr 1.05fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ ...MONO, fontSize: 11, color: C.ink3, marginBottom: 18 }}>
          03 — The Composer
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            textWrap: "balance",
          }}
        >
          Post like
          <br />
          you&apos;re <em style={{ fontStyle: "italic" }}>writing</em>.
        </h2>
        <p
          style={{
            marginTop: 24,
            fontSize: 17,
            lineHeight: 1.6,
            color: C.ink2,
            maxWidth: 460,
            textWrap: "pretty",
          }}
        >
          Three-step composer. Pick the photo, pull gear straight from your rig, then
          write the caption in a typesetter&apos;s editor — serif, generous leading, a
          500-character budget that asks you to say something.
        </p>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <Step
            n="01"
            title="Photograph"
            body="One photo per post. Crop to taste — 4:5, square, or full-frame."
          />
          <Step
            n="02"
            title="Tag your rig"
            body="Pulled from your catalogue. One tap to add new gear."
          />
          <Step
            n="03"
            title="Compose"
            body="Serif editor, 500 chars. Drafts auto-save offline."
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <PhoneInline>
          <EdComposer />
        </PhoneInline>
      </div>
    </section>
  );
}

function GallerySection() {
  const cells: { tint: PhotoTint; label: string; span: number; h: number }[] = [
    { tint: "walnut", label: "1965 ES-335", span: 2, h: 380 },
    { tint: "sunburst", label: "1962 Stratocaster", span: 1, h: 380 },
    { tint: "blonde", label: "'72 Thinline", span: 1, h: 260 },
    { tint: "rust", label: "1959 Les Paul", span: 1, h: 260 },
    { tint: "smoke", label: "Princeton · 1968", span: 1, h: 260 },
    { tint: "cream", label: "D-28 · Brazilian", span: 1, h: 320 },
    { tint: "blue", label: "Rickenbacker 360", span: 2, h: 320 },
    { tint: "silver", label: "Klon · Gold", span: 1, h: 320 },
  ];
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "120px 32px 60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 32,
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ ...MONO, fontSize: 11, color: C.ink3, marginBottom: 12 }}>
            Field notes
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: 48,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              maxWidth: 700,
              textWrap: "balance",
            }}
          >
            A week on the feed.
          </h2>
        </div>
        <a
          href="#download"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: C.ink,
            textDecoration: "underline",
            textUnderlineOffset: 4,
            textDecorationColor: C.hair2,
          }}
        >
          See the latest →
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
        }}
      >
        {cells.map((c, i) => (
          <div key={i} style={{ gridColumn: `span ${c.span}` }}>
            <Photo tint={c.tint} label={c.label} height={c.h} radius={2} />
          </div>
        ))}
      </div>
    </section>
  );
}

function QuotesSection() {
  const quotes: {
    tint: PhotoTint;
    name: string;
    handle: string;
    city: string;
    text: string;
  }[] = [
    {
      tint: "walnut",
      name: "Maren Holt",
      handle: "marenholt",
      city: "Portland, OR",
      text: "Finally a feed where the photo of my 1965 335 doesn’t get buried under reels of someone’s sock drawer.",
    },
    {
      tint: "sunburst",
      name: "Theo Ramírez",
      handle: "theo.ramirez",
      city: "Mexico City",
      text: "The Rig page is exactly the catalogue I tried to build in a Notes app for ten years. It just works.",
    },
    {
      tint: "blonde",
      name: "June Sato",
      handle: "junesato",
      city: "Kyoto",
      text: "Whole comment thread on the ash grain of a single Thinline. This is the internet I signed up for.",
    },
  ];
  return (
    <section
      id="community"
      style={{
        background: C.surface2,
        borderTop: `1px solid ${C.hair}`,
        borderBottom: `1px solid ${C.hair}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: 48,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              maxWidth: 600,
              textWrap: "balance",
            }}
          >
            The slowest, kindest corner
            <br />
            of the guitar internet.
          </h2>
          <div style={{ ...MONO, fontSize: 11, color: C.ink3 }}>
            From the community
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {quotes.map((q) => (
            <figure
              key={q.handle}
              style={{
                margin: 0,
                padding: 28,
                background: C.surface,
                border: `1px solid ${C.hair}`,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 40,
                  lineHeight: 1,
                  color: C.accent,
                }}
              >
                “
              </div>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--serif)",
                  fontSize: 19,
                  lineHeight: 1.45,
                  letterSpacing: "-0.005em",
                  color: C.ink,
                  flex: 1,
                  textWrap: "pretty",
                }}
              >
                {q.text}
              </blockquote>
              <figcaption
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 18,
                  borderTop: `1px solid ${C.hair}`,
                }}
              >
                <Avatar size={36} src={q.tint} />
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{q.name}</div>
                  <div style={{ fontSize: 12, color: C.ink3 }}>
                    @{q.handle} · {q.city}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Is Chordial free?",
      a: "Yes. Posting, building your rig and following players is free. We charge a small annual fee for power users who want unlimited collections and exporting their catalogue.",
    },
    {
      q: "What about Android?",
      a: "iOS first. Android is on the roadmap for 2026 — sign up for the newsletter and we’ll let you know when the beta opens.",
    },
    {
      q: "Will I see ads?",
      a: "No banner ads. No promoted posts. No third-party trackers. The luthier directory and gear marketplace are clearly labelled.",
    },
    {
      q: "Can I export my rig?",
      a: "Always. One tap exports your full catalogue as a PDF or CSV, photos and provenance included.",
    },
  ];
  return (
    <section style={{ maxWidth: 980, margin: "0 auto", padding: "100px 32px" }}>
      <div style={{ ...MONO, fontSize: 11, color: C.ink3, marginBottom: 12 }}>
        Questions
      </div>
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--serif)",
          fontWeight: 400,
          fontSize: 44,
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          marginBottom: 36,
        }}
      >
        Things people ask.
      </h2>
      <div>
        {faqs.map((f, i) => (
          <details
            key={i}
            style={{ borderTop: `1px solid ${C.hair}`, padding: "22px 0" }}
          >
            <summary
              style={{
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                fontFamily: "var(--serif)",
                fontSize: 22,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              {f.q}
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: `1px solid ${C.hair2}`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.ink2,
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: "14px 0 0",
                maxWidth: 720,
                fontSize: 15,
                lineHeight: 1.6,
                color: C.ink2,
                textWrap: "pretty",
              }}
            >
              {f.a}
            </p>
          </details>
        ))}
        <div style={{ borderTop: `1px solid ${C.hair}` }} />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="download" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 32px 120px" }}>
      <div
        style={{
          position: "relative",
          background: C.dark,
          color: C.darkInk,
          borderRadius: 6,
          overflow: "hidden",
          padding: "72px 56px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(80% 60% at 100% 100%, rgba(5,150,105,0.20), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <div
            style={{
              ...MONO,
              fontSize: 11,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 18,
            }}
          >
            Now in early access
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: 60,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Bring your rig home.
          </h2>
          <p
            style={{
              marginTop: 22,
              marginBottom: 32,
              maxWidth: 460,
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Free on the App Store. Made in Brooklyn by three players who got tired of
            the alternatives.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                background: "#fff",
                color: C.dark,
                padding: "14px 22px",
                borderRadius: 9999,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AppleGlyph /> Download for iOS
            </a>
            <a
              href="#"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "14px 22px",
                borderRadius: 9999,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Android — notify me
            </a>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ transform: "scale(0.78) translateY(20px)" }}>
            <PhoneInline shadow="dark">
              <EdProfile />
            </PhoneInline>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const col = (heading: string, links: string[]) => (
    <div>
      <div style={{ ...MONO, fontSize: 10, color: C.ink3, marginBottom: 14 }}>
        {heading}
      </div>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              style={{ color: C.ink, fontSize: 14, textDecoration: "none" }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer style={{ borderTop: `1px solid ${C.hair}`, background: C.surface }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 32px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
            gap: 40,
            paddingBottom: 56,
            borderBottom: `1px solid ${C.hair}`,
          }}
        >
          <div>
            <Wordmark size={28} />
            <p
              style={{
                marginTop: 16,
                marginBottom: 0,
                fontSize: 14,
                lineHeight: 1.5,
                color: C.ink2,
                maxWidth: 280,
              }}
            >
              A quieter place to share the guitars you love.
            </p>
          </div>
          {col("Product", ["The feed", "Your rig", "The composer", "Download"])}
          {col("Community", [
            "Field notes",
            "Luthier directory",
            "House style guide",
            "Code of conduct",
          ])}
          {col("Company", ["About", "Press", "Jobs", "Contact"])}
          {col("Legal", ["Privacy", "Terms", "Cookies"])}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            fontSize: 12,
            color: C.ink3,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>© 2026 Chordial Inc. · Made in Brooklyn, NY</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#" style={{ color: C.ink3, textDecoration: "none" }}>
              Instagram
            </a>
            <a href="#" style={{ color: C.ink3, textDecoration: "none" }}>
              YouTube
            </a>
            <a href="#" style={{ color: C.ink3, textDecoration: "none" }}>
              Newsletter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function EditorialLanding() {
  return (
    <div style={{ background: C.surface, color: C.ink, width: "100%" }}>
      <Nav />
      <Hero />
      <GearStrip />
      <FeedSection />
      <RigSection />
      <ComposeSection />
      <GallerySection />
      <QuotesSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
}
