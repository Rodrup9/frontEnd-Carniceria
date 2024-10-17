import { useContext, useState } from "react"
import { MetContext } from "./context/metContext";

export const TarggetMet = ( {met:{ id, imagen, nombre, precio_de_venta} } ) => {

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
            nombre,
            precio_de_venta,
            des: 0,
            id,
        })
    }

    return (
        <div key={nombre} className={`${clase[0]} ${clase[1]} `} 
            onClick={ hanldeSelect } >
            <img src={imagen} alt={nombre} />
            <h2> { nombre } </h2>
            <p> ${ parseFloat(precio_de_venta) } <span> x kg </span> </p>
        </div>
    )
}
