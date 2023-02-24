import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsData: formattedData})
  }

  render() {
    const {teamsData} = this.state

    return (
      <div className="bgContainer">
        <div className="headContainer">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>
        <div className="unorderedListContainer">
          <ul className="teamCardsContainer">
            {teamsData.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
