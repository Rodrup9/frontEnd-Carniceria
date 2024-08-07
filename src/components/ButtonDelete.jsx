import { useContext } from "react"
import { MetContext } from "./context/metContext"

export const ButtonDelete = ({label}) => {

  const { setProducts } = useContext( MetContext );

  return (
    <button className={`buttonDelete btn ${label && 'btn-text'}`} onClick={ () => setProducts([]) } >
        <i className='bx bx-trash' ></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
