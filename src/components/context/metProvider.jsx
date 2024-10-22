import { useState } from "react"
import { MetContext } from "./metContext";
import { shows } from "../../helpers";

const init = () => {
    const initProducts = localStorage.getItem('products');

    const initTotal = localStorage.getItem('total');

    const returnProducts = initProducts ? JSON.parse(initProducts) : [];

    const returnTotal = initTotal ? initTotal : 0.00;

    return {
        returnProducts,
        returnTotal,
    }
};

export const MetProvider = ({ children }) => {

    const { productKg, productPiece } = shows();

    const [screenMet, setscreenMet] = useState(false);

    const [products, setProducts] = useState(init().returnProducts);

    const [noteProduct, setNoteProduct] = useState({ id: '', nombre: '', des: 0, price: 0.00 });

    const [amount, setAmount] = useState(15.04);

    const [cost, setCost] = useState(0.00);

    const [total, setTotal] = useState(init().returnTotal);

    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState([]);

    const [kg, setKg] = useState(productKg);

    const [piece, setPiece] = useState(productPiece);

    const [show, setShow] = useState(kg);

    const [filter, setFilter] = useState('one');

    return (
        <MetContext.Provider value={{ filter, setFilter, show, setShow, piece, setPiece, kg, setKg, alert, setAlert, loading, setLoading, screenMet, setscreenMet, products, setProducts, noteProduct, setNoteProduct, total, setTotal, amount, setAmount, cost, setCost }}>
            { children }
        </MetContext.Provider>
    )
}
