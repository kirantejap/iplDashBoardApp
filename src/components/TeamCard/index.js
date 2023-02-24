import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  const mumbai =
    name === 'Mumbai Indians' || name === 'Sunrisers Hyderabad' ? 'mi' : ''

  return (
    <Link to={`/ipl/${id}`} className="link">
      <li className="listContainer">
        <img
          className={`teamImage ${mumbai}`}
          src={teamImageUrl}
          alt="Example response"
        />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
