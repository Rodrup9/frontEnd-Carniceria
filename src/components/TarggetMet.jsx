import { useContext, useState } from "react"
import { MetContext } from "./context/metContext";

export const TarggetMet = ( {met:{ id, imagen, nombre, precio_de_venta, filter, peso} } ) => {

    const [clase, setClase] = useState(['targgetMet']);
    const onSelect = (event) => {
        setClase([...clase, 'targgetMetSelect'])
        // console.log(clase)
    }

    const { setscreenMet, setNoteProduct, new_product, setNewProduct, setProducts, products, setTotal, total } = useContext( MetContext );

    const hanldeSelect = () => {
        onSelect();
        setscreenMet(false);
        if (!peso) {
            
            setNoteProduct({
                nombre,
                price: precio_de_venta,
                des: 0,
                id,
            })
            
            setNewProduct(new_product + 1)
        } else if (peso){
            setProducts([...products,{
                name: nombre,
                cost: precio_de_venta * peso,
                amount: peso,
                id,
                producto_id_cesta: new Date().getTime()

            } ])
            const newTotal = total + (precio_de_venta*peso)
            setTotal( newTotal );

        }
    }

    return (
        <div key={nombre} className={`${clase[0]} ${clase[1]} `} 
            onClick={ hanldeSelect } >
            <img src={imagen} alt={nombre} />
            <h2> { nombre } </h2>
            <p> ${ parseFloat(peso ? precio_de_venta * peso : precio_de_venta) } { peso && (<span> <br /> <strong> {peso} kg </strong>  </span>)} </p>
        </div>
    )
}
