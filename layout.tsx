
export const metadata = {
  title: "Bomb Lacrosse",
  description: "Private lacrosse shooting lessons and clinics."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:"Arial",background:"#000",color:"#fff"}}>
        <header style={{padding:20,borderBottom:"1px solid #222"}}>
          <h2 style={{color:"#38bdf8"}}>Bomb Lacrosse</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
