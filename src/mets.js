import axios from 'axios';

// Obtener los datos de los productos desde la API
const data = await axios.get('http://127.0.0.1:8000/api/producto');
// const data = await axios.get('http://192.168.10.113:8000/api/producto');

// Lista de todos los productos
export const mets = data.data.data;

// Filtrar los productos que pueden ser vendidos por piezas
export const Piece = mets.filter(product => product.piezas === true);

// Array donde se añadirán los productos duplicados con diferentes pesos
const metsPiece = [];

// Iterar sobre cada producto en `metsPiece` y añadirlo al array `piezas` dos veces con diferentes pesos
Piece.forEach(element => {
    const productoConPeso1 = { ...element, peso: 1 };
    const productoConPeso05 = { ...element, peso: 0.5 };

    metsPiece.push(productoConPeso1, productoConPeso05);

});

export { metsPiece };
