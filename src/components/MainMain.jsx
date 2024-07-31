import { BoxMain } from "./BoxMain";
import { NavMain } from "./NavMain";
import { toggleBoxMet } from "../helpers";
import { useState } from "react";
import { ContentMet } from "./ContentMet";
import { mets } from "../mets";
import { useNote } from "../hooks";

export const MainMain = () => {

    const [products, setProducts] = useState([]);

    const { showMets, handleShowMets } = toggleBoxMet();

    const { note, handleNote } = useNote();

    return (
        <>

            {
                showMets &&  <ContentMet handleNote={ handleNote } handleShowMets={ handleShowMets } mets={ mets } />
            }

            <NavMain handleShowMets={ handleShowMets } />
            <BoxMain products={ products } note={ note } handleNote={ handleNote } />
        </>
    )
}
