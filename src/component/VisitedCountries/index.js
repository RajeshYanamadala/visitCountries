import './index.css'

const VisitedCountries = props => {
  const {visitCountryList, removeImage} = props
  const {id, imageUrl, name, isVisited} = visitCountryList

  const onClickBtn = () => {
    removeImage(id)
  }

  return (
    <>
      {isVisited && (
        <li className="image-list">
          <img src={imageUrl} alt="thumbnail" className="image" />
          <div className="text-content">
            <p className="name">{name}</p>
            <button type="button" className="remove-btn" onClick={onClickBtn}>
              Remove
            </button>
          </div>
        </li>
      )}
    </>
  )
}

export default VisitedCountries
