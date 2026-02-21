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
      <h1 style={{fontSize:40}}>Learn to shoot outside bombs.</h1>
      <p style={{color:"#ccc",fontSize:18}}>
        Private lessons ($50) and shooting clinics ($30) for athletes ages 7–17.
      </p>

      <section style={{marginTop:40}}>
        <h2 style={{color:"#38bdf8"}}>About the Coach</h2>
        <p>
          10+ years coaching experience turning good players into great players.
          Two-time All-American at Boston University.
          Program record holder for goals, points, and points in a game (14).
        </p>
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
