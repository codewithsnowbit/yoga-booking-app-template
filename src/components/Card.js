import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title"><h1>{props.batch}</h1></div> 
                <div className="card-text">
                    <p>
                        <FontAwesomeIcon icon={faCompass} /> {props.location}
                        <br />
                        <FontAwesomeIcon icon={faClock} /> {props.time}
                        <br />
                        <FontAwesomeIcon icon={faCalendarDay} /> {props.date}
                        <br />
                        <a href={props.slug} className="btn btn-primary mt-4">Book slot</a>
                    </p>    
                </div>   
            </div>        
        </div>
    )
}
