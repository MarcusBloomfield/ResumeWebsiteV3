import ProjectTile from "./ProjectTile";

export default function ProjectTiles({ ...props }) {

    return (
        <div className="projectGridContainer">
            <div className="projectGrid">
                <ProjectTile setTrigger={props.setTPG} array={props.array} title="The Plane Game" info="The plane game is a fully 3d, physcics driven, rogue-like, arena survival game." />
                <ProjectTile setTrigger={props.setHardship} array={props.array} title="Hardship" info="Hardship is my dream game. It is a city building, survival game in which the player has to lead their civilization to prosperity." />
                <ProjectTile setTrigger={props.setZomBoy} array={props.array} title="ZomBoy" info="ZomBoy is a 2d, endless, dungeon survival game." />
                <ProjectTile setTrigger={props.setIsland} array={props.array} title="Unity 3D Random Island Generation" info="This is a fully 3d island generator that uses perlin noise and a fall off map in order to create a dynamic 3d terrain." />
            </div>
        </div>
    );
}