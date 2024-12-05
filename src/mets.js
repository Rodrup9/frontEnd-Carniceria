import axios from 'axios';
import { supabase } from './connection';

// Obtener los datos de los productos desde la API
const fetchProducts = async () => {
    try {
        const {data, error} = await supabase.from('productos').select();
        console.log(data);
        
        const mets = data;
        // const response = await axios.get('http://192.168.0.101:8000/api/producto');
        // const mets = response.data.data;

        // // Actualizar la URL de las imágenes
        // mets.forEach(product => {
        //     product.imagen = product.imagen.replace('127.0.0.1', '192.168.0.101');
        // });

        // Filtrar los productos que pueden ser vendidos por piezas
        const Piece = mets.filter(product => product.piezas === true);

        // Array donde se añadirán los productos duplicados con diferentes pesos
        const metsPiece = [];

        // Iterar sobre los productos filtrados para añadir pesos
        Piece.forEach(element => {
            const productoConPeso1 = { ...element, peso: 1 };
            const productoConPeso05 = { ...element, peso: 0.5 };
            metsPiece.push(productoConPeso1, productoConPeso05);
        });

        console.log('Productos:', mets);
        console.log('Productos por piezas:', metsPiece);

        // Exportar los datos procesados
        return { mets, metsPiece };
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return { mets: [], metsPiece: [] };
    }
};

// Exportar los datos obtenidos
const { mets, metsPiece } = await fetchProducts();
export { mets, metsPiece };