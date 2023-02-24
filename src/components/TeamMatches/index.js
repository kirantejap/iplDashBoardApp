import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {matchesData: {}, isLoading: true, team: ''}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const formattedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const formattedRecentMatches = data.recent_matches.map(eachMacthh => ({
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }))

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatches: formattedRecentMatches,
    }

    console.log(formattedData)

    this.setState({matchesData: formattedData, isLoading: false, team: id})
  }

  render() {
    const {matchesData, isLoading, team} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchesData

    return (
      <div className="matchBgContainer">
        <img className="banner" src={teamBannerUrl} alt="team banner" />
        <h1 className="latest">Latest Matches</h1>
        <LatestMatch details={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
