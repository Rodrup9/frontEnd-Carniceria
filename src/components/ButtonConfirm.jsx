import { useContext } from "react";
import { MetContext } from "./context/metContext";
import { useAlerts } from "../hooks/useAlerts";

export const ButtonConfirm = ({label}) => {

  const { setProducts, products, noteProduct, setNoteProduct, amount, setAmount, cost, setCost, setTotal, total } = useContext( MetContext );
  const { addAlert } = useAlerts();

  const onAddProduct = () => {

    if ( !noteProduct.id ) {
      addAlert('No hay nada que agregar', 'alert-yellow');
      return;
    }; 

    setProducts([ { id: new Date().getTime(), amount, cost, name: noteProduct.name }, ...products]);
    localStorage.setItem('products', JSON.stringify(products));
    console.log(parseFloat(total) + parseFloat(cost));
    setTotal( parseFloat(total) + parseFloat(cost) );
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
