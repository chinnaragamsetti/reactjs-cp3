
import './index.css'

const Box = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} bannerCardItem`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button">Show more</button>
      </div>
    </li>
  )
}
export default Box


