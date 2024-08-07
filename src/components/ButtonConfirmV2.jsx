import { useContext } from "react";
import { MetContext } from "./context/metContext";
import { useAlerts } from "../hooks/useAlerts";

export const ButtonConfirmV2 = ({label}) => {

  const { setProducts, products, noteProduct, setLoading, setTotal } = useContext( MetContext );

  const { addAlert } = useAlerts();

  const sendOrder = async () => {

    if ( products.length === 0 || noteProduct?.id ) {
      addAlert('Agrega productos para poder enviarlos', 'alert-yellow');
      return;
    }; 

    setLoading(true);

    const response = await fetch('url', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: 'order',
        products,
      }),
   });

   await new Promise( resolve => setTimeout(resolve, 500) );

   if ( !response.ok ) {
    setLoading(false);
    addAlert('Error al enviar la orden', 'alert-red')
    return;
   };

   setLoading(false);

   setProducts([]);

   setTotal(0);

   return;
  }

  return (
    <button className={`buttonConfirm btn ${label && 'btn-text'}`} onClick={ sendOrder } >
        <i className='bx bx-check-circle'></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
