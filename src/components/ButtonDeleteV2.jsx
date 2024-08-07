import { useContext } from "react";
import { MetContext } from "./context/metContext";
import { useAlerts } from "../hooks/useAlerts";

export const ButtonDeleteV2 = ({label}) => {

  const { setNoteProduct } = useContext( MetContext );

  return (
    <button className={`buttonDeleteV2 btn ${label && 'btn-text'}`} onClick={ () => setNoteProduct({ id: '', name: '', des: 0, price: 0.00 })} >
        <i className='bx bx-trash' ></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
