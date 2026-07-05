import { useLocation } from "react-router-dom";

export default function Checkout({ cartItems = [] }) {

  const location = useLocation();

  const items = location.state?.items || cartItems || [];

  const total = items.reduce((sum, item) => {
    const price = item.price ? parseFloat(item.price.replace(/[$,]/g, '')) : 0;
    return sum + price;
  }, 0);

  return (
    <div style={{
      padding: '30px',
      maxWidth: '780px',
      margin: 'auto',
      background: '#f5f5f7',
      minHeight: '100vh',
      fontFamily: 'Arial'
    }}>

      <h2 style={{ textAlign: 'center' }}>
        Finalizar Compra
      </h2>

      {/* PRODUTOS */}
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '15px',
          background: '#fff',
          padding: '15px',
          borderRadius: '12px',
          marginBottom: '10px',
          alignItems: 'center'
        }}>

          <img src={item.img} style={{
            width: '80px',
            borderRadius: '10px'
          }} />

          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>

            <strong style={{ color: '#C6921E' }}>
              {item.price || "0"}
            </strong>
          </div>

        </div>
      ))}

      {/* TOTAL */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        background: '#fff',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <strong>Total</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>

      {/* WHATSAPP */}
      <button
        onClick={() => {
          const msg = items.map(i =>
            `${i.name} - ${i.price || "0"}`
          ).join('%0A');

          window.open(
            `https://wa.me/258848467580?text=${msg}`,
            "_blank"
          );
        }}
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '15px',
          background: '#0071e3',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        Finalizar via WhatsApp
      </button>

    </div>
  );
}