import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'
import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="slider-bg-container">
      <Slider {...settings} className="slides">
        {planetsList.map(each => (
          <PlanetItem planetDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
