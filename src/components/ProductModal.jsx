import React from "react";
import './ProductModal.css'; // opcional, você pode criar CSS próprio

export default function ProductModal({ product, onClose, onAddToCart }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>×</button>

        <img src={product.img} alt={product.name} className="modal-image" />

        <h2>{product.name}</h2>
        <small>{product.category}</small>
        <p>{product.description}</p>
        <strong>{product.price}</strong>

        <div className="modal-buttons">
          
          {/* ✔ ÚNICO BOTÃO */}
          <button 
            className="add-cart" 
            onClick={() => onAddToCart(product)}
          >
            Adicionar ao Carrinho
          </button>

        </div>
      </div>
    </div>
  );
}