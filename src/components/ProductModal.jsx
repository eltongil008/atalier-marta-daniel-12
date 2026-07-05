import React from "react";
import './ProductModal.css';

export default function ProductModal({ product, onClose, onAddToCart }) {

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        {/* BOTÃO X (FECHAR MODAL) */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        {/* IMAGEM */}
        <img
          src={product.img}
          alt={product.name}
          className="modal-image"
        />

        {/* INFO */}
        <h2>{product.name}</h2>
        <small>{product.category}</small>
        <p>{product.description}</p>

        <strong>{product.price}</strong>

        {/* BOTÕES */}
        <div className="modal-buttons">

          <button
            className="add-cart"
            onClick={() => onAddToCart?.(product)}
          >
            Adicionar ao Carrinho
          </button>

          <button className="modal-checkout">
            Checkout
          </button>

        </div>

      </div>
    </div>
  );
}