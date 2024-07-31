import { useEffect, useState } from "react";
import { ButtonConfirm, ButtonDeleteV2, OutputCost, OutputDetails, OutputTotal, OutputWeight } from './';

const cal = (amount, price) => {
    return (amount * price).toFixed(2);
}

export const NoteMet = ({ note }) => {

    const [order, setOrder] = useState(78298)
    const [amount, setAmount] = useState(24.45);
    const [cost, setCost] = useState(0.00);
    // const [order, setOrder] = useState();
    const [total, setTotal] = useState();

    useEffect(() => {
        // console.log(cal(amount, note.price));
        setCost( cal(amount, note.price) );
        console.log(cost)
    }, [note])
    

    return (
        <div className="noteMet">

            <OutputWeight num={ amount } />
            <OutputCost cost={ cost } />
            <OutputDetails note={ note } />

            <OutputTotal total={ total } />

            <div className="noteMetOrder">
                <p> Orden: { order } </p>
            </div>

            <div className="noteMetButtons">
                <ButtonDeleteV2 label={'Limpiar'} />  
                <ButtonConfirm label={'Confirmar'} />
            </div>
        </div>
    )
}
