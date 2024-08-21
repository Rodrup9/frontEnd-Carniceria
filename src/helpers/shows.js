import { mets, metsPiece } from "../mets"

export const shows = () => {

    // const kg = await fetch();
    // const piece = await fetch();

    const productKg = mets;

    const productPiece = metsPiece;

    return {
        productKg,
        productPiece,
    }

}
