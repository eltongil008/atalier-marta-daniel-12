import { useState, useEffect } from "react";

export default function Footer() {

  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <footer style={{
      background: "#000",
      color: "#f5f5f7",
      padding: "40px 20px 18px",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      borderTop: "1px solid rgba(255,255,255,0.06)",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.8s ease",
    }}>

      <div style={{
        maxWidth: "1000px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "28px"
      }}>

        {/* BRAND */}
        <div>
          <h3 style={{
            fontSize: "15px",
            letterSpacing: "1px",
            fontWeight: "600",
            color: "#C6921E"
          }}>
            Atelier Marta Daniel
          </h3>

          <p style={{
            fontSize: "12px",
            color: "#a1a1a6",
            marginTop: "8px",
            lineHeight: 1.5
          }}>
            Moda de luxo com elegância intemporal.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 style={title}>Loja</h4>
          <a href="#" style={link}>Novidades</a>
          <a href="#" style={link}>Vestidos</a>
          <a href="#" style={link}>Coleções</a>
        </div>

        {/* SUPORTE */}
        <div>
          <h4 style={title}>Suporte</h4>
          <a href="#" style={link}>Contacto</a>
          <a href="#" style={link}>Envios</a>
          <a href="#" style={link}>Devoluções</a>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h4 style={title}>Redes</h4>

          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>

            {/* Instagram */}
            <button
              onClick={() => window.open("https://www.instagram.com/atelier.marta.daniel", "_blank")}
              style={iconBtn("#E1306C")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7zm10 2c2 0 3 1 3 3s-1 3-3 3-3-1-3-3 1-3 3-3zm-5 4c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z"/>
              </svg>
            </button>

            {/* TikTok */}
            <button
              onClick={() => window.open("https://www.tiktok.com/@ateliermartadaniel", "_blank")}
              style={iconBtn("#111")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M16 3c1 3 3 5 6 6v3c-2 0-4-1-6-2v6c0 3-3 6-6 6s-6-3-6-6 3-6 6-6h1v3h-1c-2 0-3 1-3 3s1 3 3 3 3-1 3-3V3h3z"/>
              </svg>
            </button>

          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 style={title}>Newsletter</h4>

          <div style={{
            display: "flex",
            borderRadius: "999px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            marginTop: "8px"
          }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{
                flex: 1,
                padding: "8px",
                fontSize: "12px",
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#fff"
              }}
            />
            <button
              onClick={() => alert("OK")}
              style={{
                padding: "8px 12px",
                border: "none",
                background: "#C6921E",
                color: "#fff",
                fontSize: "12px",
                cursor: "pointer"
              }}
            >
              OK
            </button>
          </div>
        </div>

      </div>

      {/* FOOTER FINAL */}
      <div style={{
        textAlign: "center",
        marginTop: "20px",
        fontSize: "11px",
        color: "#6e6e73"
      }}>
        © 2026 Atelier Marta Daniel — All rights reserved.
      </div>
    </footer>
  );
}

/* STYLES */
const title = {
  fontSize: "12px",
  marginBottom: "8px",
  color: "#C6921E",
  letterSpacing: "0.5px",
  fontWeight: "600"
};

const link = {
  display: "block",
  fontSize: "12px",
  color: "#a1a1a6",
  marginBottom: "5px",
  textDecoration: "none"
};

const iconBtn = (color) => ({
  width: "34px",
  height: "34px",
  borderRadius: "10px",
  border: "none",
  background: color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
});