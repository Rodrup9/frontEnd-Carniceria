import { useContext, useRef, useState } from "react"
import { MetContext } from "./context/metContext";

export const ButtonDouble = () => {

    const { setFilter } = useContext( MetContext )

    const [activeSpan, setActiveSpan] = useState('one');

    const handleClick = (span) => {
        setActiveSpan(span);
        setFilter(span);
    };

    return (
        <button className="btn btn-text buttonDouble" type="button">
            <span onClick={ () => handleClick('one') } className={`buttonDoubleBtn buttonDoubleOne ${ activeSpan === 'one' ? 'buttonDoubleActive' : '' }`}>
                Kg
            </span>
            <span onClick={ () => handleClick('two') } className={`buttonDoubleBtn buttonDoubleOne ${ activeSpan === 'two' ? 'buttonDoubleActive' : '' }`}>
                Pieza
            </span>
        </button>
    )
}
