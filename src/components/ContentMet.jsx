import { useState } from "react";
import { TarggetMet, Seeker, CloseX } from './';

export const ContentMet = ({mets}) => {
    // const [first, setfirst] = useState(second)
    
  return (
    <div className="contentMetNone">

        <div className="contentMet">
            <div className="contentMetHeader">
                <Seeker />
                <CloseX />
            </div>
            <div className="mets">
                { mets.map(met => <TarggetMet key={ met.id } met={met} />) }
            </div>
        </div>
    </div>
  )
}
