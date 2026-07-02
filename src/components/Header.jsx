import logo from "../assets/Atelier-Marta-Daniel.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({
  onCategorySelect,
  onSearch,
  cartItems = [],
  onRemoveItem,
  onClearCart
}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[$,]/g, '')),
    0
  );

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 22px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.75))',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      boxShadow: '0 10px 40px rgba(0,0,0,0.10)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(198,146,30,0.18)',
      flexWrap: 'wrap',
      gap: '12px'
    }}>

      {/* LINHA DOURADA */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #c6921e, transparent)',
        opacity: 0.6
      }} />

      {/* LOGO */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '48px',
              transition: 'transform 0.35s ease, filter 0.35s ease',
              filter: 'contrast(1.05) saturate(1.05)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.06)';
              e.currentTarget.style.filter = 'contrast(1.1) saturate(1.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'contrast(1.05) saturate(1.05)';
            }}
          />
        </a>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: '10px 16px',
          borderRadius: '999px',
          border: '1px solid rgba(198,146,30,0.2)',
          width: 'clamp(160px, 28vw, 260px)',
          fontSize: '13px',
          outline: 'none',
          background: 'rgba(255,255,255,0.6)',
          boxShadow: 'inset 0 1px 8px rgba(0,0,0,0.04)',
          transition: 'all 0.3s ease'
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = '0 0 0 4px rgba(198,146,30,0.18)';
          e.target.style.border = '1px solid #c6921e';
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = 'inset 0 1px 8px rgba(0,0,0,0.04)';
          e.target.style.border = '1px solid rgba(198,146,30,0.2)';
        }}
      />

      {/* CATEGORIAS */}
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        {["Todos", "Vestido", "Noiva"].map(cat => (
          <button
            key={cat}
            onClick={() => onCategorySelect(cat)}
            style={{
              padding: '7px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'rgba(255,255,255,0.7)',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
              backdropFilter: 'blur(8px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#111';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.letterSpacing = '0.3px';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.letterSpacing = '0px';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARRINHO */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        position: 'relative'
      }}>

        <span
          onClick={() => setCartOpen(!cartOpen)}
          style={{
            cursor: 'pointer',
            fontSize: '22px',
            position: 'relative',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          🛒

          {cartItems.length > 0 && (
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-8px',
              background: 'linear-gradient(135deg,#ff3b30,#ff5e57)',
              color: '#fff',
              fontSize: '10px',
              borderRadius: '50%',
              padding: '3px 6px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(255,59,48,0.3)'
            }}>
              {cartItems.length}
            </span>
          )}

          {cartOpen && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '42px',
              width: 'clamp(240px, 85vw, 320px)',
              maxHeight: '70vh',
              overflowY: 'auto',
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
              padding: '14px',
              border: '1px solid rgba(198,146,30,0.25)',
              zIndex: 9999,
              animation: 'fadeIn 0.25s ease'
            }}>

              {/* FECHAR */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '8px'
              }}>
                <span
                  onClick={() => setCartOpen(false)}
                  style={{
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: 'bold'
                  }}
                >
                  ✕
                </span>
              </div>

              {/* ITENS */}
              {cartItems.length === 0 ? (
                <span style={{ fontSize: '13px' }}>Carrinho vazio</span>
              ) : (
                <>
                  {cartItems.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      padding: '10px',
                      borderRadius: '10px',
                      background: 'rgba(250,250,250,0.85)'
                    }}>
                      <img src={item.img} style={{ width: '38px', borderRadius: '8px' }} />
                      <span style={{ flex: 1, fontSize: '13px' }}>{item.name}</span>
                      <span style={{ fontSize: '12px', fontWeight: 500 }}>{item.price}</span>

                      <button
                        onClick={() => onRemoveItem(index)}
                        style={{
                          background: 'linear-gradient(135deg,#ff3b30,#ff5e57)',
                          border: 'none',
                          color: '#fff',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          cursor: 'pointer'
                        }}
                      >
                        x
                      </button>
                    </div>
                  ))}

                  {/* TOTAL */}
                  <div style={{
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    paddingTop: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>

                  {/* LIMPAR */}
                  <button
                    onClick={onClearCart}
                    style={{
                      width: '100%',
                      marginTop: '10px',
                      padding: '10px',
                      borderRadius: '10px',
                      border: 'none',
                      background: 'linear-gradient(135deg,#ff3b30,#ff5e57)',
                      color: '#fff',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Limpar
                  </button>

                  {/* FINALIZAR */}
                  <button
                    onClick={() => navigate("/checkout")}
                    style={{
                      width: '100%',
                      marginTop: '8px',
                      padding: '10px',
                      borderRadius: '10px',
                      border: 'none',
                      background: 'linear-gradient(135deg,#0071e3,#005bb5)',
                      color: '#fff',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 10px 25px rgba(0,113,227,0.25)'
                    }}
                  >
                    Finalizar
                  </button>

                </>
              )}

            </div>
          )}

        </span>

      </div>

      {/* ANIMAÇÃO */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </header>
  );
}