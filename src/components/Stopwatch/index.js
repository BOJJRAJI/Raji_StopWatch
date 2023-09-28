import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0, timeInMinutes: 0}

  componentWillUnmount() {
    this.clearIntervalTime()
  }

  clearIntervalTime = () => {
    clearInterval(this.timerId)
  }

  stopTimer = () => {
    this.clearIntervalTime()
  }

  resetTimer = () => {
    this.clearIntervalTime()
    this.setState({timeInMinutes: 0, timeInSeconds: 0})
  }

  startTimer = () => {
    this.timerId = setInterval(this.timer, 1000)
  }

  timer = () => {
    const {timeInSeconds} = this.state
    if (timeInSeconds === 60) {
      this.setState(prevState => ({
        timeInSeconds: 0,
        timeInMinutes: prevState.timeInMinutes + 1,
      }))
    }
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  render() {
    const {timeInSeconds, timeInMinutes} = this.state
    let formatSeconds = ''
    let formatMinutes = ''
    if (timeInSeconds < 10) {
      formatSeconds = `0${timeInSeconds}`
    } else {
      formatSeconds = timeInSeconds
    }

    if (timeInMinutes < 10) {
      formatMinutes = `0${timeInMinutes}`
    } else {
      formatMinutes = timeInMinutes
    }

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stop-watch-container">
            <h1 className="timer-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="icon"
              />
              Timer
            </h1>
            <h1 className="time">
              {formatMinutes}:{formatSeconds}
            </h1>
            <div className="buttons-container">
              <button className="start" type="button" onClick={this.startTimer}>
                Start
              </button>
              <button className="stop" type="button" onClick={this.stopTimer}>
                Stop
              </button>
              <button className="reset" type="button" onClick={this.resetTimer}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
