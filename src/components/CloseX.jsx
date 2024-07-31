
export const CloseX = ({handleShowMets}) => {
  return (
    <button className="closeX" onClick={ () => handleShowMets() }>
        <i className='bx bx-x'></i>
    </button>
  )
}
