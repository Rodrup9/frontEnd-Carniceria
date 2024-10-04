import React, { useState } from 'react';

export const ReconnectButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para manejar la reconexión y reinicio del servicio Python
  const handleReconnect = async () => {
    setLoading(true);
    setError(null);

    try {
      // Hacer petición al backend para detener el servicio de Python
      const response1 = await fetch('http://127.0.0.1:8765/', {
        method: 'POST',
      });
      if (!response1.ok) {
        throw new Error('Error al detener el servicio de Python');
      }
      console.log('Servicio de Python detenido.');

      // Hacer petición para reiniciar el servicio de Python
      const response2 = await fetch('http://127.0.0.1:8765/', {
        method: 'POST',
      });
      if (!response2.ok) {
        throw new Error('Error al reiniciar el servicio de Python');
      }
      console.log('Servicio de Python reiniciado.');

      alert('Reconexión exitosa, servicio Python reiniciado');
    } catch (err) {
      console.error('Error al reconectar:', err);
      setError('Error al reconectar, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Botón pequeño amarillo */}
      <button
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          padding: '5px 10px',
          fontSize: '12px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleReconnect}
        disabled={loading}
      >
        {loading ? 'Reconectando...' : 'Reconectar'}
      </button>

      {/* Mostrar error si ocurre */}
      {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
    </div>
  );
};