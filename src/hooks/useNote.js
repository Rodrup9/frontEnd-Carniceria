import { useState } from "react"

export const useNote = () => {

    const [note, setNote] = useState({ price: 0, name: '', des: 0 })

    const handleNote = ( price, name, des = 0 ) => {
        setNote({
            ...note,
            price,
            name,
            des, 
        })
    }

    return (
        {
            note,
            handleNote,
        }
    )
}
