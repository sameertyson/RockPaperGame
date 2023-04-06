import {Component} from 'react'
import AppContext from './context/AppContext'
import RockPaperScissors from './components/RockPaperScissors'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
console.log(Math.floor(Math.random() * 3))
class App extends Component {
  state = {
    score: 0,
    opponent: choicesList[Math.floor(Math.random() * 3)],
    clicked: false,
    result: '',
    gamer: '',
  }

  playAgain = () => {
    this.setState({
      clicked: false,
      opponent: choicesList[Math.floor(Math.random() * 3)],
    })
  }

  chooseChoice = item => {
    const {opponent} = this.state
    this.setState({gamer: item})
    if (opponent.id === item.id) {
      this.setState({
        result: 'draw',
        clicked: true,
      })
    } else if (
      opponent.id === choicesList[1].id &&
      item.id === choicesList[0].id
    ) {
      this.setState(prevState => ({
        result: 'win',
        clicked: true,
        score: prevState.score + 1,
      }))
    } else if (
      opponent.id === choicesList[2].id &&
      item.id === choicesList[1].id
    ) {
      this.setState(prevState => ({
        result: 'win',
        clicked: true,
        score: prevState.score + 1,
      }))
    } else if (
      opponent.id === choicesList[0].id &&
      item.id === choicesList[2].id
    ) {
      this.setState(prevState => ({
        result: 'win',
        clicked: true,
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        result: 'loss',
        clicked: true,
        score: prevState.score - 1,
      }))
    }
  }

  render() {
    const {score, result, clicked, opponent, gamer} = this.state

    return (
      <AppContext.Provider value={{score}}>
        <RockPaperScissors
          choicesList={choicesList}
          chooseChoice={this.chooseChoice}
          result={result}
          isClicked={clicked}
          opponentDetails={opponent}
          gamer={gamer}
          playAgain={this.playAgain}
        />
      </AppContext.Provider>
    )
  }
}
export default App
