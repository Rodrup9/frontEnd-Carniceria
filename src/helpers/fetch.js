import { useState, useEffect, useRef, useContext } from 'react';
import io from 'socket.io-client';
import { MetContext } from '../components/context/metContext';

export const PesoComponent = () => {
  const { setAmount } = useContext(MetContext);
  const socketRef = useRef(null);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const maxReconnectAttempts = 5;

  useEffect(() => {
    const connectSocket = () => {
      try {
        socketRef.current = io('http://127.0.0.1:8765', {
          transports: ['websocket', 'polling'],
          reconnection: false, // Disable default reconnection to handle manually
        });

        socketRef.current.on('connect', () => {
          console.log('Conectado al servidor WebSocket');
          setReconnectAttempts(0); // Reset attempts on successful connection
        });

        socketRef.current.on('message', (data) => {
          console.log(data);
          setAmount(data.weight);
        });

        socketRef.current.on('disconnect', () => {
          console.log('Desconectado del servidor WebSocket');
          attemptReconnect();
        });

        socketRef.current.on('connect_error', (error) => {
          console.error('Error al conectar con el servidor WebSocket:', error.message);
          attemptReconnect();
        });

        socketRef.current.on('reconnect_failed', () => {
          console.warn('Reintento de conexión fallido');
          attemptReconnect();
        });
      } catch (error) {
        console.error('Error al inicializar WebSocket:', error);
        attemptReconnect();
      }
    };

    const attemptReconnect = () => {
      if (reconnectAttempts < maxReconnectAttempts && !socketRef.current?.connected) {
        console.log(`Intentando reconectar (${reconnectAttempts + 1}/${maxReconnectAttempts})...`);
        setTimeout(() => {
          setReconnectAttempts(prev => prev + 1);
          connectSocket();
        }, 3000); // Espera 3 segundos antes de intentar reconectar
      } else {
        console.error('Se alcanzó el número máximo de intentos de reconexión o ya conectado');
      }
    };
    connectSocket();

    // Cleanup on unmount
    return () => {
      if (socketRef.current) socketRef.current.close();
    };
  }, [setAmount, reconnectAttempts]);

  return null;
};
