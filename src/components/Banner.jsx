import { useState } from "react";
import vestido1 from "../assets/17.jpeg";
import vestido2 from "../assets/16.jpeg";
import noiva1 from "../assets/13.jpeg";

export default function Banner() {

  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #C6921E, #a97812)',
      color: '#fff',
      width: '95%',
      maxWidth: '1200px',
      margin: '30px auto',
      borderRadius: '28px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'clamp(20px, 4vw, 60px)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      flexWrap: 'wrap'
    }}>

      {/* TEXTO */}
      <div style={{
        flex: '1 1 320px',
        zIndex: 2
      }}>
        <h2 style={{
          fontSize: 'clamp(20px, 4vw, 42px)',
          fontWeight: '800',
          marginBottom: '10px',
          lineHeight: '1.1',
          letterSpacing: '-0.5px'
        }}>
          Coleção de Moda de Luxo
        </h2>

        <p style={{
          fontSize: 'clamp(12px, 2.5vw, 16px)',
          opacity: 0.9,
          marginBottom: '20px',
          maxWidth: '420px'
        }}>
          Descubra vestidos premium criados com elegância, exclusividade e estilo moderno.
        </p>

        <button style={{
          padding: '12px 26px',
          background: '#fff',
          color: '#C6921E',
          border: 'none',
          borderRadius: '999px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          transition: '0.3s ease'
        }}>
          Explorar Coleção
        </button>
      </div>

      {/* IMAGENS */}
      <div style={{
        flex: '1 1 320px',
        position: 'relative',
        height: '260px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <img
          src={vestido1}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          style={{
            width: '140px',
            height: '190px',
            objectFit: 'cover',
            borderRadius: '18px',
            position: 'absolute',
            left: '10%',
            top: '10%',
            transform: hovered === 1
              ? 'rotate(-6deg) scale(1.08) translateY(-10px)'
              : 'rotate(-10deg)',
            boxShadow: hovered === 1
              ? '0 30px 70px rgba(0,0,0,0.45)'
              : '0 20px 40px rgba(0,0,0,0.3)',
            transition: '0.4s ease',
            filter: hovered && hovered !== 1 ? 'blur(1px) brightness(0.9)' : 'none'
          }}
        />

        <img
          src={vestido2}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          style={{
            width: '130px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '18px',
            position: 'absolute',
            right: '10%',
            top: '0%',
            transform: hovered === 2
              ? 'rotate(10deg) scale(1.08) translateY(-10px)'
              : 'rotate(8deg)',
            boxShadow: hovered === 2
              ? '0 30px 70px rgba(0,0,0,0.45)'
              : '0 20px 40px rgba(0,0,0,0.3)',
            transition: '0.4s ease',
            filter: hovered && hovered !== 2 ? 'blur(1px) brightness(0.9)' : 'none'
          }}
        />

        <img
          src={noiva1}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          style={{
            width: '160px',
            height: '220px',
            objectFit: 'cover',
            borderRadius: '20px',
            position: 'absolute',
            bottom: '0%',
            left: '50%',
            transform: hovered === 3
              ? 'translateX(-50%) scale(1.1) translateY(-15px)'
              : 'translateX(-50%)',
            boxShadow: hovered === 3
              ? '0 40px 90px rgba(0,0,0,0.5)'
              : '0 25px 60px rgba(0,0,0,0.4)',
            zIndex: 2,
            transition: '0.4s ease',
            filter: hovered && hovered !== 3 ? 'blur(1px) brightness(0.85)' : 'none'
          }}
        />

      </div>

      {/* GLOW PREMIUM */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: hovered
          ? 'radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 60%)'
          : 'radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 55%)',
        transition: '0.4s ease',
        pointerEvents: 'none'
      }} />

    </div>
  );
}