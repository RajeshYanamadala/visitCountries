import './index.css'

const Countries = props => {
  const {countryDetails, changeButtonProps} = props
  const {name, isVisited} = countryDetails

  const onClickButton = value => {
    changeButtonProps(value)
  }

  const activeClassName = isVisited ? 'btn' : 'btn-active'
  const activeButton = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="visit-buttons">
      <p className="country-name">{name}</p>
      <button
        type="button"
        onClick={() => onClickButton(countryDetails)}
        className={activeClassName}
      >
        <p>{activeButton}</p>
      </button>
    </li>
  )
}

export default Countries
