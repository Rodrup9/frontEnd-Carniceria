import { BoxMain } from "./BoxMain";
import { NavMain } from "./NavMain";
import { useContext, useState } from "react";
import { ContentMet } from "./ContentMet";
import { mets } from "../mets";
import { MetContext } from "./context/metContext";

export const MainMain = () => {

    const { screenMet } = useContext( MetContext )

    return (
        <>

            {
                screenMet &&  <ContentMet mets={ mets } />
            }

            <NavMain />
            <BoxMain />
        </>
    )
}
