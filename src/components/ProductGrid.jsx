import { useState } from "react";
import { useNavigate } from "react-router-dom";

import vestido1 from '../assets/vestido1.jpeg';
import vestido2 from '../assets/vestido2.jpeg';
import vestido3 from '../assets/vestido3.jpeg';
import noiva1 from '../assets/noiva4.jpeg';
import noiva2 from '../assets/noiva5.jpeg';
import noiva3 from '../assets/noiva6.jpeg';

const products = [
  {
    id: 1,
    name: 'Vestido Casual',
    img: vestido1,
    category: 'Vestido',
    description: 'Vestido casual elegante',
    rating: 5,
    price: "120"
  },
  {
    id: 2,
    name: 'Vestido Elegante',
    img: noiva1,
    category: 'Noiva',
    description: 'Vestido premium de noiva',
    rating: 4,
    price: "250"
  },
  {
    id: 3,
    name: 'Vestido Diário',
    img: vestido2,
    category: 'Vestido',
    description: 'Conforto e estilo diário',
    rating: 5,
    price: "90"
  },
  {
    id: 4,
    name: 'Vestido Sofisticado',
    img: noiva2,
    category: 'Noiva',
    description: 'Alta qualidade premium',
    rating: 5,
    price: "300"
  },
  {
    id: 5,
    name: 'Vestido Formal',
    img: vestido3,
    category: 'Vestido',
    description: 'Elegância para eventos',
    rating: 4,
    price: "180"
  },
  {
    id: 6,
    name: 'Vestido Clássico',
    img: noiva3,
    category: 'Noiva',
    description: 'Clássico atemporal',
    rating: 5,
    price: "220"
  },
  {
    id: 7,
    name: 'Vestido Luxo',
    img: vestido1,
    category: 'Vestido',
    description: 'Design moderno e luxuoso',
    rating: 5,
    price: "400"
  },
  {
    id: 8,
    name: 'Vestido Festa',
    img: vestido2,
    category: 'Vestido',
    description: 'Ideal para festas e eventos',
    rating: 4,
    price: "150"
  },
  {
    id: 9,
    name: 'Vestido Premium',
    img: noiva1,
    category: 'Noiva',
    description: 'Alta costura premium',
    rating: 5,
    price: "350"
  },
  {
    id: 10,
    name: 'Vestido Exclusivo',
    img: noiva2,
    category: 'Noiva',
    description: 'Peça única exclusiva',
    rating: 5,
    price: "500"
  },
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

  const handleMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
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

            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at var(--x) var(--y), rgba(198,146,30,0.18), transparent 40%)',
              pointerEvents: 'none',
            }} />

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
                }}
              />
            </div>

            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '10px'
            }}>
              {p.name}
            </h4>

            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "2px",
              marginTop: "6px",
              marginBottom: "8px",
              fontSize: "15px"
            }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    color: star <= p.rating ? "#FFD700" : "#d9d9d9",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            <strong style={{
              display: "block",
              textAlign: "center",
              fontSize: '15px',
              color: '#C6921E'
            }}>
              ${p.price}
            </strong>
          </div>
        ))}
      </div>

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
            zIndex: 9999
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '22px',
              width: '90%',
              maxWidth: '450px',
              textAlign: 'center'
            }}
          >

            {/* IMAGEM CENTRALIZADA CORRIGIDA */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              padding: '10px',
              background: '#fafafa',
              borderRadius: '14px'
            }}>
              <img
                src={selectedProduct.img}
                style={{
                  maxWidth: '100%',
                  maxHeight: '320px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  display: 'block'
                }}
              />
            </div>

            <h2>{selectedProduct.name}</h2>

            <strong style={{ color: '#C6921E' }}>
              ${selectedProduct.price}
            </strong>

            <button
              onClick={() => {
                onAddToCart?.(selectedProduct);
                setSelectedProduct(null);
              }}
              style={{
                width: '100%',
                marginTop: '14px',
                padding: '12px',
                borderRadius: '12px',
                background: '#0071e3',
                color: '#fff',
                border: 'none'
              }}
            >
              Adicionar ao Carrinho
            </button>

            <button
              onClick={() => {
                navigate("/checkout", {
                  state: { items: [selectedProduct] }
                });
              }}
              style={{
                width: '100%',
                marginTop: '10px',
                padding: '12px',
                borderRadius: '12px',
                background: '#28a745',
                color: '#fff',
                border: 'none'
              }}
            >
              Finalizar Compra
            </button>

          </div>
        </div>
      )}
    </>
  );
}