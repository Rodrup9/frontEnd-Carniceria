import { useContext } from "react"
import {  MinBoxProductAdded, NoteMet } from "./"
import { MetContext } from "./context/metContext"

export const BoxMain = () => {

    const { products } = useContext( MetContext );

    return (
        <div className="boxMain">

            <NoteMet />
            
            <div className="boxMainNotes">
                { 
                    products.map( product => <MinBoxProductAdded key={ product.id} data={product} /> ) 
                }
            </div>
        </div>
    )
}
