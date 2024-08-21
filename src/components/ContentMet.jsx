import { useContext, useEffect, useState } from "react";
import { TarggetMet, Seeker, CloseX, ButtonDouble } from './';
import { MetContext } from "./context/metContext";

export const ContentMet = () => {
    // const [first, setfirst] = useState(second)
    const { kg, piece, filter, show, setShow } = useContext( MetContext );
    console.log(kg)

    useEffect(() => {

        if ( filter === 'one' ) {
            setShow(kg)
        } else if ( filter === 'two' ) {
            setShow(piece)
        } else {
            setShow(kg)
        }
        
    }, [filter])
    
    
    return (
        <div className="contentMetNone">

            <div className="contentMet">
                <div className="contentMetHeader">
                    {/* <Seeker /> */}
                    <div className="contentMetoptions">
                        <ButtonDouble />
                    </div>
                    <CloseX />
                </div>
                <div className="mets">
                    { show.map( item => <TarggetMet key={ item.id } met={item} />) }
                </div>
            </div>
        </div>
    )
}
