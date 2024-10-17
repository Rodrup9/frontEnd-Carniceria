import { useEffect } from "react";
import { separatePoint } from "../helpers"
import { useNewSeparate } from "../hooks";

export const OutputWeight = ({ num }) => {
    const { first, second } = separatePoint( num );
    const { firstState, secondState, onNewValue } = useNewSeparate( first, second );
    useEffect(() => {
        onNewValue(num);
    }, [num])
    
    return (
        <div className="outputWeightBody outputBody">
            <div className="outputWeight output">
                <h2>Peso</h2>
                <div className="">
                    <h1> { firstState } </h1>
                    <h3> . <span> { secondState } </span> kg </h3>
                </div>
            
            </div>
            <hr />
        </div>
    )
}
