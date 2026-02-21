"use client";
import { useEffect, useState } from "react";
function Slideshow() {
  const images = [
  "/Slide1.jpg",
  "/Slide2.jpg",
  "/Slide3.jpg",
  "/Slide4.JPG",
  "/Slide5.jpg"
]; // add more if you uploaded more
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <img
        src={images[index]}
        alt="Bomb Lacrosse slideshow"
        style={{
  width: "100%",
  maxWidth: 900,
  height: "auto",
  objectFit: "contain",
  borderRadius: 16,
  border: "1px solid #222",
  display: "block",
}}
      />

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              background: i === index ? "#89CFF0" : "#333",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main style={{padding:40,maxWidth:900,margin:"auto"}}>
      <h1 style={{fontSize:40}}>Learn to shoot bombs.</h1>
     <ul style={{ color: "#ddd", fontSize: 18, marginTop: 10, lineHeight: 1.8 }}>
  <li>Private lessons — $50 per athlete (60 minutes)</li>
  <li>Shooting clinics — $30 per athlete</li>
  <li>Athletes ages 7–21</li>
</ul>

      <section style={{marginTop:40}}>
        <h2 style={{color:"#38bdf8"}}>About the Coach</h2>
        <p>
          Vince D'Alto has 10+ years coaching experience molding good players into great players.
          He was a two-time All-American at Boston University, And signed a 2 year contract with the Redwoods Lacrosse Club.
          He is Boston Universities program record holder for goals (167), points (280), and points in a game (14).
          <div style={{ marginTop: 30, display: "grid", gap: 20 }}>
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/LjWB9cCaa1M"
    title="Bomb Lacrosse Video 1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
      borderRadius: 16,
      border: "1px solid #222",
      maxWidth: 900
    }}
  />

  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/JB0f89xbteI"
    title="Bomb Lacrosse Video 2"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
      borderRadius: 16,
      border: "1px solid #222",
      maxWidth: 900
    }}
  />
</div>
        </p>

        <section style={{ marginTop: 40 }}>
  <h2 style={{ color: "#38bdf8" }}>About Us</h2>
  <p style={{ color: "#ddd", fontSize: 16, lineHeight: 1.6 }}>
    Bomb Lacrosse is built around one idea: proper form, hard work and positioning on the field creates confident shooters.
    
  </p>
</section>

<section style={{ marginTop: 40 }}>
  <h2 style={{ color: "#38bdf8" }}>Training Regimen</h2>
  <ul style={{ color: "#ddd", lineHeight: 1.8, paddingLeft: 18 }}>
    <li><b>Mechanics:</b> hands, hips, shoulders, release</li>
    <li><b>Time &amp; room shooting:</b> catch → load → fire</li>
    <li><b>On-the-run shooting:</b> balance, angles, accuracy</li>
    <li><b>Quick release:</b> speed without losing form</li>
    <li><b>Game-speed reps</b> that translate to real games</li>
  </ul>
</section>

<section style={{ marginTop: 40 }}>
  <h2 style={{ color: "#38bdf8" }}>What to Expect</h2>
  <ul style={{ color: "#ddd", lineHeight: 1.8, paddingLeft: 18 }}>
    <li>Warm-up + quick evaluation</li>
    <li>Form corrections with clear coaching cues</li>
    <li>High-quality reps at game speed</li>
    <li>Take-home drills so progress continues</li>
    <li> Reps, Reps, Reps!</li>
  </ul>
</section>
        
      </section>

      <Slideshow />
      
      <section style={{marginTop:40}}>
        <h2 style={{color:"#38bdf8"}}>Book a Session</h2>
        <a
  href="/availability"
  style={{
    display: "inline-block",
    marginTop: 20,
    padding: "15px 25px",
    background: "#89CFF0",
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: 8
  }}
>
  View Availability & Book
</a>

        
      </section>
    </main>
  );
}
