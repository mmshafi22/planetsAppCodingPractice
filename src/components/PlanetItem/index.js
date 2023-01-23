import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-item-container">
      <h1 className="heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
