
export const MinBoxProductAdded = ({ data }) => {
  return (
    <div className="minBoxProductAdded">
        <div>
            <h3> { data?.name} </h3>
            <button type="button">
                <i className='bx bx-trash' ></i>
            </button>
        </div>
        <div>
            <p> { data?.amount }kg </p>
            <p> ${ data?.cost} </p>
        </div>
    </div>
  )
}
