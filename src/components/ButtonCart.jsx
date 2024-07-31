
export const ButtonCart = ({label, handleShowMets}) => {



  return (
    <button className={ `btn buttonCart ${label && 'btn-text'}`} onClick={ () => handleShowMets() }>
        <i className='bx bx-cart-add'></i>
        { label && (<p> {label} </p>) }
    </button>
  )
}
