import { ButtonCart, ButtonConfirmV2, ButtonDelete, ButtonLogout } from "./"

export const NavMain = () => {

  return (
    <div className="navMain">
      <div>
        <ButtonCart label={'Añadir'} />
        <ButtonConfirmV2 label={'Terminar'} />
        <ButtonLogout label={'Salir'} />
      </div>
      <div>
        <ButtonDelete label={'Eliminar'} />
      </div>

    </div>
  )
}

