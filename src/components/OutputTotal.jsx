import { useContext, useEffect } from "react";
import { separatePoint } from "../helpers"
import { useNewSeparate } from "../hooks";
import { MetContext } from "./context/metContext";

export const OutputTotal = () => {

    const { total } = useContext( MetContext );
    const { firstState, secondState, onNewValue } = useNewSeparate();

    useEffect(() => {
        localStorage.setItem('total', total);
        onNewValue(parseFloat(total));
    }, [total])

    return (
        <div className="outputTotalBody">
            <div className="outputTotal output">
                <h2>Total</h2>
                <div className="">
                    <h1 className="outputCostSpan"> <span>$</span>{ firstState } </h1>
                    <h3> . <span> { secondState } </span></h3>
                </div>
            </div>
        </div>
  )
}
