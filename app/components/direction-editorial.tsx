import type { CSSProperties } from "react";
import { Avatar, Photo, type PhotoTint } from "./photos";
import { Icon, type IconName } from "./icons";

const ED = {
  surface: "#FAFAF7",
  text: "#111111",
  text2: "#5A5A58",
  text3: "#9A9A98",
  hair: "rgba(0,0,0,0.07)",
  accent: "#059669",
};

const edS = (p: CSSProperties = {}): CSSProperties => ({
  background: ED.surface,
  color: ED.text,
  fontFamily: "var(--sans)",
  ...p,
});

type TabKey = "home" | "discover" | "search" | "profile";

function EdTabBar({ active = "home" }: { active?: TabKey }) {
  const tab = (key: TabKey, name: IconName, label: string) => {
    const on = key === active;
    return (
      <div
        key={key}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          color: on ? ED.text : ED.text3,
        }}
      >
        <Icon name={name} size={22} filled={on} stroke={on ? ED.text : ED.text3} />
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        background: ED.surface,
        borderTop: `1px solid ${ED.hair}`,
        paddingBottom: 28,
        paddingTop: 10,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {tab("home", "home", "Home")}
      {tab("discover", "compass", "Discover")}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -22,
            width: 56,
            height: 56,
            borderRadius: 9999,
            background: ED.accent,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 12px rgba(5,150,105,0.25), 0 0 0 4px ${ED.surface}`,
          }}
        >
          <Icon name="plus" size={26} stroke="#fff" />
        </div>
        <div style={{ height: 22 }} />
        <div
          style={{
            position: "absolute",
            bottom: -4,
            fontSize: 10,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: ED.text3,
            fontWeight: 500,
            top: 38,
          }}
        >
          New
        </div>
      </div>
      {tab("search", "search", "Search")}
      {tab("profile", "user", "You")}
    </div>
  );
}

type Author = { name: string; tint: PhotoTint; initial: string };
type EdPostCardProps = {
  author: Author;
  handle: string;
  when: string;
  tint: PhotoTint;
  label?: string;
  caption: string;
  gear?: string;
  likes: string;
  comments: string;
  liked?: boolean;
};

function EdPostCard({
  author,
  handle,
  when,
  tint,
  label,
  caption,
  gear,
  likes,
  comments,
  liked,
}: EdPostCardProps) {
  return (
    <article style={{ padding: "0 16px 32px" }}>
      <header
        style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0" }}
      >
        <Avatar size={36} src={author.tint} initial={author.initial} />
        <div style={{ flex: 1, lineHeight: 1.2 }}>
          <div style={{ fontWeight: 500, fontSize: 14 }}>{author.name}</div>
          <div style={{ fontSize: 12, color: ED.text3 }}>
            @{handle} · {when}
          </div>
        </div>
        <Icon name="more" size={20} stroke={ED.text2} />
      </header>

      <Photo tint={tint} label={label} height={420} radius={2} />

      {gear && (
        <div
          style={{
            marginTop: 12,
            display: "flex",
            gap: 8,
            alignItems: "center",
            fontSize: 11,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: ED.text2,
          }}
        >
          <Icon name="guitar" size={14} stroke={ED.text2} />
          <span style={{ fontWeight: 500 }}>{gear}</span>
        </div>
      )}

      <p
        style={{
          marginTop: 14,
          marginBottom: 0,
          fontFamily: "var(--serif)",
          fontSize: 18,
          lineHeight: 1.45,
          letterSpacing: "-0.005em",
          color: ED.text,
          textWrap: "pretty",
        }}
      >
        {caption}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: liked ? ED.accent : ED.text,
          }}
        >
          <Icon
            name="heart"
            size={20}
            filled={liked}
            stroke={liked ? ED.accent : ED.text}
          />
          <span style={{ fontSize: 14, fontWeight: 500 }}>{likes}</span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: 6, color: ED.text }}
        >
          <Icon name="comment" size={20} stroke={ED.text} />
          <span style={{ fontSize: 14, fontWeight: 500 }}>{comments}</span>
        </div>
        <div style={{ flex: 1 }} />
        <Icon name="bookmark" size={20} stroke={ED.text} />
      </div>
    </article>
  );
}

export function EdHome() {
  return (
    <div style={edS({ height: "100%", position: "relative", paddingBottom: 96 })}>
      <header
        style={{
          paddingTop: 60,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 16,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          borderBottom: `1px solid ${ED.hair}`,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: ED.text3,
              fontWeight: 500,
            }}
          >
            Wednesday, May 13
          </div>
          <h1
            style={{
              margin: "6px 0 0",
              fontFamily: "var(--serif)",
              fontSize: 36,
              fontWeight: 400,
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
            }}
          >
            Home
          </h1>
        </div>
        <Icon name="bookmark" size={22} stroke={ED.text2} />
      </header>

      <div style={{ paddingTop: 8 }}>
        <EdPostCard
          author={{ name: "Maren Holt", tint: "walnut", initial: "M" }}
          handle="marenholt"
          when="2h"
          tint="walnut"
          label="full-body — 1965 ES-335"
          gear="Gibson · ES-335 · 1965"
          caption="Spent the morning polishing the binding on the 335. The cherry has settled into something deeper after sixty winters."
          likes="248"
          comments="32"
          liked
        />
        <div style={{ borderTop: `1px solid ${ED.hair}` }} />
        <EdPostCard
          author={{ name: "Theo Ramírez", tint: "sunburst", initial: "T" }}
          handle="theo.ramirez"
          when="5h"
          tint="sunburst"
          label="headstock — strat '62"
          gear="Fender · Stratocaster · 1962"
          caption="Three-tone sunburst is doing its job in the late afternoon light."
          likes="1.2K"
          comments="84"
        />
      </div>
      <EdTabBar active="home" />
    </div>
  );
}

type CommentProps = {
  src: PhotoTint;
  name: string;
  handle: string;
  when: string;
  text: string;
};

function Comment({ src, name, handle, when, text }: CommentProps) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Avatar size={32} src={src} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, lineHeight: 1.2 }}>
          <span style={{ fontWeight: 500 }}>{name}</span>
          <span style={{ color: ED.text3 }}>
            {" "}
            · @{handle} · {when}
          </span>
        </div>
        <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.45, color: ED.text }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export function EdPostDetail() {
  return (
    <div style={edS({ height: "100%", position: "relative" })}>
      <header
        style={{
          paddingTop: 56,
          paddingLeft: 12,
          paddingRight: 12,
          paddingBottom: 10,
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderBottom: `1px solid ${ED.hair}`,
        }}
      >
        <Icon name="chevron-left" size={24} stroke={ED.text} />
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: ED.text2,
          }}
        >
          Post
        </div>
        <Icon name="more" size={22} stroke={ED.text2} />
      </header>

      <div style={{ overflow: "auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 16px",
          }}
        >
          <Avatar size={40} src="blonde" />
          <div style={{ flex: 1, lineHeight: 1.2 }}>
            <div style={{ fontWeight: 500, fontSize: 14 }}>June Sato</div>
            <div style={{ fontSize: 12, color: ED.text3 }}>@junesato · 3h</div>
          </div>
        </div>

        <Photo tint="blonde" label="strat — maple, blonde" height={390} />

        <div style={{ padding: 16 }}>
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: ED.text2,
            }}
          >
            <Icon name="guitar" size={14} stroke={ED.text2} />
            <span style={{ fontWeight: 500 }}>
              Fender · Telecaster · 1972 Thinline
            </span>
          </div>
          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              fontFamily: "var(--serif)",
              fontSize: 20,
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
              textWrap: "pretty",
            }}
          >
            Picked this Thinline up from a luthier in Kyoto. The grain on the ash top
            is the kind of thing you can&apos;t fake.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 22 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: ED.accent,
              }}
            >
              <Icon name="heart" size={22} filled />
              <span style={{ fontSize: 15, fontWeight: 500 }}>412</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Icon name="comment" size={22} />
              <span style={{ fontSize: 15, fontWeight: 500 }}>28</span>
            </div>
            <div style={{ flex: 1 }} />
            <Icon name="share" size={20} stroke={ED.text2} />
          </div>

          <div
            style={{
              marginTop: 26,
              paddingTop: 18,
              borderTop: `1px solid ${ED.hair}`,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <Comment
              src="walnut"
              name="Maren Holt"
              handle="marenholt"
              when="2h"
              text="That ash grain is a painting. Stunning."
            />
            <Comment
              src="smoke"
              name="Wes Park"
              handle="wespark"
              when="1h"
              text="Where in Kyoto? I'm flying out next month."
            />
            <Comment
              src="rust"
              name="Cas Lin"
              handle="caslin"
              when="40m"
              text="Need to see the back of that neck."
            />
          </div>
        </div>

        <div style={{ height: 110 }} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "12px 16px 28px",
          background: ED.surface,
          borderTop: `1px solid ${ED.hair}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Avatar size={32} initial="Y" />
        <div
          style={{
            flex: 1,
            height: 40,
            borderRadius: 16,
            border: `1px solid ${ED.hair}`,
            padding: "0 14px",
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            color: ED.text3,
          }}
        >
          Add a comment…
        </div>
      </div>
    </div>
  );
}

