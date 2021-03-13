import React from 'react';
import { Link} from 'react-router-dom';
import './TeamCard.css';

const TeamCard = (props) => {
    console.log(props);
    const {strTeamBadge, strTeam}  = props.division;
    return (
        <div className="team-card">
            <img style={{height:'100px', width:'100px'}} src={strTeamBadge} alt=""/>
            <h3>{strTeam}</h3>

           <h2><Link to={`/explore/${strTeam}`}>Explore</Link></h2>
        </div>
    );
};

export default TeamCard;