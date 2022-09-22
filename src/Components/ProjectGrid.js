import ProjectTile from "./ProjectTile";
import Element from "react-scroll/modules/components/Element";

export default function ProjectTiles({ ...props }) {

    return (
        <Element name="projects" className="projectGridContainer">
            <div className="projectGrid">
                <ProjectTile setTrigger={props.setHardship} array={props.array} title="Hardship" info="Hardship is a city building, survival game where the player has to lead their civilization to prosperity." />
                <ProjectTile setTrigger={props.setTPG} array={props.array} title="ThePlaneGame" info="The plane game is a 3d, physcics driven, rogue-like, arena survival game." />
                <ProjectTile setTrigger={props.setArtificalLife} array={props.array} title="Artifical Life" info="A simple simulation of simple laws of attraction which create 'Life' like beings. " />
                <ProjectTile setTrigger={props.setIsland} array={props.array} title="Island Generation" info="A 3d island generator that uses perlin noise and a fall off map to create an island." />
                <ProjectTile setTrigger={props.setAimBooster} array={props.array} title="Aim Booster" info="A simple aim trainer to get better at clicking moving targets." />
                <ProjectTile setTrigger={props.setZomBoy} array={props.array} title="ZomBoy" info="ZomBoy is a 2d, endless, dungeon survival game." />
                <ProjectTile setTrigger={props.setThreeDResumeWebsite} array={props.array} title="3D Resume Website" info="A 3D website I am making in order to display a resume in a unique manner." />
            </div>
        </Element>
    );
}