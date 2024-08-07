import  { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

export const PesoComponent = () => {
  const [peso, setPeso] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Reemplaza '192.168.0.229' con la dirección IP de tu servidor WebSocket
    socketRef.current = io('http://192.168.0.229:8765', {
      transports: ['websocket', 'polling']
    });

    socketRef.current.on('connect', () => {
      console.log('Conectado al servidor WebSocket');
    });

    socketRef.current.on('message', (data) => {
      setPeso(data);
    });

    socketRef.current.on('disconnect', () => {
      console.log('Desconectado del servidor WebSocket');
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return (
    <h1>{JSON.stringify(peso)}</h1>
  );
};

