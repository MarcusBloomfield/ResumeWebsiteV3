import ProjectTile from "./ProjectTile";
import Element from "react-scroll/modules/components/Element";

export default function ProjectTiles({ ...props }) {

    return (
        <Element name="projects" className="projectGridContainer">
            <div className="projectGrid">
                <ProjectTile setTrigger={props.setHardshipPlanet} array={props.array} title="Planet" />
                <ProjectTile setTrigger={props.setHardship2} array={props.array} title="Hardship" />
                <ProjectTile setTrigger={props.setHardshipIsland} array={props.array} title="Island" />
                <ProjectTile setTrigger={props.setTPG} array={props.array} title="Plane" />
                <ProjectTile setTrigger={props.setArtificalLife} array={props.array} title="Life" />
                <ProjectTile setTrigger={props.setThreeDResumeWebsite} array={props.array} title="3D Resume" />
            </div>
        </Element>
    );
}