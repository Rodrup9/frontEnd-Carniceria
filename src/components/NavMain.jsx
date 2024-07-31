import { ButtonCart, ButtonConfirm, ButtonDelete } from "./"

export const NavMain = ({ handleShowMets }) => {



  return (
    <div className="navMain">
        <div>
            <ButtonCart handleShowMets={ handleShowMets } label={'Añadir'} />
            <ButtonConfirm label={'Terminar'} />
        </div>
        <div>
            <ButtonDelete label={'Eliminar'} />    
        </div>
        
    </div>
  )
}
