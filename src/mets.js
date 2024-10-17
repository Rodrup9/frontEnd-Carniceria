import axios from 'axios';

// Obtener los datos de los productos desde la API
const data = await axios.get('http://192.168.10.113:8000/api/producto');
console.log('hdjhdndbd', data.data.data);

// Lista de todos los productos
export const mets = data.data.data;

// Filtrar los productos que pueden ser vendidos por piezas
export const metsPiece = mets.filter(product => product.piezas === true);