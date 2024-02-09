import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-header">
      <div className="navbar-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <ul className="list-items">
          <Link to="/" className="nav-link">
            <li className="home-item">Home</li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li className="jobs-item">Jobs</li>
          </Link>
        </ul>
        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
