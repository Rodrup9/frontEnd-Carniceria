import { useContext } from "react";
import { MetContext } from "./context/metContext";
import { useAlerts } from "../hooks/useAlerts";
import  axios  from "axios";
import { supabase } from "../connection";

export const ButtonConfirmV2 = ({label}) => {
  

  const { setProducts, products, noteProduct, setLoading, setTotal } = useContext( MetContext );

  const { addAlert } = useAlerts();

  const sendOrder = async () => {
    if (products.length === 0 || noteProduct?.id) {
      addAlert('Agrega productos para poder enviarlos', 'alert-yellow');
      return;
    }
  
    setLoading(true);
  
    // Preparar los productos para la inserción
    const productos = products.map(item => ({
      id: item.id,
      peso: item.amount,
    }));
  
    try {
      // Insertar la venta
      const { data: venta, error: ventaError } = await supabase
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
  
      if (ventaError) {
        throw ventaError;
      }
  
      let total = 0;
  
      // Insertar productos en producto_ventas
      for (const producto of productos) {
        const { data: productoOriginal, error: productoError } = await supabase
          .from('productos')
          .select('*')
          .eq('id', producto.id)
          .single();
  
        if (productoError) {
          throw productoError;
        }
  
        const productoTotal = producto.peso * productoOriginal.precio_de_venta;
  
        const { error: productoVentaError } = await supabase
          .from('producto_ventas')
          .insert({
            producto_id: productoOriginal.id,
            venta_id: venta.id,
            precio: productoOriginal.precio_de_venta,
            peso: producto.peso,
            total: productoTotal,
          });
  
        if (productoVentaError) {
          throw productoVentaError;
        }
  
        total += productoTotal;
      }
  
      // Actualizar el total de la venta
      const { error: updateVentaError } = await supabase
        .from('ventas')
        .update({ total })
        .eq('id', venta.id);
  
      if (updateVentaError) {
        throw updateVentaError;
      }
  
      addAlert('Venta realizada con éxito', 'alert-green');
      setProducts([]);
      setTotal(0);
    } catch (error) {
      console.error('Error al procesar la venta:', error);
      addAlert('Error al enviar la orden', 'alert-red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className={`buttonConfirm btn ${label && 'btn-text'}`} onClick={ sendOrder } >
        <i className='bx bx-check-circle'></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
