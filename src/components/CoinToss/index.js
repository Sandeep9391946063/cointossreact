// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    ImageResultUrl: HEADS_IMAGE_URL,
    headcount: 0,
    tailscount: 0,
  }

  onTosses = () => {
    const {headcount, tailscount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headcount
    let latestTailsCount = tailscount

    if (toss === 0) {
      tossImage = HEADS_IMAGE_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMAGE_URL
      latestTailsCount += 1
    }

    this.setState({
      ImageResultUrl: tossImage,
      headcount: latestHeadsCount,
      tailscount: latestTailsCount,
    })
  }

  render() {
    const {ImageResultUrl, headcount, tailscount} = this.state

    return (
      <div className="background">
        <div className="bg-white">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <div className="image-button">
            <img src={ImageResultUrl} alt="toss result" className="image" />
            <button type="button" className="button" onClick={this.onTosses}>
              Toss Coin
            </button>
          </div>
          <div className="down">
            <p className="para">Total:{headcount}</p>
            <p className="para">Heads:{tailscount}</p>
            <p className="para">Tails:{headcount + tailscount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
