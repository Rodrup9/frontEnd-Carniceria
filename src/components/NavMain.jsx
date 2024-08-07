import { ButtonCart, ButtonConfirmV2, ButtonDelete } from "./"

export const NavMain = () => {



  return (
    <div className="navMain">
        <div>
            <ButtonCart label={'Añadir'} />
            <ButtonConfirmV2 label={'Terminar'} />
        </div>
        <div>
            <ButtonDelete label={'Eliminar'} />    
        </div>
        
    </div>
  )
}
