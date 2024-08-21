import { useEffect, useState } from "react"
import { separatePoint } from "../helpers";

export const useNewSeparate = () => {
    const [firstState, setFirst] = useState('0');
    const [secondState, setSecond] = useState('00');
    
    const onNewValue = ( num ) => {
        const { first, second } = separatePoint(num);
        setFirst(first);
        setSecond(second)
    }

  return {
    firstState,
    secondState,
    onNewValue,
  }
}
