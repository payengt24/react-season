import React from 'react'
import './seasonDisplay.css'


const seasonConfig = {
    summer: {
        textDisplay: 'Let\'s hit the beach',
        iconDisplay: 'sun'
    },
    winter: {
        textDisplay: 'Let\'s build a snowman',
        iconDisplay: 'snowflake'  
    }
}

const getSeason = (latitude, month) => {
    console.log('got season');
    if(month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'
    }else  {
        return latitude > 0 ? 'winter' : 'summer' 
    }
    
}

function SeasonDisplay(props) {

    const season = getSeason(props.latitude, new Date().getMonth())
    const {textDisplay, iconDisplay} = seasonConfig[season]

    console.log(season);

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconDisplay} icon`}></i>
            <h1>{textDisplay}</h1>
            <i className={`icon-right massive ${iconDisplay} icon`}></i>
            </div>
            
    )



  
}

export default SeasonDisplay