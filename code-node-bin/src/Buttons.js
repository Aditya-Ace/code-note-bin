import { Link } from 'react-router-dom'
const Buttons = () => {
  return (
    <div className="buttons-wrapper">
      <Link to="/" className="logo">
        Code & Note Bin
      </Link>
      <div className="buttons">
        <button className="btn" type="submit">
          Save
        </button>
        <Link to="/new" className="btn">
          New
        </Link>
      </div>
    </div>
  )
}
export default Buttons
