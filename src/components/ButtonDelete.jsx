
export const ButtonDelete = ({label}) => {
  return (
    <button className={`buttonDelete btn ${label && 'btn-text'}`}>
        <i className='bx bx-trash' ></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
