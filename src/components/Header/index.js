import './index.css'

import AppContext from '../../context/AppContext'

const Header = () => (
  <AppContext.Consumer>
    {value => {
      const {score} = value
      return (
        <div className="header-container">
          <div>
            <h1>Rock Paper Scissors</h1>
          </div>
          <div className="score-cont">
            <p>Score</p>
            <p style={{fontFamily: 'Roboto'}}>{score}</p>
          </div>
        </div>
      )
    }}
  </AppContext.Consumer>
)

export default Header
