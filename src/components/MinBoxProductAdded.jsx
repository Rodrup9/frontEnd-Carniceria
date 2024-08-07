import { useContext } from "react"
import { MetContext } from "./context/metContext";

export const MinBoxProductAdded = ({ data }) => {

  const { setProducts, products, setTotal, total } = useContext( MetContext );

  const onDelete = () => {
    const res = products.filter( product => product?.id !== data?.id );
    
    setTotal( total - parseFloat(data?.cost));

    setProducts( res );
  }

  return (
    <div className="minBoxProductAdded">
        <div>
            <h3> { data?.name} </h3>
            <button type="button" onClick={ () => onDelete()} >
                <i className='bx bx-trash' ></i>
            </button>
        </div>
        <div>
            <p> { data?.amount }kg </p>
            <p> ${ data?.cost} </p>
        </div>
    </div>
  )
}
