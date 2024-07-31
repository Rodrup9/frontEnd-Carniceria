import { useState } from "react"

export const toggleBoxMet = () => {

    const [ showMets, setShowMets ] = useState(false);

    const handleShowMets = () => {
        setShowMets( !showMets );
    }

    return {
        showMets,
        handleShowMets,
    }

}