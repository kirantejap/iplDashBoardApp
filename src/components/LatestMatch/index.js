import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {details} = this.props

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = details
    return (
      <div className="latestCard">
        <h1>{competingTeam}</h1>
        <h1>{date}</h1>
        <p>{venue}</p>
        <p>{result}</p>
        <hr className="line" />
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man of the Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    )
  }
}
export default LatestMatch
