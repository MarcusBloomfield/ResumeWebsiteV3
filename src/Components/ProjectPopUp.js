import YoutubePlayer from "./YoutubePlayer";
import React from 'react'

export default function ProjectPopUp({ ...props }) {

    if (props.trigger) {
        return (
            <div data-aos="fade-left" className="popUp">
                <h1 className="popUpTitle"> {props.title} </h1>
                <div className="popUpVisualsContainer">
                    <Visuals youtube={props.videoId} videoId={props.videoId} />
                </div>
                <h3 className="popUpSummary"> Summary </h3>
                <p className="popUpInfo"> {props.info} </p>
                <div className="popUpLinks">
                    <GitHubLink github={props.github} />
                </div>
            </div >
        );
    }
}
function Visuals({ ...props }) {
    if (props.youtube != null) {
        return <YoutubePlayer className="popUpVideo" videoId={props.videoId} />
    }
}
function GitHubLink({ ...props }) {
    if (props.github != null) {
        return < a className="link" href={"https://github.com/MarcusBloomfield/" + props.github} rel="noreferrer" > Github </a >
    }
    else {
        return < a className="link" href={"https://www.youtube.com/channel/UC3WBEpmhnvW3ILqzr9eDR5Q"} rel="noreferrer" > YouTube </a >
    }
}