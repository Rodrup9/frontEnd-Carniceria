
export const ButtonDeleteV2 = ({label}) => {
  return (
    <button className={`buttonDeleteV2 btn ${label && 'btn-text'}`}>
        <i className='bx bx-trash' ></i>
        { label && ( <p> { label } </p> ) }
    </button>
  )
}
