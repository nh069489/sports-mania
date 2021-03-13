import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFlag, faRunning, faTransgender, faClock} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router';
const ShowDetail = () => {
    const {strTeam} = useParams();
    const [detail, setDetails]= useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${strTeam}`;
        fetch(url)
          .then(response => response.json())
          .then(data => setDetails(data.teams[0]))
    },[strTeam]);
    return (
        <div>
            <div>
                <div style={{height:'75%'}}>
                    <Image  src={detail.strStadiumThumb} fluid rounded />
                </div>
                <div style={{ padding:'10px',margin:'10px', height:'300px', display:'flex', backgroundColor:'crimson', color:'#fff', borderRadius:'20px'}}>
                   <div style={{width:'40%'}}>
                    <h1>{detail.strAlternate}</h1>
                    <h3><FontAwesomeIcon icon={faClock} />Founded: {detail.intFormedYear}</h3>
                    <h3><FontAwesomeIcon icon={faFlag} />Country : {detail.strCountry}</h3>
                    <h3><FontAwesomeIcon icon={faRunning} /> Sports Type : {detail.strSport}</h3>
                    <h3><FontAwesomeIcon icon={faTransgender} />Gender : {detail.strGender}</h3>
                   </div>
                   <div style={{width:'40%', marginLeft:'100px',overflow:'hidden' }}>
                       <Image src={detail.strTeamFanart4} fluid rounded />
                   </div>
                </div>
                <div>
                    <h5>{detail.strDescriptionEN}</h5>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;