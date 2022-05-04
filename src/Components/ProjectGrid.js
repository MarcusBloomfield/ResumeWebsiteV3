import ProjectTile from "./ProjectTile";

export default function ProjectTiles({ ...props }) {
    return (
        <div className="projectGridContainer">
            <div className="projectGrid">
                <ProjectTile trigger={props.trigger} setTrigger={props.setTrigger} title="The Plane Game" info="The plane game is a fully 3d, physcics driven, rogue-like, arena survival game." />
                <ProjectTile trigger={props.trigger} setTrigger={props.setTrigger} title="Hardship" info="Hardship is my dream game. It is a city building, survival game in which the player has to lead their civilization to prosperity." />
                <ProjectTile trigger={props.trigger} setTrigger={props.setTrigger} title="ZomBoy" info="ZomBoy is a 2d, endless, dungeon survival game." />
                <ProjectTile trigger={props.trigger} setTrigger={props.setTrigger} title="Unity 3D Random Island Generation" info="This is a fully 3d island generator that uses perlin noise and a fall off map in order to create a dynamic 3d terrain." />
            </div>
        </div>
    );
}