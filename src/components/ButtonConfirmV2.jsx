import { useContext } from "react";
import { MetContext } from "./context/metContext";
import { useAlerts } from "../hooks/useAlerts";
import  axios  from "axios";

export const ButtonConfirmV2 = ({label}) => {
  

  const { setProducts, products, noteProduct, setLoading, setTotal } = useContext( MetContext );

  const { addAlert } = useAlerts();

  const sendOrder = async () => {

    if ( products.length === 0 || noteProduct?.id ) {
      addAlert('Agrega productos para poder enviarlos', 'alert-yellow');
      return;
    }; 

    setLoading(true);
    console.log(products);

    const productos = products.map(item => {
      return {
        id: item.id,
        peso: item.amount
  
      }
    })
    // const response = await axios.post('http://127.0.0.1:8000/api/venta',{balanza: 1, productos})
    // console.log(response);
    

  //   const response = await fetch('http://127.0.0.1:8000/api/venta', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       order: 'order',
  //       products,
  //     }),
  //  });

  //  if ( response?.status != 200  ) {
  //   setLoading(false);
  //   addAlert('Error al enviar la orden', 'alert-red')
  //   return;
  //  };
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

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
