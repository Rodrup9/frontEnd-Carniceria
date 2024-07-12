import { useState } from "react"
import { TarggetMet } from "../targgetMet/TarggetMet";
import { Seeker } from "../seeker/Seeker";
import { CloseX } from "../closeX/CloseX";


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
                { mets.map(met => <TarggetMet met={met} />) }
            </div>
        </div>
    </div>
  )
}
