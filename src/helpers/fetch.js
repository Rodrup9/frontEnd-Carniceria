import { useState, useEffect, useRef, useContext } from 'react';
import io from 'socket.io-client';
import { MetContext } from '../components/context/metContext';

export const PesoComponent = () => {
  const { setAmount } = useContext(MetContext);
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
      console.log(data);
      setAmount(data.weight);
    });

    socketRef.current.on('disconnect', () => {
      console.log('Desconectado del servidor WebSocket');
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) socketRef.current.close();
    };
  }, [setAmount]);

  return null;
};