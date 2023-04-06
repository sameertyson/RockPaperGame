import Popup from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import {AppContainer} from './IndexStyles'
import './index.css'

const RockPaperScissors = props => {
  const {
    choicesList,
    chooseChoice,
    result,
    isClicked,
    opponentDetails,
    gamer,
    playAgain,
  } = props
  console.log(choicesList)

  const getChoiceImages = item => {
    const {id, imageUrl} = item
    let testId = ''
    if (id === 'ROCK') {
      testId = 'rockButton'
    } else if (id === 'PAPER') {
      testId = 'paperButton'
    } else {
      testId = 'scissorsButton'
    }
    const clickedChoice = () => {
      chooseChoice(item)
    }
    return (
      <li key={id} className="choice-con">
        <button
          type="button"
          className="choice-button"
          data-testId={testId}
          onClick={clickedChoice}
        >
          <img src={imageUrl} alt={id} className="choice-img" />
        </button>
      </li>
    )
  }

  const onClickPlayAgain = () => {
    playAgain()
  }

  const getGameResult = () => {
    let resultContent = ''
    if (result === 'draw') {
      resultContent = 'IT IS DRAW'
    } else if (result === 'win') {
      resultContent = 'YOU WON'
    } else if (result === 'loss') {
      resultContent = 'YOU LOSE'
    }
    return (
      <div className="result-view-card">
        <div className="result-view">
          <div className="result-view-card">
            <p>YOU</p>
            <img
              src={gamer.imageUrl}
              alt="your choice"
              className="choice-img"
            />
          </div>
          <div className="result-view-card">
            <p>OPPONENT</p>
            <img
              src={opponentDetails.imageUrl}
              alt="opponent choice"
              className="choice-img"
            />
          </div>
        </div>
        <p>{resultContent}</p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    )
  }

  const getGamePannel = () => (
    <div>
      <ul className="choice-list-container">
        {choicesList.map(item => getChoiceImages(item))}
      </ul>
    </div>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {score} = value
        return (
          <AppContainer>
            <Header />
            {isClicked ? getGameResult() : getGamePannel()}

            <Popup
              modal
              trigger={
                <button type="button" className="rules-button">
                  RULES
                </button>
              }
            >
              {close => (
                <div className="popup-container">
                  <button
                    type="button"
                    className="popup-close-btn"
                    onClick={close}
                  >
                    <AiOutlineClose />
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                    alt="rules"
                    className="popup-img"
                  />
                </div>
              )}
            </Popup>
          </AppContainer>
        )
      }}
    </AppContext.Consumer>
  )
}
export default RockPaperScissors
