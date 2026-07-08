import type { CSSProperties, ReactElement } from "react";

const avatar = new URL("../assets/avatar.jpg", import.meta.url).href;
const resume = new URL("../assets/MayurVarshneyProfile.pdf", import.meta.url)
  .href;

const Hero = (): ReactElement => {
  return (
    <section id="home" className="section" style={styles.section}>
      <div className="container" style={styles.inner}>
        <div style={styles.avatarWrap}>
          <div style={styles.avatarGlow} />
          <div style={styles.avatarRing} />
          <div style={styles.avatarFrame}>
            <img src={avatar} alt="Mayur Varshney" style={styles.avatarImg} />
          </div>
          <div style={styles.statusBadge} className="glass-panel">
            <span style={styles.statusDot} />
            <span className="text-glow-cyan" style={styles.statusText}>
              Available for opportunities
            </span>
          </div>
        </div>

        <p style={styles.eyebrow}>Senior Software Developer</p>
        <h1 style={styles.name}>Mayur Varshney</h1>
        <p style={styles.role}>
          Senior Software Developer / Team Lead{" "}
          <span style={styles.dot}>·</span> India
        </p>
        <p style={styles.bio}>
          Passionate about building scalable, high-performance mobile and web
          experiences. Over 9 years of expertise across React Native, React, and
          Node.js — leading teams and shipping for healthcare, retail, and
          enterprise clients.
        </p>
        <div style={styles.links}>
          <a
            href={resume}
            download="Mayur_Varshney_Resume.pdf"
            style={styles.primaryLink}
            className="chamfer"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              download
            </span>{" "}
            Download Resume
          </a>
          <a href="mailto:mvnic.44@gmail.com" style={styles.secondaryLink}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              mail
            </span>{" "}
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/mayurvarshney"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.secondaryLink}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              link
            </span>{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, CSSProperties> = {
  section: { textAlign: "center", paddingTop: 148 },
  inner: { display: "flex", flexDirection: "column", alignItems: "center" },
  avatarWrap: {
    position: "relative",
    marginBottom: 40,
    width: 208,
    height: 208,
  },
  avatarGlow: {
    position: "absolute",
    inset: -20,
    background: "radial-gradient(circle, var(--cyan) 0%, transparent 70%)",
    opacity: 0.35,
    filter: "blur(20px)",
  },
  avatarRing: {
    position: "absolute",
    inset: -8,
    borderRadius: "50%",
    border: "1px solid var(--cyan)",
    opacity: 0.5,
  },
  avatarFrame: {
    position: "relative",
    width: 208,
    height: 208,
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid var(--cyan)",
    boxShadow: "0 0 40px rgba(0,229,255,0.35)",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  statusBadge: {
    position: "absolute",
    bottom: -14,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 18px",
    borderRadius: 999,
    whiteSpace: "nowrap",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#39ff14",
    boxShadow: "0 0 8px #39ff14",
  },
  statusText: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--cyan)",
  },
  eyebrow: {
    fontFamily: "var(--font-mono)",
    fontSize: 14,
    color: "var(--cyan)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    margin: "0 0 14px 0",
  },
  name: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(42px, 7vw, 72px)",
    letterSpacing: "-0.02em",
    color: "var(--text)",
    margin: "0 0 14px 0",
    lineHeight: 1.1,
  },
  role: {
    fontFamily: "var(--font-mono)",
    fontSize: 19,
    color: "var(--cyan)",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    margin: "0 0 30px 0",
  },
  dot: { color: "var(--text-faint)", margin: "0 8px" },
  bio: {
    fontSize: 21,
    lineHeight: 1.75,
    color: "var(--text-dim)",
    maxWidth: 660,
    margin: "0 0 40px 0",
  },
  links: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  primaryLink: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "0.06em",
    padding: "16px 30px",
    background: "var(--cyan)",
    color: "var(--cyan-on)",
    textDecoration: "none",
    boxShadow: "0 0 24px rgba(0,229,255,0.35)",
  },
  secondaryLink: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "0.06em",
    padding: "16px 30px",
    border: "1px solid var(--cyan)",
    color: "var(--cyan)",
    textDecoration: "none",
  },
};

export default Hero;
