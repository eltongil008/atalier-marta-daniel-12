import { useState } from "react";
import { useNavigate } from "react-router-dom";

import vestido1 from '../assets/vestido1.jpeg';
import vestido2 from '../assets/vestido2.jpeg';
import vestido3 from '../assets/vestido3.jpeg';
import noiva1 from '../assets/noiva4.jpeg';
import noiva2 from '../assets/noiva5.jpeg';
import noiva3 from '../assets/noiva6.jpeg';

const products = [
  { id: 1, name: 'Vestido Casual', img: vestido1, category: 'Vestido', description: 'Vestido casual elegante',  },
  { id: 2, name: 'Vestido Elegante', img: noiva1, category: 'Noiva', description: 'Vestido premium de noiva',  },
  { id: 3, name: 'Vestido Diário', img: vestido2, category: 'Vestido', description: 'Conforto e estilo diário', },
  { id: 4, name: 'Vestido Sofisticado', img: noiva2, category: 'Noiva', description: 'Alta qualidade premium',  },
  { id: 5, name: 'Vestido Formal', img: vestido3, category: 'Vestido', description: 'Elegância para eventos',  },
  { id: 6, name: 'Vestido Clássico', img: noiva3, category: 'Noiva', description: 'Clássico atemporal',   },
  { id: 7, name: 'Vestido Luxo', img: vestido1, category: 'Vestido', description: 'Design moderno e luxuoso',  },
  { id: 8, name: 'Vestido Festa', img: vestido2, category: 'Vestido', description: 'Ideal para festas e eventos', },
  { id: 9, name: 'Vestido Premium', img: noiva1, category: 'Noiva', description: 'Alta costura premium',  },
  { id: 10, name: 'Vestido Exclusivo', img: noiva2, category: 'Noiva', description: 'Peça única exclusiva', },
];

export default function ProductGrid({ onAddToCart, selectedCategory, searchTerm }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const filtered = products.filter(p => {
    const byCategory =
      !selectedCategory || selectedCategory === "Todos"
        ? true
        : p.category === selectedCategory;

    const bySearch =
      !searchTerm ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());

    return byCategory && bySearch;
  });

  // 🎯 movimento suave de luz
  const handleMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
      {/* GRID ULTRA PREMIUM */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '22px',
        padding: '35px',
        maxWidth: '1150px',
        margin: 'auto',
        background: 'linear-gradient(180deg,#f7f7f7,#ffffff)'
      }}>

        {filtered.map(p => (
          <div
            key={p.id}
            onClick={() => setSelectedProduct(p)}
            onMouseMove={(e) => handleMove(e, e.currentTarget)}
            style={{
              position: 'relative',
              background: '#fff',
              borderRadius: '20px',
              padding: '16px',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'all 0.25s ease',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
            }}
          >

            {/* ✨ luz dinâmica que segue o mouse */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at var(--x) var(--y), rgba(198,146,30,0.18), transparent 40%)',
              pointerEvents: 'none',
              transition: '0.1s'
            }} />

            {/* imagem com sensação 3D */}
            <div style={{
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={p.img}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.2))',
                  transition: '0.4s ease',
                }}
              />
            </div>

            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1d1d1f',
              marginTop: '10px'
            }}>
              {p.name}
            </h4>

            <strong style={{
              fontSize: '15px',
              color: '#C6921E'
            }}>
              {p.price}
            </strong>
          </div>
        ))}
      </div>

      {/* MODAL CINEMATOGRÁFICO */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            zIndex: 9999
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'rgba(255,255,255,0.98)',
              padding: '24px',
              borderRadius: '22px',
              width: '92%',
              maxWidth: '450px',
              textAlign: 'center',
              animation: 'floatIn 0.4s ease',
              boxShadow: '0 30px 80px rgba(0,0,0,0.25)'
            }}
          >

            <img
              src={selectedProduct.img}
              style={{
                width: '100%',
                borderRadius: '14px',
                maxHeight: '300px',
                objectFit: 'contain',
                background: '#f6f6f6',
                padding: '10px'
              }}
            />

            <h2 style={{ marginTop: 12 }}>
              {selectedProduct.name}
            </h2>

            <strong style={{ color: '#C6921E', fontSize: 18 }}>
              {selectedProduct.price}
            </strong>

            <button
              onClick={() => {
                onAddToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              style={{
                width: '100%',
                marginTop: '14px',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg,#0071e3,#005bb5)',
                color: '#fff',
                fontWeight: 600
              }}
            >
              Adicionar ao Carrinho
            </button>

            <button
              onClick={() => {
                navigate("/checkout", { state: { items: [selectedProduct] } });
              }}
              style={{
                width: '100%',
                marginTop: '10px',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg,#34c759,#28a745)',
                color: '#fff',
                fontWeight: 600
              }}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}

      {/* animação premium */}
      <style>{`
        @keyframes floatIn {
          from { transform: translateY(40px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}