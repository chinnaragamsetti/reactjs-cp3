// Write your code here.

import './index.css'

const Box = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <div className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <button className="button">Show more</button>
    </div>
  )
}
export default Box
