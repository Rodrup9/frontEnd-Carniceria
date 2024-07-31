import { useNote } from "../hooks"
import {  MinBoxProductAdded, NoteMet } from "./"

export const BoxMain = ({products, note, handleNote}) => {

    return (
        <div className="boxMain">

            <NoteMet note={ note } handleNote={ handleNote } />
            
            <div className="boxMainNotes">
                { products.map( product => (
                    <MinBoxProductAdded key={ Date() * 3 } {...product} />
                ) ) }
            </div>
        </div>
    )
}
