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
  src="https://calendly.com/vinceddalto?hide_gdpr_banner=1"
  width="100%"
  height="600"
  style={{
    border: "1px solid #222",
    borderRadius: 16,
    maxWidth: 900,
    display: "block",
    margin: "0 auto"
  }}
  frameBorder="0"
  title="Calendly"
/>
      </div>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#89CFF0" }}>FAQ</h2>
        <ul>
          <li><b>Who is this for?</b> Athletes ages 7–21 (parents book).</li>
          <li><b>What should we bring?</b> Stick, helmet, gloves, water.</li>
          <li><b>Where is training?</b> (TBD)</li>
        </ul>
      </section>
    </main>
  );
}
