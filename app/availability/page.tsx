export default function AvailabilityPage() {
  const calendly = "https://calendly.com/vinceddalto";

  return (
    <main style={{ padding: 40, maxWidth: 1000, margin: "auto" }}>
      <h1 style={{ fontSize: 40 }}>Availability & Booking</h1>
      <p style={{ color: "#ccc", fontSize: 18 }}>
        View my availability and book a session using Calendly.
      </p>

      <div style={{ marginTop: 20 }}>
        <a
          href={calendly}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 22px",
            background: "#89CFF0",
            color: "#000",
            textDecoration: "none",
            fontWeight: 700,
            borderRadius: 10,
          }}
        >
          Open Calendly (Book a Time)
        </a>
      </div>

      <div
        style={{
          marginTop: 30,
          border: "1px solid #222",
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        <iframe
          src={`${calendly}?hide_gdpr_banner=1`}
          width="100%"
          height="900"
          frameBorder="0"
          title="Calendly"
        />
      </div>

      <section style={{ marginTop: 50 }}>
        <h2 style={{ color: "#89CFF0" }}>About Us</h2>
        <p>
          Bomb Lacrosse is built around one idea: proper form creates confident
          shooters. I have 10+ years of coaching experience turning good players
          into great players. I was a two-time All-American at Boston University
          and hold program records for goals and points.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#89CFF0" }}>Training Regimen</h2>
        <ul>
          <li>Mechanics: hands, hips, shoulders, release</li>
          <li>Time & room shooting: catch → load → fire</li>
          <li>On-the-run shooting: balance, angles, accuracy</li>
          <li>Quick release: speed without losing form</li>
          <li>Game-speed reps that translate to real games</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#89CFF0" }}>Pricing</h2>
        <ul>
          <li><b>Private Lesson:</b> $50 per athlete (60 minutes)</li>
          <li><b>Shooting Clinic:</b> $30 per athlete</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#89CFF0" }}>What to Expect</h2>
        <ul>
          <li>Warm-up + quick evaluation</li>
          <li>Form corrections with clear coaching cues</li>
          <li>High-quality reps at game speed</li>
          <li>Take-home drills so progress continues</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#89CFF0" }}>FAQ</h2>
        <ul>
          <li><b>Who is this for?</b> Athletes ages 7–17 (parents book).</li>
          <li><b>What should we bring?</b> Stick, helmet, gloves, water.</li>
          <li><b>Where is training?</b> (Add location later)</li>
        </ul>
      </section>
    </main>
  );
}
