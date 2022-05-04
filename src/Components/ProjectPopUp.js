import YoutubePlayer from "./YoutubePlayer";
import React from 'react'

export default function ProjectPopUp({ ...props }) {
    return (props.trigger) ? (
        <div className="popUp animate__animated animate__fadeIn">
            <h1 className="popUpTitle"> {props.title} </h1>
            <a className="popUpVisuals" />
            <p className="popUpInfo"> {props.info} </p>
            <a className="popUpLinks"> </a>
        </div>
    ) : "";
}