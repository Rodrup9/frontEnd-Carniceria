import { separatePoint } from "../helpers"
import { useNewSeparate } from "../hooks";

export const OutputTotal = ({total = 0}) => {

    const { first, second } = separatePoint(total);
    const { firstState, secondState, onNewValue } = useNewSeparate(first, second);

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
