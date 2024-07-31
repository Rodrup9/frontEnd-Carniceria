
export const MinBoxProductAdded = ({name, amount, price}) => {
  return (
    <div className="minBoxProductAdded">
        <div>
            <h3> { name } </h3>
            <button>
                <i className='bx bx-trash' ></i>
            </button>
        </div>
        <div>
            <p> { amount } </p>
            <p> { price } </p>
        </div>
    </div>
  )
}
