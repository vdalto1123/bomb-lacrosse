
export default function Home() {
  return (
    <main style={{padding:40,maxWidth:900,margin:"auto"}}>

      <img
  src="/icon.png"
  alt="Bomb Lacrosse logo"
  style={{
    width: 80,
    height: 80,
    objectFit: "contain",
    marginBottom: 20
  }}
/>
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

        <p>Click below to book your private lesson or clinic.</p>
        <a href="https://calendly.com/your-link"
           style={{
             display:"inline-block",
             marginTop:20,
             padding:"15px 25px",
             background:"#38bdf8",
             color:"#000",
             textDecoration:"none",
             fontWeight:"bold",
             borderRadius:8
           }}>
          View Availability & Book
        </a>
      </section>
    </main>
  );
}
