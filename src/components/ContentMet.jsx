import { useState } from "react";
import { TarggetMet, Seeker, CloseX } from './';

export const ContentMet = ({mets, handleShowMets, handleNote}) => {
    // const [first, setfirst] = useState(second)
    
  return (
    <div className="contentMetNone">

        <div className="contentMet">
            <div className="contentMetHeader">
                <Seeker />
                <CloseX handleShowMets={ handleShowMets } />
            </div>
            <div className="mets">
                { mets.map(met => <TarggetMet handleNote={ handleNote } handleShowMets={ handleShowMets } met={met} />) }
            </div>
        </div>
    </div>
  )
}
