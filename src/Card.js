// src/Card.js
import React from 'react';

const Card = ({ item }) => {
  const {
    id,
    name,
    data = {},
  } = item;

  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <div style={styles.data}>
        <p>Color: {data?.color || data?.Color || ''}</p>
        <p>Capacity: {data?.capacity || data?.Capacity || data?.['capacity GB'] || ''}</p>
        <p>Price: {data?.price || data?.Price || ''}</p>
        <p>Generation: {data?.generation || data?.Generation || ''}</p>
        <p>Year: {data?.year || ''}</p>
        <p>CPU Model: {data?.['CPU model'] || ''}</p>
        <p>Hard Disk Size: {data?.['Hard disk size'] || ''}</p>
        <p>Strap Colour: {data?.['Strap Colour'] || ''}</p>
        <p>Case Size: {data?.['Case Size'] || ''}</p>
        <p>Description: {data?.Description || ''}</p>
        <p>Screen Size: {data?.['Screen size'] || ''}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '16px',
    margin: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
  },
  data: {
    marginTop: '12px',
  },
};

export default Card;
