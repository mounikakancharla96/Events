import './index.css'

const EventItem = props => {
  const {eventDetails, clickImage, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const imageClassName = isActive ? 'active' : ''
  const clickOnImage = () => {
    clickImage(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="button" onClick={clickOnImage}>
        <img src={imageUrl} alt="event" className={`image ${imageClassName}`} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
