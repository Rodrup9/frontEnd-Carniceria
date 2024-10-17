import { mets, metsPiece } from "../mets"

export const shows = () => {
    const productKg = mets;
    const productPiece = metsPiece;

    const mostrarPeso = () => {
        // Lógica para mostrar el peso
        console.log('Mostrando el peso...');
    };

    return {
        productKg,
        productPiece,
        mostrarPeso,
    };
};