
export const ButtonConfirm = ({label}) => {
  return (
    <button className={`buttonConfirm btn ${label && 'btn-text'}`}>
        <i className='bx bx-check-circle'></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