type RigRowProps = {
  icon?: IconName;
  brand?: string;
  model?: string;
  year?: string;
  add?: boolean;
};

function RigRow({ icon, brand, model, year, add }: RigRowProps) {
  if (add) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 0",
          borderTop: `1px solid ${ED.hair}`,
          color: ED.accent,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="plus" size={20} stroke={ED.accent} />
        </div>
        <span style={{ fontSize: 15, fontWeight: 500 }}>Add gear</span>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 0",
        borderTop: `1px solid ${ED.hair}`,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: ED.text2,
        }}
      >
        {icon && <Icon name={icon} size={20} stroke={ED.text2} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, lineHeight: 1.2 }}>
          <span style={{ fontWeight: 600 }}>{brand}</span>
          <span style={{ color: ED.text2 }}> · </span>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>{model}</span>
        </div>
      </div>
      <div style={{ fontSize: 13, color: ED.text3, letterSpacing: "0.02em" }}>{year}</div>
    </div>
  );
}

export function EdProfile() {
  const tints: PhotoTint[] = [
    "walnut",
    "sunburst",
    "blonde",
    "black",
    "cream",
    "rust",
    "blue",
    "smoke",
    "silver",
  ];
  return (
    <div
      style={edS({
        height: "100%",
        position: "relative",
        paddingBottom: 96,
        overflow: "auto",
      })}
    >
      <header
        style={{
          paddingTop: 56,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: ED.text2,
          }}
        >
          @marenholt
        </div>
        <Icon name="more" size={22} stroke={ED.text2} />
      </header>

      <div style={{ padding: "8px 16px 24px", textAlign: "left" }}>
        <Avatar size={96} src="walnut" />
        <h1
          style={{
            margin: "18px 0 4px",
            fontFamily: "var(--serif)",
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: "-0.015em",
          }}
        >
          Maren Holt
        </h1>
        <div style={{ fontSize: 13, color: ED.text3 }}>Portland, OR</div>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: 15,
            lineHeight: 1.45,
            color: ED.text,
            textWrap: "pretty",
          }}
        >
          Vintage hollowbodies. Slow songs. Mostly cherry red.
        </p>

        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 18,
            fontSize: 13,
            color: ED.text2,
          }}
        >
          <div>
            <span style={{ color: ED.text, fontWeight: 500, fontSize: 15 }}>1.2K</span>{" "}
            Followers
          </div>
          <div>
            <span style={{ color: ED.text, fontWeight: 500, fontSize: 15 }}>284</span>{" "}
            Following
          </div>
          <div>
            <span style={{ color: ED.text, fontWeight: 500, fontSize: 15 }}>62</span>{" "}
            Posts
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
          <button
            style={{
              flex: 1,
              height: 44,
              borderRadius: 16,
              background: "transparent",
              border: `1px solid ${ED.hair}`,
              color: ED.text,
              fontFamily: "inherit",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Edit profile
          </button>
          <button
            style={{
              width: 44,
              height: 44,
              borderRadius: 16,
              background: "transparent",
              border: `1px solid ${ED.hair}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="share" size={18} />
          </button>
        </div>
      </div>

      <section style={{ padding: "0 16px", borderTop: `1px solid ${ED.hair}` }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            padding: "20px 0 12px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            My Rig
          </h2>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: ED.text3,
              fontWeight: 500,
            }}
          >
            8 items
          </span>
        </div>

        <RigRow icon="guitar" brand="Gibson" model="ES-335" year="1965" />
        <RigRow icon="guitar" brand="Fender" model="Stratocaster" year="1962" />
        <RigRow icon="amp" brand="Fender" model="Princeton Reverb" year="1968" />
        <RigRow icon="pedal" brand="Klon" model="Centaur (Gold)" year="1995" />
        <RigRow add />
      </section>

      <section style={{ padding: "20px 16px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            paddingBottom: 12,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Posts
          </h2>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: ED.text3,
              fontWeight: 500,
            }}
          >
            62
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
          }}
        >
          {tints.map((t, i) => (
            <Photo key={i} tint={t} height={114} />
          ))}
        </div>
      </section>

      <EdTabBar active="profile" />
    </div>
  );
}

const btnTertiary: CSSProperties = {
  background: "none",
  border: "none",
  padding: 0,
  color: ED.text2,
  fontFamily: "inherit",
  fontSize: 15,
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        height: 32,
        padding: "0 14px",
        borderRadius: 9999,
        border: `1px solid ${ED.hair}`,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: ED.text,
        background: ED.surface,
      }}
    >
      {children}
    </div>
  );
}

export function EdComposer() {
  return (
    <div
      style={edS({
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <header
        style={{
          paddingTop: 56,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${ED.hair}`,
        }}
      >
        <button style={btnTertiary}>Cancel</button>
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: ED.text2,
          }}
        >
          New post · 3 of 3
        </div>
        <button style={{ ...btnTertiary, color: ED.accent, fontWeight: 600 }}>
          Share
        </button>
      </header>

      <div style={{ flex: 1, overflow: "auto", padding: 16 }}>
        <Photo tint="sunburst" label="strat — '62 sunburst" height={300} radius={2} />

        <div style={{ marginTop: 18 }}>
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              marginBottom: 10,
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: ED.text2,
            }}
          >
            <Icon name="guitar" size={14} stroke={ED.text2} />
            <span style={{ fontWeight: 500 }}>Tag gear from your Rig</span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Chip>Fender · Strat &apos;62</Chip>
            <Chip>+ Add another</Chip>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: ED.text2,
              fontWeight: 500,
              marginBottom: 8,
            }}
          >
            Caption
          </div>
          <div
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
              color: ED.text,
              textWrap: "pretty",
              minHeight: 100,
            }}
          >
            Three-tone sunburst is doing its job in the late afternoon light.
            <span
              style={{
                background: ED.accent,
                display: "inline-block",
                width: 1.5,
                height: 22,
                verticalAlign: "middle",
                marginLeft: 1,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 12,
              color: ED.text3,
              textAlign: "right",
            }}
          >
            72 / 500
          </div>
        </div>
      </div>

      <div style={{ padding: "12px 16px 32px", borderTop: `1px solid ${ED.hair}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              fontSize: 12,
              color: ED.text2,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Ready
          </div>
          <div
            style={{
              flex: 1,
              height: 2,
              background: ED.hair,
              borderRadius: 2,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "100%",
                background: ED.accent,
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
