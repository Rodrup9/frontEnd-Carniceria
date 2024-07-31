import { useState } from "react"

export const TarggetMet = ( {met:{ image, name, price}, handleShowMets, handleNote } ) => {

    const [clase, setClase] = useState(['targgetMet']);
    const onSelect = (event) => {
        setClase([...clase, 'targgetMetSelect'])
        // console.log(clase)
    }

    const hanldeSelect = () => {
        onSelect();
        handleShowMets();
        handleNote(price, name);
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
