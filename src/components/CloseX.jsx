import { useContext } from "react"
import { MetContext } from "./context/metContext"

export const CloseX = () => {

  const { setscreenMet } = useContext( MetContext );

  return (
    <button className="closeX" onClick={ () => setscreenMet(false) }>
        <i className='bx bx-x'></i>
    </button>
  )
}
