import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo-image"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button data-testid="hamburgerIconButton" type="button">
              <GiHamburgerMenu />
            </button>
          }
        >
          {close => (
            <>
              <div className="total-modal-container">
                <ul className="hyperlinks-container">
                  <li className="home-container">
                    <AiFillHome />
                    <Link to="/">
                      <p>Home</p>
                    </Link>
                  </li>

                  <li className="about-container">
                    <BsInfoCircleFill />
                    <Link to="/about">
                      <p>About</p>
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
              </div>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default Header
