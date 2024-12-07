import { useContext } from "react";
import { MetContext } from "./context/metContext";
import { useAlerts } from "../hooks/useAlerts";
import  axios  from "axios";
import { supabase } from "../connection";
import { productos_venta } from '../hooks/products_sale'

export const ButtonConfirmV2 = ({label}) => {
  
  

  const { setProducts, products, noteProduct, setLoading, setTotal } = useContext( MetContext );

  const { addAlert } = useAlerts();

  const sendOrder = async () => {

    let total_venta = 0;
    let venta = {};
    if (products.length === 0 || noteProduct?.id) {
      addAlert('Agrega productos para poder enviarlos', 'alert-yellow');
      return;
    }
  
    setLoading(true);
  
    const productos = products.map(item => ({
      id: item.id,
      peso: item.amount,
    }));
  
    try {
      const { data, error} = await supabase
        .from('ventas')
        .insert({
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          total: 0,
          balanza: 1,
          pagado: false,
          estatus: 'activo',
        })
        .select()
        .single();
        venta = data;
  
      if (error) {
        
        throw error;
      }
  
  
      for (const producto of productos) {
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .eq('id', producto.id)
          .single();

          const producto_venta = await productos_venta(data, producto.peso, venta)
          .then(

          )
          
          total_venta += producto_venta.total;
        }
    console.log(total_venta, 'el total de la venta es');
  
      addAlert('Venta realizada con éxito', 'alert-green');
      setProducts([]);
      setTotal(0);
    } catch (error) {
      console.error('Error al procesar la venta:', error);
      addAlert('Error al enviar la orden', 'alert-red');
    } finally {
      const {data, error} = await supabase.from('ventas').update({total: total_venta}).eq('id', venta.id).select();
      if (data) {
        setLoading(false)
      }
    }
  };

  return (
    <button className={`buttonConfirm btn ${label && 'btn-text'}`} onClick={ sendOrder } >
        <i className='bx bx-check-circle'></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
