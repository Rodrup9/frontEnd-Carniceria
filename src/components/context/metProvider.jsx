import { useState } from "react"
import { MetContext } from "./metContext";

export const MetProvider = ({ children }) => {

    const [screenMet, setscreenMet] = useState(false);

    const [products, setProducts] = useState([]);

    const [noteProduct, setNoteProduct] = useState({ id: '', name: '', des: 0, price: 0.00 });

    const [amount, setAmount] = useState(15.00);

    const [cost, setCost] = useState(0.00);

    const [total, setTotal] = useState(0.00);

    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState([])

    return (
        <MetContext.Provider value={{ alert, setAlert, loading, setLoading, screenMet, setscreenMet, products, setProducts, noteProduct, setNoteProduct, total, setTotal, amount, setAmount, cost, setCost }}>
            { children }
        </MetContext.Provider>
    )
}
