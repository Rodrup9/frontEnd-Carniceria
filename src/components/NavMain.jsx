import { ButtonCart, ButtonConfirm, ButtonDelete } from "./"

export const NavMain = () => {



  return (
    <div className="navMain">
        <div>
            <ButtonCart label={'Añadir'} />
            <ButtonConfirm label={'Terminar'} />
        </div>
        <div>
            <ButtonDelete label={'Eliminar'} />    
        </div>
        
    </div>
  )
}
