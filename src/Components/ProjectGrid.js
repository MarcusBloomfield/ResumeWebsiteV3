import ProjectTile from "./ProjectTile";
import Element from "react-scroll/modules/components/Element";

export default function ProjectTiles({ ...props }) {

    return (
        <Element name="projects" className="projectGridContainer">
            <div className="projectGrid">
                <ProjectTile setTrigger={props.setHardship} array={props.array} title="Hardship" />
                <ProjectTile setTrigger={props.setTPG} array={props.array} title="ThePlaneGame" />
                <ProjectTile setTrigger={props.setIsland} array={props.array} title="Island Generation" />
                <ProjectTile setTrigger={props.setThreeDResumeWebsite} array={props.array} title="3D Resume Website" />
                <ProjectTile setTrigger={props.setArtificalLife} array={props.array} title="Artifical Life" />
                <ProjectTile setTrigger={props.setAimBooster} array={props.array} title="Aim Booster" />
                <ProjectTile setTrigger={props.setZomBoy} array={props.array} title="ZomBoy" />
            </div>
        </Element>
    );
}