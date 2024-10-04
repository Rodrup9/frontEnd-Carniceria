import { useContext, useEffect, useState } from "react";
import { ButtonConfirm, ButtonDeleteV2, OutputCost, OutputDetails, OutputTotal, OutputWeight } from './';
import { MetContext } from "./context/metContext";
import { PesoComponent } from "../helpers";
import { ReconnectButton } from './reconectar'
const cal = (amount, price) => {
    return (amount * price).toFixed(2);
}

export const NoteMet = () => {
    const { noteProduct, total, amount, cost, setCost } = useContext(MetContext);

    useEffect(() => {
        setCost(cal(amount, noteProduct.price));
    }, [noteProduct, amount, setCost]);

    return (
        <div className="noteMet">

            <PesoComponent />
            <OutputWeight num={amount} />
            <OutputCost cost={cost} />
            <OutputDetails note={noteProduct} />
            <OutputTotal total={total} />
            <div className="noteMetOrder">
                <p> Orden: { 'order' } </p>
            </div>
            <div className="noteMetButtons">
                <ButtonDeleteV2 label={'Limpiar'} />
                <ButtonConfirm label={'Confirmar'} />
            </div>
        </div>
    );
};