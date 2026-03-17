import React, { useState } from 'react';

// Level 3: Atoms
export const UIButton = ({ onClick, children, disabled, variant = 'primary' }) => (
  <button 
    onClick={onClick} 
    disabled={disabled}
    style={{
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      background: variant === 'primary' ? '#1877f2' : '#e4e6e9',
      color: variant === 'primary' ? 'white' : '#1c1e21',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontWeight: 'bold',
      transition: 'opacity 0.2s'
    }}
  >
    {children}
  </button>
);

export const StarRating = ({ rating }) => (
  <div style={{ color: '#ffc107', margin: '10px 0' }}>
    {'★'.repeat(Math.floor(rating))}
    {'☆'.repeat(5 - Math.floor(rating))}
    <span style={{ color: '#666', marginLeft: '5px' }}>({rating})</span>
  </div>
);

// Level 2: Composition
export const ProductDetails = ({ name, price, description, rating }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ margin: '0 0 10px 0' }}>{name}</h2>
    <p style={{ color: '#666', fontSize: '0.9rem' }}>{description}</p>
    <StarRating rating={rating} />
    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${price}</div>
  </div>
);

export const ProductActions = ({ quantity, onIncrement, onDecrement }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <UIButton onClick={onDecrement} variant="secondary" disabled={quantity <= 1}>-</UIButton>
      <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 'bold' }}>{quantity}</span>
      <UIButton onClick={onIncrement} variant="secondary">+</UIButton>
    </div>
    <UIButton onClick={() => alert('Додано до кошика')}>В кошик</UIButton>
  </div>
);

// Level 1: Container (Smart)
const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Бездротові навушники",
    price: 99.99,
    description: "Високоякісний звук та активне шумозаглушення.",
    rating: 4.5
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div style={{ 
      maxWidth: '350px', 
      padding: '20px', 
      background: '#fff', 
      borderRadius: '15px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      margin: '20px auto'
    }}>
      <ProductDetails {...product} />
      <ProductActions 
        quantity={quantity} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement} 
      />
    </div>
  );
};

export default ProductCard;
