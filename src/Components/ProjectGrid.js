import ProjectTile from "./ProjectTile";
import Element from "react-scroll/modules/components/Element";

export default function ProjectTiles({ ...props }) {

    return (
        <Element name="projects" className="projectGridContainer">
            <div className="projectGrid">
                <ProjectTile setTrigger={props.setTPG} array={props.array} title="ThePlaneGame" info="The plane game is a 3d, physcics driven, rogue-like, arena survival game." />
                <ProjectTile setTrigger={props.setHardship} array={props.array} title="Hardship" info="Hardship is a city building, survival game where the player has to lead their civilization to prosperity." />
                <ProjectTile setTrigger={props.setZomBoy} array={props.array} title="ZomBoy" info="ZomBoy is a 2d, endless, dungeon survival game." />
                <ProjectTile setTrigger={props.setIsland} array={props.array} title="Island Generation" info="A 3d island generator that uses perlin noise and a fall off map to create an island." />
            </div>
        </Element>
    );
}