import { useContext, useState } from "react"
import { MetContext } from "./context/metContext";

export const TarggetMet = ( {met:{ image, name, price} } ) => {

    const [clase, setClase] = useState(['targgetMet']);
    const onSelect = (event) => {
        setClase([...clase, 'targgetMetSelect'])
        // console.log(clase)
    }

    const { setscreenMet, setNoteProduct } = useContext( MetContext );

    const hanldeSelect = () => {
        onSelect();
        setscreenMet(false);
        setNoteProduct({
            name,
            price,
            des: 0
        })
    }

    return (
        <div key={name} className={`${clase[0]} ${clase[1]} `} 
            onClick={ hanldeSelect } >
            <img src={image} alt={name} />
            <h2> { name } </h2>
            <p> ${ price } <span> x kg </span> </p>
        </div>
    )
}
