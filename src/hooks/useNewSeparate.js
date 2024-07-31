import { useEffect, useState } from "react"
import { separatePoint } from "../helpers";

export const useNewSeparate = ( first = '0', second = '00' ) => {
    const [firstState, setFirst] = useState(first);
    const [secondState, setSecond] = useState(second);
    
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
