// src/Card.js
import React from 'react';

const Card = ({ item }) => {
  const {
    id,
    name,
    data,
  } = item;

  const properties = [
    { label: 'Color', key: 'color' },
    { label: 'Capacity', key: 'capacity' },
    { label: 'Capacity', key: 'Capacity' },
    { label: 'Capacity', key: 'capacity GB' },
    { label: 'Price', key: 'price' },
    { label: 'Price', key: 'Price' },
    { label: 'Generation', key: 'generation' },
    { label: 'Generation', key: 'Generation' },
    { label: 'Year', key: 'year' },
    { label: 'CPU Model', key: 'CPU model' },
    { label: 'Hard Disk Size', key: 'Hard disk size' },
    { label: 'Strap Colour', key: 'Strap Colour' },
    { label: 'Case Size', key: 'Case Size' },
    { label: 'Description', key: 'Description' },
    { label: 'Screen Size', key: 'Screen size' },
  ];

  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <div style={styles.data}>
        {properties.map(({ label, key }) => (
          <p key={key}>
            {label}: {data ? (data[key] || '') : ''}
          </p>
        ))}
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
