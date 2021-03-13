import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard/TeamCard';
import './Home.css';

const Home = () => {
    const [divisions, setDivision] = useState([]);
    const loadData = () => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
         .then(res => res.json())
         .then(data => setDivision(data.teams));
    }
    useEffect(loadData, []) ;
    return (
        <div className='division-styler'>
            {
                divisions.map(division => <TeamCard division={division}></TeamCard>)
            }
        </div>
    );
};

export default Home;