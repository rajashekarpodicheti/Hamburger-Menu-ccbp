import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
            className="home-image"
          />
        </div>
      </div>
    )
  }
}

export default Home
