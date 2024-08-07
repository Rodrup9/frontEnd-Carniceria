import { useContext } from "react";
import { MetContext } from "./context/metContext";

export const ButtonConfirm = ({label}) => {

  const { setProducts, products, noteProduct, setNoteProduct, amount, setAmount, cost, setCost, setTotal, total } = useContext( MetContext );

  const onAddProduct = () => {
    setProducts([ { id: Date().getTime(), amount, cost, name: noteProduct.name }, ...products]);
    // setTotal( total + parseFloat(cost));
    setCost(0.00);
    setNoteProduct({ name: '', des: 0, price: 0.00 });
  }

  return (
    <button className={`buttonConfirm btn ${label && 'btn-text'}`} onClick={ onAddProduct } >
        <i className='bx bx-check-circle'></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
