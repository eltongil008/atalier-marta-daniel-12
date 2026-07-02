import { useLocation } from "react-router-dom";

export default function Checkout({ cartItems = [] }) {

  const location = useLocation();
  const items = location.state?.items || cartItems;

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[$,]/g, '')),
    0
  );

  return (
    <div style={{
      padding: 'clamp(15px, 3vw, 30px)',
      maxWidth: '780px',
      margin: 'auto',
      background: '#f5f5f7',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>

      {/* TÍTULO */}
      <h2 style={{
        textAlign: 'center',
        fontSize: 'clamp(18px, 2.5vw, 24px)',
        fontWeight: '600',
        marginBottom: '25px',
        color: '#1d1d1f'
      }}>
        Finalizar Compra
      </h2>

      {/* PRODUTOS */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '18px',
            background: '#fff',
            padding: '16px',
            borderRadius: '18px',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            flexWrap: 'wrap'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.01)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          >

            {/* IMAGEM RESPONSIVA */}
            <div style={{
              background: '#fafafa',
              borderRadius: '14px',
              padding: '10px',
              flex: '0 0 auto'
            }}>
              <img 
                src={item.img} 
                alt={item.name}
                style={{ 
                  width: 'clamp(70px, 15vw, 100px)',
                  height: 'clamp(70px, 15vw, 100px)',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
                }} 
              />
            </div>

            {/* INFO RESPONSIVA */}
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h4 style={{
                margin: 0,
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '600',
                color: '#1d1d1f'
              }}>
                {item.name}
              </h4>

              <p style={{
                margin: '5px 0',
                fontSize: '12px',
                color: '#6e6e73'
              }}>
                {item.description}
              </p>

              <strong style={{
                fontSize: 'clamp(14px, 2vw, 16px)',
                color: '#C6921E'
              }}>
                {item.price}
              </strong>
            </div>

          </div>
        ))}
      </div>

      {/* TOTAL PREMIUM */}
      <div style={{
        marginTop: '25px',
        padding: '18px',
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#1d1d1f'
        }}>
          Total
        </span>

        <span style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#000'
        }}>
          ${total.toFixed(2)}
        </span>
      </div>

      {/* BOTÃO PREMIUM RESPONSIVO */}
      <button 
        onClick={() => {
          const msg = items.map(i => `${i.name} - ${i.price}`).join('%0A');
          window.open(`https://wa.me/2588XXXXXXX?text=${msg}`, "_blank");
        }}
        style={{
          marginTop: '25px',
          width: '100%',
          padding: '16px',
          background: 'linear-gradient(135deg, #0071e3, #005bb5)',
          color: '#fff',
          border: 'none',
          borderRadius: '14px',
          fontSize: 'clamp(14px, 2vw, 16px)',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 25px rgba(0,113,227,0.4)'
        }}
        onMouseEnter={e => {
          e.target.style.transform = "scale(1.02)";
          e.target.style.boxShadow = "0 15px 35px rgba(0,113,227,0.6)";
        }}
        onMouseLeave={e => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 10px 25px rgba(0,113,227,0.4)";
        }}
      >
        Finalizar via WhatsApp
      </button>

    </div>
  );
}